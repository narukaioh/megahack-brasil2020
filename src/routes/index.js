import { Router } from 'express'
import { investment } from './investment'

const router = Router()

router.post('/investment/:idInvestor/:quantity/:category', investment)

export default router
