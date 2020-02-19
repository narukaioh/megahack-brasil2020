"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _schema = _interopRequireDefault(require("../schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mongoDB = 'mongodb://localhost:27017/bankinfo-test';

_mongoose["default"].connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var info = {
  clientId: 1,
  amount: 100
};
describe('User informations schema test', function () {
  beforeAll(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _schema["default"].deleteMany();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  afterEach(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _schema["default"].deleteMany();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  afterAll(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _mongoose["default"].connection.close();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('has a module', function () {
    expect(_schema["default"]).toBeDefined();
  });
  describe('get bag informations', function () {
    it('gets a bag information ',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var bag, foundBag, expected, actual;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              bag = new _schema["default"](info);
              _context4.next = 3;
              return bag.save();

            case 3:
              _context4.next = 5;
              return _schema["default"].find(info);

            case 5:
              foundBag = _context4.sent;
              expected = {
                clientId: 1,
                amount: 100
              };
              actual = foundBag.shift();
              expect(actual.amount).toBe(expected.amount);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe('save bag informations', function () {
    it('saves a bag information ',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      var bag, savedBag, expected, actual;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              bag = new _schema["default"](info);
              _context5.next = 3;
              return bag.save();

            case 3:
              savedBag = _context5.sent;
              expected = {
                clientId: 1,
                amount: 100
              };
              actual = savedBag.amount;
              expect(actual).toBe(expected.amount);

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  });
});
//# sourceMappingURL=bag-schema.test.js.map