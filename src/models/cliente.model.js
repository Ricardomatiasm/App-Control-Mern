const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClienteSchema = new Schema({
    nombre: {type:String},
    apellido: {type:String},
    telefono: {type:String},
    direccion: {type:String},
    cumpleaños: {type:String},
    ocupacion: {type:String},
    hobbie: {type:String},
});

module.exports = mongoose.model('Cliente', ClienteSchema);