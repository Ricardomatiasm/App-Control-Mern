const mongoose = require('mongoose');

const URI = 'mongodb://localhost/AppDario';

mongoose.connect(URI)
    .then(db => console.log('Base de Datos Conectada'))
    .catch(err => console.log(err));

module.exports = mongoose;