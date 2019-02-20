'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleActive = handleActive;
exports.handleMarks = handleMarks;
exports.handleDisabled = handleDisabled;

var _dayjsMin = require('../../../../../../dayjs/dayjs.min.js');

var _dayjsMin2 = _interopRequireDefault(_dayjsMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function handleActive(args, item) {
  var selectedDate = args.selectedDate;
  var _value = item._value;

  var selectedDateValue = Object.values(selectedDate);
  var end = Math.max.apply(Math, _toConsumableArray(selectedDateValue));
  var start = Math.min.apply(Math, _toConsumableArray(selectedDateValue));
  var dayjsEnd = (0, _dayjsMin2.default)(end);
  var dayjsStart = start ? (0, _dayjsMin2.default)(start) : dayjsEnd;
  item.isSelected = _value.isSame(dayjsEnd) || _value.isSame(dayjsStart) || _value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd);
  item.isSelectedHead = _value.isSame(dayjsStart);
  item.isSelectedTail = _value.isSame(dayjsEnd);
  item.isToday = _value.diff((0, _dayjsMin2.default)(Date.now()).startOf('day'), 'day') === 0;
  return item;
}
function handleMarks(args, item) {
  var options = args.options;
  var _value = item._value;
  var marks = options.marks;

  var markList = marks.filter(function (mark) {
    return (0, _dayjsMin2.default)(mark.value).startOf('day').isSame(_value);
  });
  item.marks = markList.slice(0, 1);
  return item;
}
// export function handleSelectedDates (args: PluginArg): Calendar.Item {
// const { item, options } = args
// const { _value } = item
// const { selectedDates } = options
// if (selectedDates.length === 0) return args
// _forEach(selectedDates, date => {
//   const { isSelected, isHead, isTail } = item
//   // 如果当前 Item 已经具备了 三种状态下 无需继续判断 跳出循环
//   if (isSelected) {
//     return false
//   }
//   const { start, end } = date
//   const dayjsEnd = dayjs(end).startOf('day')
//   const dayjsStart = dayjs(start).startOf('day')
//   item.isSelected =
//     item.isSelected ||
//     (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd))
//   item.isHead = item.isHead || _value.isSame(dayjsStart)
//   item.isTail = item.isTail || _value.isSame(dayjsEnd)
// })
//   return item
// }
function handleDisabled(args, item) {
  var options = args.options;
  var _value = item._value;
  var minDate = options.minDate,
      maxDate = options.maxDate;

  var dayjsMinDate = (0, _dayjsMin2.default)(minDate);
  var dayjsMaxDate = (0, _dayjsMin2.default)(maxDate);
  item.isDisabled = !!(minDate && _value.isBefore(dayjsMinDate)) || !!(maxDate && _value.isAfter(dayjsMaxDate));
  delete item._value;
  return item;
}
exports.default = [handleActive, handleMarks, handleDisabled];