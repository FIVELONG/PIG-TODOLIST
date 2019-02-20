"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateCalendarGroup;
exports.getGenerateDate = getGenerateDate;

var _dayjsMin = require("../../../../../../dayjs/dayjs.min.js");

var _dayjsMin2 = _interopRequireDefault(_dayjsMin);

var _flow2 = require("../../../../../../lodash/flow.js");

var _flow3 = _interopRequireDefault(_flow2);

var _plugins = require("./plugins.js");

var _plugins2 = _interopRequireDefault(_plugins);

var _constant = require("./constant.js");

var constant = _interopRequireWildcard(_constant);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOTAL = 42;
function getFullItem(item, options, selectedDate, isShowStatus) {
  if (!isShowStatus) return item;
  var bindedPlugins = _plugins2.default.map(function (fn) {
    return fn.bind(null, {
      options: options,
      selectedDate: selectedDate
    });
  });
  return (0, _flow3.default)(bindedPlugins)(item);
}
function generateCalendarGroup(options) {
  return function (generateDate, selectedDate, isShowStatus) {
    var date = (0, _dayjsMin2.default)(generateDate);
    var format = options.format;
    // 获取生成日期的第一天 和 最后一天

    var firstDate = date.startOf('month');
    var lastDate = date.endOf('month');
    var preMonthDate = date.subtract(1, 'month');
    var list = [];
    var nowMonthDays = date.daysInMonth(); // 获取这个月有多少天
    var preMonthLastDay = preMonthDate.endOf('month').day(); // 获取上个月最后一天是周几
    // 生成上个月的日期
    for (var _i = 1; _i <= preMonthLastDay + 1; _i++) {
      var thisDate = firstDate.subtract(_i, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: constant.TYPE_PRE_MONTH,
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    }
    list.reverse();
    // 生成这个月的日期
    for (var _i2 = 0; _i2 < nowMonthDays; _i2++) {
      var _thisDate = firstDate.add(_i2, 'day').startOf('day');
      var _item = {
        marks: [],
        _value: _thisDate,
        text: _thisDate.date(),
        type: constant.TYPE_NOW_MONTH,
        value: _thisDate.format(format)
      };
      _item = getFullItem(_item, options, selectedDate, isShowStatus);
      list.push(_item);
    }
    // 生成下个月的日期
    var i = 1;
    while (list.length < TOTAL) {
      var _thisDate2 = lastDate.add(i++, 'day').startOf('day');
      var _item2 = {
        marks: [],
        _value: _thisDate2,
        text: _thisDate2.date(),
        type: constant.TYPE_NEXT_MONTH,
        value: _thisDate2.format(format)
      };
      _item2 = getFullItem(_item2, options, selectedDate, isShowStatus);
      list.push(_item2);
    }
    return {
      list: list,
      value: generateDate
    };
  };
}
function getGenerateDate(date) {
  return (0, _dayjsMin2.default)(date).startOf('month');
}