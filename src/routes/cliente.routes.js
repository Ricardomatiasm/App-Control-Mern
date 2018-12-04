const express = require('express');
const router = express.Router();

const Cliente = require('../models/cliente.model');


// Obtener datos
router.get('/', async (req, res) => {
   const clientes = await Cliente.find();
   console.log(clientes);
   res.json(clientes);
});

// Obtener dato individual
router.get('/:id', async (req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente);
});


// añadir datos
router.post('/', async (req, res) => {
    const { nombre, apellido, telefono, direccion, cumpleaños, ocupacion, hobbie} = req.body;
    const cliente = new Cliente({ nombre, apellido, telefono, direccion, cumpleaños, ocupacion, hobbie });
    await cliente.save();
    res.json({status: 'Cliente Guardado'});
});

// modificar datos
router.put('/:id', async (req,res) => {
    const {nombre, apellido, telefono, direccion, cumpleaños, ocupacion, hobbie } = req.body;
    const newCliente = { nombre, apellido, telefono, direccion, cumpleaños, ocupacion, hobbie };
    await Cliente.findByIdAndUpdate(req.params.id, newCliente);
    res.json({status:'Cliente Actualizado'});
});

// Eliminar datos
router.delete('/:id', async (req, res) => {
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({status: 'Cliente Eliminado'});
});





module.exports = router;