const mongoose = require('mongoose');
const { Schema } = mongoose;

const CancionesSchema = new Schema({
    Nombre: {type: String, required: true},
    Artista: {type: String, required: true},
    Duracion: {type: String, required: true},
    Fecha: {type: Number, required: true},
    Imagen: {type: String, required: true},
    Musica: {type: String, required: true},
    Favorito: {type: Number, required: true}
},{
  versionKey:false
});

module.exports = mongoose.model('Canciones', CancionesSchema);
