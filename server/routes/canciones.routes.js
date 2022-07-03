const { Router } = require('express');
const router = Router();

const cancionesCrtl = require ('../controllers/canciones.controller.js');

router.get('/', cancionesCrtl.getCanciones);
router.post('/', cancionesCrtl.createCanciones);
router.get('/:id', cancionesCrtl.getCancion);
router.put('/:id', cancionesCrtl.editCancion);
router.delete('/:id', cancionesCrtl.deleteCancion);

module.exports = router;
