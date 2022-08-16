const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {

  const payload = { uid, name };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_JWT_SEED, {
      expiresIn: '24h'
    }, (error, token) => {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log(token)
        resolve(token)
      }
    })
  })
}

module.exports = {
  generarJWT
}
