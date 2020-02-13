import { Router } from 'express'
import { getUsers, createUser } from './user'

const router = Router()

router.get('/user', getUsers)
router.post('/user', createUser)

export default router
