const listBag = bag => () => {
  return bag.find({})
}

const createBag = Bag => attr => {
  if (!attr) throw new Error(`Attr: ${attr}`)
  const bag = new Bag(attr.Bag)
  return bag.save()
}

export default (Bag) => {
  return {
    listBag: listBag(Bag),
    createBag: createBag(Bag)
  }
}

