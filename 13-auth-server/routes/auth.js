const { Router } = require('express')
const { crearUsuario, loginUsuario, renewToken } = require('../controllers/auth')
const {check} = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/valida-jwt')

const router = Router()


//Crear un nuevo usuario
router.post('/new', [
  check('name', 'El nombre no puede estar vacio').not().isEmpty(),
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'El contraseña es obligatorio').isLength({ min: 6 }),
  validarCampos
], crearUsuario)

//Loggin usuario
router.post('/', [
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'El contraseña es obligatorio').isLength({ min: 6 }),
  validarCampos
],loginUsuario)

//validar y revalidar token
router.get('/renew', validarJWT, renewToken)


module.exports = router;