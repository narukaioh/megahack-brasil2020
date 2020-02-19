"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invest = exports.spreadMoney = exports.countClientsWithLoansActives = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getClientsWithLoansActives = function getClientsWithLoansActives(clients) {
  return clients.filter(function (client) {
    return client.loan.active;
  });
};

var countClientsWithLoansActives = function countClientsWithLoansActives(clients) {
  return clients.filter(function (client) {
    return client.loan.active;
  }).length;
};

exports.countClientsWithLoansActives = countClientsWithLoansActives;

var normalizeLoan = function normalizeLoan(loan, amount) {
  var rest = 0;
  var amountRequested = loan.amountRequested,
      amountReceived = loan.amountReceived;

  if (amountRequested > amountReceived) {
    if (amount < amountRequested - amountReceived) {
      loan.amountReceived += amount;
    } else {
      rest = amount + amountReceived - amountRequested;
      loan.amountReceived += amount - rest;
    }
  }

  if (loan.amountRequested === loan.amountReceived) {
    loan.active = false;
  }

  return {
    loan: loan,
    rest: rest
  };
};

var spreadMoney = function spreadMoney(clients, amount) {
  if (amount > 0 && countClientsWithLoansActives(clients) > 0) {
    var amountPerClient = amount / countClientsWithLoansActives(clients);
    amount = 0;
    var newClients = clients.map(function (client) {
      var obj = normalizeLoan(client.loan, amountPerClient);
      amount += obj.rest;
      client.loan = obj.loan;
      return _objectSpread({}, client);
    });
    return spreadMoney(newClients, amount);
  }

  return {
    clients: clients,
    amount: amount
  };
};

exports.spreadMoney = spreadMoney;

var invest = function invest(invester, quantity, clients) {
  invester.bag.amount = invester.bag.amount - quantity;
  var clientsWithLoans = getClientsWithLoansActives(clients);
  clientsWithLoans = spreadMoney(clientsWithLoans, quantity);
  clientsWithLoans.clients.push(invester);
  return {
    users: _toConsumableArray(clientsWithLoans.clients),
    amount: clientsWithLoans.amount
  };
};

exports.invest = invest;
//# sourceMappingURL=index.js.map