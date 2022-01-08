const port = process.env.PORT || 300
const mongoose = require('mongoose')
const express = require('express')
require('../db/connection1')
const data = require('../models/dataStr')
const app = express()

app.get('/name/:name', async (req, res) => {
  try {
    const name = req.params.name
    var result = await data.find({ name })
    res.send(result)
  } catch (error) {
    res.status(400).send('Invalid Name')
  }
})

app.listen(port, () => {
  console.log(`This app running on http://localhost:${port}`)
})
