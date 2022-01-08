const port = process.env.PORT || 5000
const express = require('express')
const app = express()
require('../db/connection1')
const dataStr = require('../models/dataStr')
app.get('/main/:name', async (req, res) => {
  try {
    const name = req.params.name
    const result = await dataStr.findOneAndDelete({ _id: name })
    if (!result) {
      res.send('Invalid Name')
      var err = new Error('Invalid id')

      //   res.send(err)
    }
    res.send(result)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`This app running on http://localhost:${port}`)
})
