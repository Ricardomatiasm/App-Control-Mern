const express = require('express');
const router = express.Router();

const Turno = require('../models/turnos.model');


// Obtener los Datos
router.get('/', async (req,res) => {
  const turnos = await Turno.find();
  console.log(turnos);
  res.json(turnos);
});

//Obtener dato Individual
router.get('/:id', async (req,res) => {
  const turno = await Turno.find(req.params.id);
  res.json(turno);
});

//Añadir dato
router.post('/', async (req,res) => {
  const { fecha, hora, cliente, descripcion } = req.body;
  const turno = new Turno({ fecha, hora, cliente, descripcion });
  await turno.save();
  res.json({status: 'Turno Guardado'});
});

//modificar datos
router.put('/:id', async (req,res) => {
  const { fecha, hora, cliente, descripcion } =req.body;
  const newTurno = {fecha, hora, cliente, descripcion};
  await Turno.findByIdAndUpdate(req.params.id, newTurno);
  res.json({status: 'Turno Modificado'});
});

//Eliminar datos
router.delete('/:id', async (req, res) => {
  await Turno.findByIdAndRemove(req.params.id);
  res.json({status: 'Turno Eliminado'});
});

module.exports = router;