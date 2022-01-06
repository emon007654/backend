const mongoose=require('mongoose');


// mongodb://localhost:27017/mydbname

mongoose.connect('mongodb://localhost:27017/myTestDB1')
.then(()=>{
  console.log("connection successfully")
})
.catch((err)=>{
  console.log(err);
})
