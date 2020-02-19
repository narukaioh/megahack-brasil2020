"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var listBag = function listBag(bag) {
  return function () {
    return bag.find({});
  };
};

var getClientBag = function getClientBag(Bag) {
  return function (attr) {
    return function () {
      return Bag.find(attr);
    };
  };
};

var createBag = function createBag(Bag) {
  return function (attr) {
    if (!attr) throw new Error("Attr: ".concat(attr));
    var bag = new Bag(attr);
    return bag.save();
  };
};

var _default = function _default(Bag) {
  return {
    listBag: listBag(Bag),
    createBag: createBag(Bag),
    getClientBag: getClientBag(Bag)
  };
};

exports["default"] = _default;
//# sourceMappingURL=service.js.map