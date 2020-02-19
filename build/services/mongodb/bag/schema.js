"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var BagSchema = new Schema({
  clientId: Number,
  amount: Number
});

var _default = _mongoose["default"].model('Bag', BagSchema);

exports["default"] = _default;
//# sourceMappingURL=schema.js.map