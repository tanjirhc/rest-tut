const express = require('express')
const route = express.Router()

// Get 

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello, I am All Contacts Get Route'
  })
})

module.exports = router