const express = require('express')
const app = express()
const port = 3000
const data = require('../models/dataStr.js')
require('../db/connection1.js')

app.use(express.json())

// app.get('/home', (req, res) => {
//   res.send('Hi is working')
// })

app.get('/', async (req, res) => {
  try {
    savedData = await data.find()
    // data.find(req.params.id)
    res.send(savedData)
    console.log(savedData)
  } catch (error) {
    res.send(error)
    console.log(error)
  }
})

// serving single data
app.get('/sin/:name', async (req, res) => {
  try {
    const name = req.params.name
    var sinData = await data.findById({ _id: name })
    if (sinData) {
      console.log(sinData)
      res.send(sinData)
    } else {
      res.status(400).send()
    }
    // console.log(req.params.name)
    // res.send(req.params.name)
  } catch (error) {
    res.send(error)
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
