const listBag = bag => () => {
  return bag.find({})
}

const getClientBag = Bag => attr => () => {
  return Bag.find(attr)
}

const createBag = Bag => attr => {
  if (!attr) throw new Error(`Attr: ${attr}`)
  const bag = new Bag(attr)
  return bag.save()
}

export default (Bag) => {
  return {
    listBag: listBag(Bag),
    createBag: createBag(Bag),
    getClientBag: getClientBag(Bag)
  }
}

