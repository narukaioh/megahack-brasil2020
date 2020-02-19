"use strict";

var _index = require("../index");

describe('Servico para gerenciar o Investimento', function () {
  var clients;
  beforeEach(function () {
    clients = [{
      id: 1,
      category: "A",
      bag: {
        amount: 0
      },
      loan: {
        active: true,
        amountRequested: 50,
        amountReceived: 0
      }
    }, {
      id: 2,
      category: "A",
      bag: {
        amount: 0
      },
      loan: {
        active: true,
        amountRequested: 180,
        amountReceived: 0
      }
    }];
  });
  it('', function () {
    expect((0, _index.countClientsWithLoansActives)(clients)).toBe(2);
  });
  it('Deve dividir dinheiro igualmente para todos os emprestimos.', function () {
    var resultExpected = {
      amount: 0,
      clients: [{
        id: 1,
        category: "A",
        bag: {
          amount: 0
        },
        loan: {
          active: false,
          amountRequested: 50,
          amountReceived: 50
        }
      }, {
        id: 2,
        category: "A",
        bag: {
          amount: 0
        },
        loan: {
          active: true,
          amountRequested: 180,
          amountReceived: 160
        }
      }]
    };
    var result = (0, _index.spreadMoney)(clients, 210);
    expect(result).toStrictEqual(resultExpected);
  });
  it('Deve somente passar a quantidade necessária', function () {
    clients[1] = {
      id: 2,
      category: "A",
      bag: {
        amount: 0
      },
      loan: {
        active: true,
        amountRequested: 50,
        amountReceived: 0
      }
    };
    var resultExpected = {
      amount: 20,
      clients: [{
        id: 1,
        category: "A",
        bag: {
          amount: 0
        },
        loan: {
          active: false,
          amountRequested: 50,
          amountReceived: 50
        }
      }, {
        id: 2,
        category: "A",
        bag: {
          amount: 0
        },
        loan: {
          active: false,
          amountRequested: 50,
          amountReceived: 50
        }
      }]
    };
    var result = (0, _index.spreadMoney)(clients, 120);
    expect(result).toStrictEqual(resultExpected);
  });
});
//# sourceMappingURL=initial.test.js.map