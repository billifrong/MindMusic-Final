const cancionesCrtl = {};

const Cancion = require('../models/canciones');

cancionesCrtl.getCanciones = async (req, res) => {
   const canciones = await Cancion.find();
   res.json(canciones);
}

cancionesCrtl.createCanciones = async (req, res) =>{
    const nuevaCancion = new Cancion(req.body);
    await nuevaCancion.save();
    res.json({status: 'Cancion Creada'});
}

cancionesCrtl.getCancion = async (req, res) => {
    const cancion = await Cancion.findById(req.params.id);
    res.json(cancion);
}

cancionesCrtl.editCancion = async (req, res) => {
    await Cancion.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Cancion Actualizada'})
}

cancionesCrtl.deleteCancion = async (req, res) => {
    await Cancion.findByIdAndRemove(req.params.id);
    res.json({status: 'Cancion Eliminada'})
}

module.exports = cancionesCrtl;
