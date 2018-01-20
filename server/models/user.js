const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  id: Number,
  account: String,
  password: String,
  roles: {
    type: Array,
    default: []
  }
})

userSchema.index({ id: 1 })

const User = mongoose.model('User', userSchema)

module.exports = User