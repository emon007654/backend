const mongoose = require('mongoose')
const Validator = require('validator')

const firstSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
    minLength:2,
    maxLength:100
  },
  email:{
    type:String,
    required:true,
    validate(value){
      if(Validator.isEmail(value)){
        console.log("Email Is Valid ");
      }else {
        throw new Error("Invalid email")
      }
    }
  }
})

const data = new mongoose.model('data',firstSchema)

module.exports = data  
