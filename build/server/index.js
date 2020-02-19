"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
server.use((0, _cors["default"])());
server.use('/', _routes["default"]);
var _default = server;
exports["default"] = _default;
//# sourceMappingURL=index.js.map