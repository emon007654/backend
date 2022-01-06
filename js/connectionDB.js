const express = require('express');
const app = express();
const port = 8080
const data = require('../models/dataStr.js')
require('../db/connection1.js')

app.get('/home',(req,res)=>{
  res.send("Hi is working")
})
app.listen(port, () =>{
    console.log(`this app listening on http://localhost:${port}`);
})
