"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _dayjsMin = require("../../../../../../dayjs/dayjs.min.js");

var _dayjsMin2 = _interopRequireDefault(_dayjsMin);

var _index = require("../../../../../../classnames/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../../@tarojs/taro-weapp/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtCalendarController = (_temp2 = _class = function (_Taro$Component) {
  _inherits(AtCalendarController, _Taro$Component);

  function AtCalendarController() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtCalendarController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtCalendarController.__proto__ || Object.getPrototypeOf(AtCalendarController)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "hideArrow", "isMinMonth", "maxDateValue", "minDateValue", "isMaxMonth", "generateDate", "minDate", "maxDate", "monthFormat", "__fn_onClick", "__fn_onChange"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtCalendarController, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtCalendarController.prototype.__proto__ || Object.getPrototypeOf(AtCalendarController.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _props = this.__props,
          generateDate = _props.generateDate,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          monthFormat = _props.monthFormat,
          hideArrow = _props.hideArrow;

      var dayjsDate = (0, _dayjsMin2.default)(generateDate);
      var dayjsMinDate = !!minDate && (0, _dayjsMin2.default)(minDate);
      var dayjsMaxDate = !!maxDate && (0, _dayjsMin2.default)(maxDate);
      var isMinMonth = dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate);
      var isMaxMonth = dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate);
      var minDateValue = dayjsMinDate ? dayjsMinDate.format('YYYY-MM') : '';
      var maxDateValue = dayjsMaxDate ? dayjsMaxDate.format('YYYY-MM') : '';
      var anonymousState__temp = (0, _index2.default)('controller__arrow controller__arrow--left', {
        'controller__arrow--disabled': isMinMonth
      });
      var anonymousState__temp2 = dayjsDate.format('YYYY-MM');
      var anonymousState__temp3 = dayjsDate.format(monthFormat);
      var anonymousState__temp4 = (0, _index2.default)('controller__arrow controller__arrow--right', {
        'controller__arrow--disabled': isMaxMonth
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        hideArrow: hideArrow,
        isMinMonth: isMinMonth,
        maxDateValue: maxDateValue,
        minDateValue: minDateValue,
        isMaxMonth: isMaxMonth
      });
      return this.__state;
    }
  }, {
    key: "funPrivatepNplU",
    value: function funPrivatepNplU() {
      this.__triggerPropsFn("onPreMonth", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateVNfmI",
    value: function funPrivateVNfmI() {
      this.__triggerPropsFn("onSelectDate", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateWXpPC",
    value: function funPrivateWXpPC() {
      this.__triggerPropsFn("onNextMonth", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return AtCalendarController;
}(_index4.default.Component), _class.properties = {
  "generateDate": {
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
  "monthFormat": {
    "type": null,
    "value": null
  },
  "hideArrow": {
    "type": null,
    "value": null
  },
  "onPreMonth": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "__fn_onPreMonth": {
    "type": null,
    "value": null
  },
  "onSelectDate": {
    "type": null,
    "value": null
  },
  "__fn_onChange": {
    "type": null,
    "value": null
  },
  "__fn_onSelectDate": {
    "type": null,
    "value": null
  },
  "onNextMonth": {
    "type": null,
    "value": null
  },
  "__fn_onNextMonth": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["funPrivatepNplU", "funPrivateVNfmI", "funPrivateWXpPC"], _temp2);
exports.default = AtCalendarController;

Component(require('../../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtCalendarController));