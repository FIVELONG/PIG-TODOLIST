'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logError = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logError = exports.logError = function logError(name, action, info) {
  if (!info) {
    info = 'empty';
  }
  try {
    var deviceInfo = _index2.default.getSystemInfoSync(); // 这替换成 taro的
    var device = JSON.stringify(deviceInfo);
  } catch (e) {
    console.error('not support getSystemInfoSync api', err.message);
  }
  var time = formatTime(new Date());
  console.error(time, name, action, info, device);
  // 如果使用了 第三方日志自动上报
  // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })
  if ((typeof info === 'undefined' ? 'undefined' : _typeof(info)) === 'object') {
    info = JSON.stringify(info);
  }
};