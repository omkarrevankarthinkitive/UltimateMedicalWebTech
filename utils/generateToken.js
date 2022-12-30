import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, "hello", {
    expiresIn: '24h',
  })
}

export default generateToken
