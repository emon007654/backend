const express = require('express')
const app = express()
const port = 8080
const data = require('../models/dataStr.js')
require('../db/connection1.js')

app.use(express.json())
app.get('/home', (req, res) => {
  res.send('Hi is working')
})

app.post('/home', async (req, res) => {
  userData = new data(req.body)
  console.log(req.body)

  try {
    var result = await userData.save()
    // console.log(result)
    res.send(result)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

app.listen(port, () => {
  console.log(`this app listening on http://localhost:${port}`)
})
