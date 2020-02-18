
import { spreadMoney, countClientsWithLoansActives} from '../index'

describe('Servico para gerenciar o Investimento', () => {
  
  let clients

  beforeEach(() => {
    clients = [
      { id: 1, category: "A", bag: { amount: 0 },
        loan: { active: true, amountRequested: 50, amountReceived: 0 }
      },
      { id: 2, category: "A", bag: { amount: 0 },
        loan: { active: true, amountRequested: 180, amountReceived: 0 }
      }
    ]
  })

  it('', () => {
    expect(countClientsWithLoansActives(clients)).toBe(2)
  })

  it('Deve dividir dinheiro igualmente para todos os emprestimos.', () => {
    const resultExpected = { 
      amount: 0, 
      clients: [
        { id: 1, category: "A", bag: { amount: 0 },
          loan: { active: false, amountRequested: 50, amountReceived: 50 }
        },
        { id: 2, category: "A", bag: { amount: 0 },
          loan: { active: true, amountRequested: 180, amountReceived: 160 }
        }
      ]
    }

    const result = spreadMoney(clients, 210)
    expect(result).toStrictEqual(resultExpected)
  })

  it('Deve somente passar a quantidade necessária', () => {
    clients[1] = { 
        id: 2, category: "A", bag: { amount: 0 },
        loan: { active: true, amountRequested: 50, amountReceived: 0 }
      }

    const resultExpected = { amount: 20, clients: [
      { id: 1, category: "A", bag: { amount: 0 },
        loan:{ active: false, amountRequested: 50, amountReceived: 50 }
      },
      { id: 2, category: "A", bag: { amount: 0 },
        loan:{ active: false, amountRequested: 50, amountReceived: 50 }
      }
    ]}
    const result = spreadMoney(clients, 120)
    expect(result).toStrictEqual(resultExpected)
  })

})