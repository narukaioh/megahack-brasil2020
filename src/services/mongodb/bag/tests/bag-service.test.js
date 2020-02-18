import BagService from '../service'
import sinon from 'sinon'

const info = {
  clientId: 1,
  amount: 100
}

describe('BagService test', () => {
  it('has a module', () => {
    expect(BagService).toBeDefined()
  })

  describe('listBag test', () => {
    it('lists bags informations', () => {
      const mock = { find: sinon.spy() }
      const bagService = BagService(mock)
      bagService.listBag()
      const expected = true
      const actual = mock.find.calledOnce
      expect(actual).toBe(expected)
    })
  })

  describe('createBag test', () => {
    it('create a bag informations', () => {
      const save =  sinon.spy()
      const mock =  function(data) {
        return {
          ...data,
          save
        }
      }
      const bagService = BagService(mock)
      bagService.createBag(info)
      const actual = save.calledOnce
      expect(actual).toBe(true)
    })

  })
})