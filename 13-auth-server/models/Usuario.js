
const { Schema, model } = require("mongoose");

/* Creating a schema for the user. */
const UsuarioShema = Schema({
  name: {
  type: String,
  required:true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
})

module.exports = model('Usuario', UsuarioShema);