const usuariosCrtl = {};

const Usuario = require('../models/usuarios');

const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { router } = require('../app');

usuariosCrtl.getUsuarios = async (req, res) => {
  res.json({status: 'funciona'})
  // const usuarios = await Usuario.find();
   //res.json(usuarios);
}

usuariosCrtl.createUsuarios = async (req, res) =>{
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    const token = jwt.sign({_id:nuevoUsuario._id}, 'secretkey')
    res.status(200).json({token: token})
}

usuariosCrtl.loginUsuarios = async (req, res) =>{
  const {Email, Contrasenia, Admin} = req.body
  const usuario = await Usuario.findOne({Email})
  if (!usuario) return res.status(401).send("El email no existe");
  if (usuario.Contrasenia !== Contrasenia) return res.status(401).send('Contraseña Erronea');
  if (usuario.Admin !== Admin) return res.status(401).send('Permisos Erroneos');

  const token = jwt.sign({_id: usuario._id}, 'secretkey');
  return res.status(200).json({token});
}

usuariosCrtl.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

usuariosCrtl.editUsuario = async (req, res) => {
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Usuario Actualizado'})
}

usuariosCrtl.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario Eliminado'})
}

module.exports = usuariosCrtl;
