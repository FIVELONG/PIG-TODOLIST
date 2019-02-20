"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayQuerySelector = exports.delay = undefined;

var _index = require("../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REM_LAYOUT_DELAY = 500;
function delay() {
  return new Promise(function (resolve) {
    if (_index2.default.getEnv() === _index2.default.ENV_TYPE.WEB) {
      setTimeout(function () {
        resolve();
      }, REM_LAYOUT_DELAY);
      return;
    }
    resolve();
  });
}
function delayQuerySelector($scope, selectorStr) {
  var selector = _index2.default.createSelectorQuery().in($scope);
  return new Promise(function (resolve) {
    delay().then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}
exports.delay = delay;
exports.delayQuerySelector = delayQuerySelector;