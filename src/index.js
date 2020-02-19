import '@babel/polyfill'
require('dotenv').config()

import server from './server'

server.listen(process.env.PORT, () => {
  const { HOST, PORT } = process.env
  console.log(`Listening in http://${HOST}:${PORT}`)
})