const { response } = require('express')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')


const crearUsuario = async (req, res = response) => {
  const { email, name, password } = req.body

  try {

  //Verificar que no existe un usuario con el mismo email
    
    const usuario = await Usuario.findOne({ email })
    
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario ya existe con ese email'
      })
    }

  //Crear usuurio con el modelo
    
   const dbusuario = new Usuario(req.body);

  //Hashear password
    
    const salt = bcrypt.genSaltSync();
    dbusuario.password = bcrypt.hashSync(password, salt);

  //Generar el JWT
    
    const token = await generarJWT(dbusuario.id, name)
    
  //Crear el usuario
    
   await dbusuario.save()
  
  //Generar respuesta correcta
    return res.status(201).json({
      ok: true,
      uid: dbusuario.id,
      name,
      email,
      token
  })
  
  }
  catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    })
    
  }
}

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body

  try {
    const dbusuario = await Usuario.findOne({ email })

    //Verificar que existe el email

    if (!dbusuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El correo no existe'
      })
    }

    //Verificar password
    const validPassword = bcrypt.compareSync(password, dbusuario.password)

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Password incorrecto'
      })
    }

    //Generar el JWT
    const token = await generarJWT(dbusuario.id, dbusuario.name)

    //Respuesta del servicio
    return res.json({
      ok: true,
      uid: dbusuario.id,
      name: dbusuario.name,
      email: dbusuario.email,
      token
    })


    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    })
  }
}

const renewToken = async (req, res = response) => {

  const { uid } = req

  //Leer base de datos

  const dbUser = await Usuario.findById(uid)

  token = await generarJWT(uid, dbUser.name)

  return res.json({
    ok: true,
    uid,
    name: dbUser.name,
    email: dbUser.email,
    token
  })
}


module.exports = {
  crearUsuario,
  loginUsuario,
  renewToken
}