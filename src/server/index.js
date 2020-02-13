import express from 'express'
import routes from '../routes'
import cors from 'cors'

const server = express()

server.use(cors())
server.use('/', routes)

export default server