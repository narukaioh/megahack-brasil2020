import mongoose from 'mongoose'
import Bag from '../schema'
const mongoDB = 'mongodb://localhost:27017/bankinfo-test'

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const info = {
  clientId: 1,
  amount: 100
}

describe('User informations schema test', () => {
  
  beforeAll(async () => {
    await Bag.deleteMany()
  })

  afterEach(async () => {
    await Bag.deleteMany()
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  it('has a module', () => {
    expect(Bag).toBeDefined()
  })

  describe('get bag informations', () => {   
    it('gets a bag information ', async () => {
      const bag = new Bag(info)
      await bag.save()

      const foundBag = await Bag.find(info)
      const expected = { clientId: 1, amount: 100 }
      const actual = foundBag.shift()
      expect(actual.amount).toBe(expected.amount)
    })
  })

  describe('save bag informations', () => {
    it('saves a bag information ', async () => {
      const bag = new Bag(info)
      const savedBag = await bag.save()
      const expected = { clientId: 1, amount: 100 }
      const actual = savedBag.amount
      expect(actual).toBe(expected.amount)
    })
  })

})