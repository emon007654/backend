const express = require('express')
const app = express()
const port = 8080
const data = require('../models/dataStr.js')
require('../db/connection1.js')

app.use(express.json())
app.get('/upd', (req, res) => {
  res.send('Hi is working')
})

app.post('/upd', async (req, res) => {
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

app.patch('/upd', async (req, res) => {
  try {
    var result = await data.find()
    res.send(result)
  } catch (error) {
    console.log(error)
  }
})
app.patch('/upd/:name', async (req, res) => {
  try {
    const id = req.params.name
    console.log(id)
    const userName = req.body
    const updName = await data.findByIdAndUpdate(
      { _id: id },
      { name: userName.name },
      { new: true },
    )
    res.send(updName)
  } catch (error) {
    res.send(error)
  }
})

app.listen(port, () => {
  console.log(`this app listening on http://localhost:${port}`)
})
