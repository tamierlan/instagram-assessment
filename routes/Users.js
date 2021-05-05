const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')
process.env.SECRET_KEY = 'secret'




users.get('/users', (req, res) => {
  User.find()
  .then(allUsers => res.json(allUsers))
  .catch(() => {
    res.send('Somthing wrong with server try again later!')
  })
});

users.delete('/delete/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then(() => res.json('user deleted'))
  .catch(err => res.status(400).json('Error: ' + err));
})


const toLogin = (email, password, res) => {
  User.findOne({
    email: email
  })
  .then(user => {
    if(user) {
      if(bcrypt.compareSync(password, user.password)) {
        const payload = {
          _id: user._id,
          email: user.email,
          fullname: user.fullname,
          username: user.username,
          password: user.password,
          created: user.created
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 1440 })
        res.send(token)
      } else { res.json('User does not exist' )}
    } else {
      res.json( 'User does not exist' )
    }
  })
  .catch(() => {
    res.send('User does not exist')
  })
};



users.post('/login', (req, res) => {
  toLogin(req.body.email, req.body.password, res);
});




users.post('/signup', (req, res) => {
  const newUser = {
    email: req.body.email,
    fullname: req.body.fullname,
    username: req.body.username,
    password: req.body.password,
    created: new Date()
  };

  User.findOne({ email: req.body.email })
  .then(exist => {
    if(!exist) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        newUser.password = hash
        User.create(newUser)
        .then(() => {
          toLogin(req.body.email, req.body.password, res)
        })
      })
    } else {
      res.json('User already exist')
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
});

module.exports = users
