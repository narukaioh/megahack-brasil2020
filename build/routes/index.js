"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _investment = require("./investment");

var _bag = require("./bag");

var router = (0, _express.Router)();
router.post('/investment/:idInvestor/:quantity/:category', _investment.investment);
router.post('/loan/:clientId/:amount/:parcels', _investment.loan);
router.get('/bagbank/:clientId', _bag.getClientBag);
router.post('/bagbank/:clientId/:amount', _bag.postBag);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map