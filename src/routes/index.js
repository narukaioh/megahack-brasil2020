import { Router } from 'express'
import { investment, loan } from './investment'
import { getClientBag, postBag } from './bag'

const router = Router()

router.post('/investment/:idInvestor/:quantity/:category', investment)
router.post('/loan/:clientId/:amount/:parcels', loan)

router.get('/bagbank/:clientId', getClientBag)
router.post('/bagbank/:clientId/:amount', postBag)

export default router
