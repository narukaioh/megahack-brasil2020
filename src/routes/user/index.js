
import UserService from '../../services/postgres'

export const getUsers = async (req, res, next) => {
  try {
    const users = await UserService.list()
    res.json(users)
  } catch (e) {
    next(e)
  }
}

export const createUser = async (req, res, next) => {
  const { user } = req.query
  try {
    const userSaved = await UserService.create(user)
    res.json(userSaved)
  } catch (e) {
    next(e)
  }
}