"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
  constants.typeOfFunction = 'function';
  constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
  if (!descriptor || _typeof(descriptor.value) !== constants.typeOfFunction) {
    throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
  }
  return {
    configurable: constants.boolTrue,
    get: function get() {
      var bound = descriptor.value.bind(this);
      // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
      Object.defineProperty(this, propertyKey, {
        value: bound,
        configurable: constants.boolTrue,
        writable: constants.boolTrue
      });
      return bound;
    }
  };
}
exports.bind = bind;
exports.default = bind;