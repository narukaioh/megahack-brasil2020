"use strict";

var _service = _interopRequireDefault(require("../service"));

var _sinon = _interopRequireDefault(require("sinon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var info = {
  clientId: 1,
  amount: 100
};
describe('BagService test', function () {
  it('has a module', function () {
    expect(_service["default"]).toBeDefined();
  });
  describe('listBag test', function () {
    it('lists bags informations', function () {
      var mock = {
        find: _sinon["default"].spy()
      };
      var bagService = (0, _service["default"])(mock);
      bagService.listBag();
      var expected = true;
      var actual = mock.find.calledOnce;
      expect(actual).toBe(expected);
    });
  });
  describe('createBag test', function () {
    it('create a bag informations', function () {
      var save = _sinon["default"].spy();

      var mock = function mock(data) {
        return _objectSpread({}, data, {
          save: save
        });
      };

      var bagService = (0, _service["default"])(mock);
      bagService.createBag(info);
      var actual = save.calledOnce;
      expect(actual).toBe(true);
    });
  });
});
//# sourceMappingURL=bag-service.test.js.map