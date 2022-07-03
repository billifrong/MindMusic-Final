const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuariosSchema = new Schema({
    Email: {type: String, required: true},
    Contrasenia: {type: String, required: true},
    Admin: {type: String, required: true}
},{
  versionKey:false
});

module.exports = mongoose.model('Usuarios', usuariosSchema);
