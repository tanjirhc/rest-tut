const express = require('express');

const contactRoute = require('./api/routes/contact')

const app = express();

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<div><h1>Hello World</h1><p>Hello Fleckians!</p></div>')
})

app.use('/api/contacts', contactRoute)

const contacts = [
  {name: 'HM Nayem', email: 'something@gmail.com'},
  {name: 'Shegufta Taranjum', email: 'anothermail.com'},
  {name: 'Salvy', email: 'salvy@gmail.com'}
]