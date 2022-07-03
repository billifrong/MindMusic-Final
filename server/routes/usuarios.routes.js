const { Router } = require('express');
const router = Router();

const usuariosCrtl = require ('../controllers/usuarios.controller.js');

router.get('/', usuariosCrtl.getUsuarios);
router.post('/signup', usuariosCrtl.createUsuarios);
router.post('/signin', usuariosCrtl.loginUsuarios);
router.get('/tasks', usuariosCrtl.getUsuario);
router.put('/:id', usuariosCrtl.editUsuario);
router.delete('/:id', usuariosCrtl.deleteUsuario);

module.exports = router;
