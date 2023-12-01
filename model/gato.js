const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const gatoSchema = new Schema({
    nombre: String,
    sexo: String,
    color: String
})

// Crear modelo
const gato = mongoose.model('gatos', gatoSchema);

module.exports = gato