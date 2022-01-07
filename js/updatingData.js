const express = require('express')
const app = express()
const port = 8080
const Userdata = require('../models/dataStr.js')
require('../db/connection1.js')

app.use(express.json())
// app.get('/home', (req, res) => {
//   res.send('Hi is working')
// })

app.get('/', async (req, res) => {
  const userId = '61d75db795ee5d5be988cccf'
  // var user_id = '5eb985d440bd2155e4d788e2';
  try {
    var results = await Userdata.findByIdAndUpdate(userId, { name: 'Gourav' })
  } catch (error) {
    console.log(error)
  }
  res.send(results)
})

// var result = await data.updateMany({ email: 'emonhasan@gmail.com' },{ $set: { name: 'emkm' } },

app.listen(port, () => {
  console.log(`this app listening on http://localhost:${port}`)
})
