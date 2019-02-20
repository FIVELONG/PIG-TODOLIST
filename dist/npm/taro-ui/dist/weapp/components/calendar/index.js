"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = require("../../../../../tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _index = require("../../../../../bind-decorator/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

var _dayjsMin = require("../../../../../dayjs/dayjs.min.js");

var _dayjsMin2 = _interopRequireDefault(_dayjsMin);

var _isFunction2 = require("../../../../../lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _index5 = require("../../../../../@tarojs/taro-weapp/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  marks: [],
  isSwiper: true,
  hideArrow: false,
  isVertical: false,
  selectedDates: [],
  isMultiSelect: false,
  format: 'YYYY-MM-DD',
  currentDate: Date.now(),
  monthFormat: 'YYYY年MM月'
};

var AtCalendar = (_temp2 = _class = function (_Taro$Component) {
  _inherits(AtCalendar, _Taro$Component);

  function AtCalendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtCalendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtCalendar.__proto__ || Object.getPrototypeOf(AtCalendar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "minDate", "maxDate", "hideArrow", "monthFormat", "generateDate", "marks", "format", "isSwiper", "isVertical", "selectedDate", "selectedDates", "currentDate", "isMultiSelect", "className"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtCalendar, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtCalendar.prototype.__proto__ || Object.getPrototypeOf(AtCalendar.prototype), "_constructor", this).apply(this, arguments);
      var currentDate = props.currentDate,
          isMultiSelect = props.isMultiSelect;

      this.state = this.getInitializeState(currentDate, isMultiSelect);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var currentDate = nextProps.currentDate,
          isMultiSelect = nextProps.isMultiSelect;

      if (!currentDate || currentDate === this.props.currentDate) {
        return;
      }if (isMultiSelect && this.props.isMultiSelect) {
        var start = currentDate.start,
            end = currentDate.end;
        var _props$currentDate = this.props.currentDate,
            preStart = _props$currentDate.start,
            preEnd = _props$currentDate.end;

        if (start === preStart && preEnd === end) {
          return;
        }
      }
      var stateValue = this.getInitializeState(currentDate, isMultiSelect);
      this.setState(stateValue);
    }
  }, {
    key: "getSingleSelectdState",
    value: function getSingleSelectdState(value) {
      var generateDate = this.state.generateDate;

      var stateValue = {
        selectedDate: this.getSelectedDate(value.valueOf())
      };
      var dayjsGenerateDate = value.startOf('month');
      var generateDateValue = dayjsGenerateDate.valueOf();
      if (generateDateValue !== generateDate) {
        this.triggerChangeDate(dayjsGenerateDate);
        stateValue.generateDate = generateDateValue;
      }
      return stateValue;
    }
  }, {
    key: "getMultiSelectedState",
    value: function getMultiSelectedState(value) {
      var selectedDate = this.state.selectedDate;
      var end = selectedDate.end;

      var valueUnix = value.valueOf();
      var state = {};
      if (end) {
        state.selectedDate = this.getSelectedDate(valueUnix, 0);
      } else {
        selectedDate.end = valueUnix;
        state.selectedDate = selectedDate;
      }
      return state;
    }
  }, {
    key: "getSelectedDate",
    value: function getSelectedDate(start, end) {
      var stateValue = {
        start: start,
        end: start
      };
      if (typeof end !== 'undefined') {
        stateValue.end = end;
      }
      return stateValue;
    }
  }, {
    key: "getInitializeState",
    value: function getInitializeState(currentDate, isMultiSelect) {
      var end = void 0;
      var start = void 0;
      var generateDateValue = void 0;
      if (isMultiSelect) {
        var cStart = currentDate.start,
            cEnd = currentDate.end;

        var dayjsStart = (0, _dayjsMin2.default)(cStart);
        start = dayjsStart.startOf('day').valueOf();
        generateDateValue = dayjsStart.startOf('month').valueOf();
        end = cEnd ? (0, _dayjsMin2.default)(cEnd).startOf('day').valueOf() : start;
      } else {
        var _dayjsStart = (0, _dayjsMin2.default)(currentDate);
        start = _dayjsStart.startOf('day').valueOf();
        generateDateValue = _dayjsStart.startOf('month').valueOf();
        end = start;
      }
      return {
        generateDate: generateDateValue,
        selectedDate: this.getSelectedDate(start, end)
      };
    }
  }, {
    key: "triggerChangeDate",
    value: function triggerChangeDate(value) {
      var format = this.props.format;

      if (!(0, _isFunction3.default)(this.props.onMonthChange)) {
        return;
      }this.__triggerPropsFn("onMonthChange", [null].concat([value.format(format)]));
    }
  }, {
    key: "setGenerateDate",
    value: function setGenerateDate(vectorCount) {
      var generateDate = this.state.generateDate;

      var _generateDate = (0, _dayjsMin2.default)(generateDate).add(vectorCount, 'month').valueOf();
      this.setState({
        generateDate: _generateDate
      });
    }
  }, {
    key: "handleClickPreMonth",
    value: function handleClickPreMonth(isMinMonth) {
      if (isMinMonth === true) {
        return;
      }
      this.setGenerateDate(-1);
      if ((0, _isFunction3.default)(this.props.onClickPreMonth)) {
        this.__triggerPropsFn("onClickPreMonth", [null].concat([]));
      }
    }
  }, {
    key: "handleClickNextMonth",
    value: function handleClickNextMonth(isMaxMonth) {
      if (isMaxMonth === true) {
        return;
      }
      this.setGenerateDate(1);
      if ((0, _isFunction3.default)(this.props.onClickNextMonth)) {
        this.__triggerPropsFn("onClickNextMonth", [null].concat([]));
      }
    }
  }, {
    key: "handleSelectDate",
    value: function handleSelectDate(e) {
      var value = e.detail.value;

      var _generateDate = (0, _dayjsMin2.default)(value);
      var _generateDateValue = _generateDate.valueOf();
      if (this.state.generateDate === _generateDateValue) {
        return;
      }this.triggerChangeDate(_generateDate);
      this.setState({
        generateDate: _generateDateValue
      });
    }
  }, {
    key: "handleDayClick",
    value: function handleDayClick(item) {
      var isMultiSelect = this.props.isMultiSelect;
      var isDisabled = item.isDisabled,
          value = item.value;

      if (isDisabled) {
        return;
      }var dayjsDate = (0, _dayjsMin2.default)(value);
      var stateValue = {};
      if (isMultiSelect) {
        stateValue = this.getMultiSelectedState(dayjsDate);
      } else {
        stateValue = this.getSingleSelectdState(dayjsDate);
      }
      this.setState(stateValue);
      if ((0, _isFunction3.default)(this.props.onDayClick)) {
        this.__triggerPropsFn("onDayClick", [null].concat([{ value: item.value }]));
      }
    }
  }, {
    key: "handleDayLongClick",
    value: function handleDayLongClick(item) {
      if ((0, _isFunction3.default)(this.props.onDayLongClick)) {
        this.__triggerPropsFn("onDayLongClick", [null].concat([{ value: item.value }]));
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _state = this.__state,
          generateDate = _state.generateDate,
          selectedDate = _state.selectedDate;
      var _props = this.__props,
          marks = _props.marks,
          format = _props.format,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          isSwiper = _props.isSwiper,
          className = _props.className,
          hideArrow = _props.hideArrow,
          isVertical = _props.isVertical,
          monthFormat = _props.monthFormat,
          selectedDates = _props.selectedDates;

      var anonymousState__temp = (0, _index4.default)('at-calendar', className);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        minDate: minDate,
        maxDate: maxDate,
        hideArrow: hideArrow,
        monthFormat: monthFormat,
        generateDate: generateDate,
        marks: marks,
        format: format,
        isSwiper: isSwiper,
        isVertical: isVertical,
        selectedDate: selectedDate,
        selectedDates: selectedDates
      });
      return this.__state;
    }
  }]);

  return AtCalendar;
}(_index6.default.Component), _class.properties = {
  "currentDate": {
    "type": null,
    "value": null
  },
  "isMultiSelect": {
    "type": null,
    "value": null
  },
  "format": {
    "type": null,
    "value": null
  },
  "onMonthChange": {
    "type": null,
    "value": null
  },
  "__fn_onMonthChange": {
    "type": null,
    "value": null
  },
  "onClickPreMonth": {
    "type": null,
    "value": null
  },
  "__fn_onClickPreMonth": {
    "type": null,
    "value": null
  },
  "onClickNextMonth": {
    "type": null,
    "value": null
  },
  "__fn_onClickNextMonth": {
    "type": null,
    "value": null
  },
  "onDayClick": {
    "type": null,
    "value": null
  },
  "__fn_onDayClick": {
    "type": null,
    "value": null
  },
  "onDayLongClick": {
    "type": null,
    "value": null
  },
  "__fn_onDayLongClick": {
    "type": null,
    "value": null
  },
  "marks": {
    "type": null,
    "value": null
  },
  "minDate": {
    "type": null,
    "value": null
  },
  "maxDate": {
    "type": null,
    "value": null
  },
  "isSwiper": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  },
  "hideArrow": {
    "type": null,
    "value": null
  },
  "isVertical": {
    "type": null,
    "value": null
  },
  "monthFormat": {
    "type": null,
    "value": null
  },
  "selectedDates": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleClickPreMonth", "handleClickNextMonth", "handleSelectDate", "handleDayClick", "setGenerateDate", "handleDayLongClick"], _temp2);


AtCalendar.defaultProps = defaultProps;
tslib_1.__decorate([_index2.default], AtCalendar.prototype, "getSingleSelectdState", null);
tslib_1.__decorate([_index2.default], AtCalendar.prototype, "getMultiSelectedState", null);
tslib_1.__decorate([_index2.default], AtCalendar.prototype, "triggerChangeDate", null);
tslib_1.__decorate([_index2.default], AtCalendar.prototype, "setGenerateDate", null);
tslib_1.__decorate([_index2.default], AtCalendar.prototype, "handleClickPreMonth", null);
tslib_1.__decorate([_index2.default], AtCalendar.prototype, "handleClickNextMonth", null);
tslib_1.__decorate([_index2.default], AtCalendar.prototype, "handleSelectDate", null);
tslib_1.__decorate([_index2.default], AtCalendar.prototype, "handleDayClick", null);
tslib_1.__decorate([_index2.default], AtCalendar.prototype, "handleDayLongClick", null);
exports.default = AtCalendar;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtCalendar));