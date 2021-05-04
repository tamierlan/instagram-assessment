const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')
process.env.SECRET_KEY = 'secret'



const toLogin = (email, password, res) => {
  User.findOne({
    email: email
  })
  .then(user => {
    if(user) {
      if(bcrypt.compareSync(password, user.password)) {
        const payload = {
          _id: user._id,
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






users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })

  .then(user => {
    if (user) {
      res.json(user)
    } else {
      res.send('User does not exist')
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})













module.exports = users
