const mongoose = require('mongoose');
const {Schema} = mongoose;

const TurnoSchema = new Schema({
  fecha: {type:Date},
  hora: {type:String},
  cliente: {type:String},
  descripcion: {type:String}
});

module.exports = mongoose.model('Turno', TurnoSchema);