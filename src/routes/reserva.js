const { Router } = require('express');
const rCotroller = require('../controllers/reserva.controller');
const mVerified = require('../middlewares/verify.middleware');
const router = Router();

router.post('/',mVerified.auth,rCotroller.crear_reserva);
router.post('/reserva',mVerified.auth,rCotroller.confirmar_reserva);
router.post('/sreserva',mVerified.auth,rCotroller.confirmar_silla_reserva);
router.post('/silla',mVerified.auth,rCotroller.reservar_silla);
router.post('/snack',mVerified.auth,rCotroller.reservar_snack)
router.get('/:pk_sala/:pk_funcion/:pk_numero_documento',rCotroller.disponibilidadSillas); // Se elimina la autenticación para pruebas con Capataz 14 de marzo de 2020

module.exports = router;