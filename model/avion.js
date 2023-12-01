const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const avionSchema = new Schema({
    nombre: String,
    propulsion: String,
    descripcion: String
})

// Crear modelo
const avion = mongoose.model('Aviones', avionSchema);

module.exports = avion;
