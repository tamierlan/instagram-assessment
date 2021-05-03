const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const Users = require('./routes/Users')

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))


// const mongoURI = 'mongodb+srv://user:tamerlan12@cluster0-buc3s.mongodb.net/test?retryWrites=true&w=majority'
const mongoURI = 'mongodb+srv://tamerlan12:tamerlan12@cluster0.o4f3e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true })
.then(() => console.log('\u{1F680} MongoDB connected \u{1F680}'))
.catch(err => console.log(err))

app.use('/', Users)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
}


app.listen(port, () => {
  console.log("\u{1F525} app listen on port", port ,"\u{1F525}")
})
