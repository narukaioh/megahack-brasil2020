"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bag = _interopRequireDefault(require("./bag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].Promise = global.Promise;

_mongoose["default"].connect("".concat(process.env.MONGODB_URI), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var _default = _bag["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map