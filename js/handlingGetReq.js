const express = require('express')
const app = express()
const port = 8080
const data = require('../models/dataStr.js')
require('../db/connection1.js')

app.use(express.json())

// app.get('/home', (req, res) => {
//   res.send('Hi is working')
// })

app.get('/', async (req, res) => {
  try {
    savedData = await data.find(req.body)
    res.send(savedData)
    console.log(savedData)
  } catch (error) {
    res.send(error)
    console.log(error)
  }
})

app.post('/home', async (req, res) => {
  userData = new data(req.body)

  try {
    var result = await userData.save()
    console.log(result)
    res.send(result)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

app.listen(port, () => {
  console.log(`this app listening on http://localhost:${port}`)
})
