const route = require('express').Router();
const controllerPaletas = require('../controllers/paletas.controller');
const { validId, validObjectBody } = require('../middlewares/paleta.middleware');

route.get('/find-paletas', controllerPaletas.findAllPaletasController);
route.get('/find-paleta/:id', validId, controllerPaletas.findByIdPaletaController);
route.post('/create', validObjectBody, controllerPaletas.createPaletaController);
route.put('/update/:id',validId, validObjectBody,  controllerPaletas.updatePaletaController);
route.delete('/delete/:id', validId, controllerPaletas.deletePaletaController);

module.exports = route;
