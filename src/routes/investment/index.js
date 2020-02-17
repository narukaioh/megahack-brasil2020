import { invest } from '../../services/procob'
import UserService from '../../services/users'

export const investment = async (req, res, next) => {
  const { idInvestor, quantity, category } = req.params

  try {
    let investor = await UserService.get(idInvestor)
    let clients = await UserService.getClientsByCategory(idInvestor, category)
    investor = invest(investor, quantity, clients)
    investor = await UserService.update(investor)
    res.json(investor)
  } catch (e) {
    next(e)
  }
}