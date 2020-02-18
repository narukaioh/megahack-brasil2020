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