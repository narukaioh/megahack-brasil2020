
const getClientsWithLoansActives = clients => {
  return clients.filter(client => client.loan.active)
}

export const countClientsWithLoansActives = clients => {
  return clients.filter(client => client.loan.active).length
}

const normalizeLoan = (loan, amount) => {
  let rest = 0
  const { amountRequested, amountReceived } = loan
  if (amountRequested > amountReceived) {
    if (amount < (amountRequested - amountReceived)) {
      loan.amountReceived += amount
    } else {
      rest = (amount + amountReceived) - amountRequested
      loan.amountReceived += (amount - rest)
    }
  }
  if (loan.amountRequested === loan.amountReceived) {
    loan.active = false
  }
  return { loan, rest }
}

export const spreadMoney = (clients, amount) => {
  if (amount > 0 && countClientsWithLoansActives(clients) > 0) {
    const amountPerClient = amount / countClientsWithLoansActives(clients)
    amount = 0
    let newClients = clients
      .map(client => {
        let obj = normalizeLoan(client.loan, amountPerClient)
        amount += obj.rest
        client.loan = obj.loan
        return {
          ...client
        }
      })
    return spreadMoney(newClients, amount)
  }
  return { clients, amount }
}

export const invest = (invester, quantity, clients) => {
  invester.bag.amount = invester.bag.amount - quantity
  let clientsWithLoans = getClientsWithLoansActives(clients)
  clientsWithLoans = spreadMoney(clientsWithLoans, quantity)
  clientsWithLoans.clients.push(invester)
  return { 
    users: [ ...clientsWithLoans.clients ],
    amount: clientsWithLoans.amount 
  }
}
