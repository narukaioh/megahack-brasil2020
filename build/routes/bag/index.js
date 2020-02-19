"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postBag = exports.getClientBag = void 0;

var _mongodb = _interopRequireDefault(require("../../services/mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getClientBag =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var _ref2, clientId, bag;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = req.params || req.query, clientId = _ref2.clientId;
            _context.prev = 1;
            console.log(_mongodb["default"].getClientBag);
            _context.next = 5;
            return _mongodb["default"].getClientBag({
              clientId: 1
            });

          case 5:
            bag = _context.sent;
            res.json(bag);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            next(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function getClientBag(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getClientBag = getClientBag;

var postBag =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _ref4, clientId, amount, bag;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = req.params || req.query, clientId = _ref4.clientId, amount = _ref4.amount;
            _context2.prev = 1;
            _context2.next = 4;
            return _mongodb["default"].createBag({
              clientId: clientId,
              amount: amount
            });

          case 4:
            bag = _context2.sent;
            res.json(bag);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            next(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function postBag(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.postBag = postBag;
//# sourceMappingURL=index.js.map