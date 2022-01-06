const mongoose = require('mongoose')
const validator = require('validator')

const firstSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email')
      }
    },
  },
})

const data = new mongoose.model('data', firstSchema)

module.exports = data
