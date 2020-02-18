import { invest } from '../../services/investments'
import UserService from '../../services/users'

export const investment = async (req, res, next) => {
  const { idInvestor, quantity, category } = req.params

  try {
    let investor = await UserService.get(idInvestor)
    let clients = await UserService.getClientsByCategory(idInvestor, category)
    let response = {}
    if (clients !== undefined && clients !== null && clients.length > 0) {
      let investment  = invest(investor, quantity, clients)
      response = await UserService.updateUsers(investment.users)
    }
    res.json(response)
  } catch (e) {
    next(e)
  }
}

export const loan = async (req, res, next) => {
  try {
    const { clientId, amount, parcels } = req.params || req.body || req.query
    let client = await UserService.get(clientId)
    client.loan.active = true
    client.loan.amountRequested = parseFloat(amount)
    client.loan.parcels = parcels
    let response = await UserService.update(client)
    res.json(response)
  } catch (e) {
    next(e)
  }
}