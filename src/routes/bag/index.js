import BagService from '../../services/mongodb'

export const getClientBag = async (req, res, next) => {
  const { clientId } = req.params || req.query
  try {
    console.log(BagService.getClientBag)
    const bag = await BagService.getClientBag({ clientId: 1 })
    res.json(bag)
  } catch (e) {
    next(e)
  }
}

export const postBag = async (req, res, next) => {
  const { clientId, amount } = req.params || req.query
  try {
    const bag = await BagService.createBag({ clientId, amount })
    res.json(bag)
  } catch (e) {
    next(e)
  }
}