const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<div><h1>Hello World</h1><p>Hello Fleckians!</p></div>')
})

app.get('/posts', (req, res) => {
  res.send('<h1>I am post page</h1>')
})

app.get('/api/contacts', (req, res) => {
  res.send(contacts)
})


app.post('/api/contacts', (req, res) => {
  res.json({
    message: 'I am Post Method'
  })
}) 
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
}) 

const contacts = [
  {name: 'HM Nayem', email: 'something@gmail.com'},
  {name: 'Shegufta Taranjum', email: 'anothermail.com'},
  {name: 'Salvy', email: 'salvy@gmail.com'}
]