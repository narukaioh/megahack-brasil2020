"use strict";

require("@babel/polyfill");

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

_server["default"].listen(process.env.PORT, function () {
  var _process$env = process.env,
      HOST = _process$env.HOST,
      PORT = _process$env.PORT;
  console.log("Listening in http://".concat(HOST, ":").concat(PORT));
});
//# sourceMappingURL=index.js.map