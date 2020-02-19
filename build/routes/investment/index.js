"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loan = exports.investment = void 0;

var _investments = require("../../services/investments");

var _users = _interopRequireDefault(require("../../services/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var investment =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$params, idInvestor, quantity, category, investor, clients, response, _investment;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, idInvestor = _req$params.idInvestor, quantity = _req$params.quantity, category = _req$params.category;
            _context.prev = 1;
            _context.next = 4;
            return _users["default"].get(idInvestor);

          case 4:
            investor = _context.sent;
            _context.next = 7;
            return _users["default"].getClientsByCategory(idInvestor, category);

          case 7:
            clients = _context.sent;
            response = {};

            if (!(clients !== undefined && clients !== null && clients.length > 0)) {
              _context.next = 14;
              break;
            }

            _investment = (0, _investments.invest)(investor, quantity, clients);
            _context.next = 13;
            return _users["default"].updateUsers(_investment.users);

          case 13:
            response = _context.sent;

          case 14:
            res.json(response);
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](1);
            next(_context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 17]]);
  }));

  return function investment(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.investment = investment;

var loan =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _ref3, clientId, amount, parcels, client, response;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _ref3 = req.params || req.body || req.query, clientId = _ref3.clientId, amount = _ref3.amount, parcels = _ref3.parcels;
            _context2.next = 4;
            return _users["default"].get(clientId);

          case 4:
            client = _context2.sent;
            client.loan.active = true;
            client.loan.amountRequested = parseFloat(amount);
            client.loan.parcels = parcels;
            _context2.next = 10;
            return _users["default"].update(client);

          case 10:
            response = _context2.sent;
            res.json(response);
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));

  return function loan(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loan = loan;
//# sourceMappingURL=index.js.map