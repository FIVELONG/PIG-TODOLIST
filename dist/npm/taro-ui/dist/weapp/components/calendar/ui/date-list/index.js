"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _MAP, _class, _temp2;

var _tslib = require("../../../../../../../tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _index = require("../../../../../../../bind-decorator/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../../../classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

var _isFunction2 = require("../../../../../../../lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _index5 = require("../../../../../../../@tarojs/taro-weapp/index.js");

var _index6 = _interopRequireDefault(_index5);

var _constant = require("../../common/constant.js");

var constant = _interopRequireWildcard(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MAP = (_MAP = {}, _defineProperty(_MAP, constant.TYPE_PRE_MONTH, 'pre'), _defineProperty(_MAP, constant.TYPE_NOW_MONTH, 'now'), _defineProperty(_MAP, constant.TYPE_NEXT_MONTH, 'next'), _MAP);

var AtCalendarList = (_temp2 = _class = function (_Taro$Component) {
  _inherits(AtCalendarList, _Taro$Component);

  function AtCalendarList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtCalendarList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtCalendarList.__proto__ || Object.getPrototypeOf(AtCalendarList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "list"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtCalendarList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtCalendarList.prototype.__proto__ || Object.getPrototypeOf(AtCalendarList.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleClick",
    value: function handleClick(item) {
      if ((0, _isFunction3.default)(this.props.onClick)) {
        this.__triggerPropsFn("onClick", [null].concat([item]));
      }
    }
  }, {
    key: "handleLongClick",
    value: function handleLongClick(item) {
      if ((0, _isFunction3.default)(this.props.onLongClick)) {
        this.__triggerPropsFn("onLongClick", [null].concat([item]));
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var list = this.__props.list;

      if (!list || list.length === 0) {
        return null;
      }var loopArray0 = list.map(function (item, index) {
        item = {
          $original: (0, _index5.internal_get_original)(item)
        };
        var $loopState__temp2 = (0, _index4.default)('flex__item', "flex__item--" + MAP[item.$original.type], {
          'flex__item--today': item.$original.isToday,
          'flex__item--active': item.$original.isActive,
          'flex__item--selected': item.$original.isSelected,
          'flex__item--selected-head': item.$original.isSelectedHead,
          'flex__item--selected-tail': item.$original.isSelectedTail,
          'flex__item--blur': item.$original.isDisabled || item.$original.type === constant.TYPE_PRE_MONTH || item.$original.type === constant.TYPE_NEXT_MONTH
        });
        return {
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        list: list
      });
      return this.__state;
    }
  }]);

  return AtCalendarList;
}(_index6.default.Component), _class.properties = {
  "onClick": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "onLongClick": {
    "type": null,
    "value": null
  },
  "__fn_onLongClick": {
    "type": null,
    "value": null
  },
  "list": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleClick", "handleLongClick"], _temp2);


tslib_1.__decorate([_index2.default], AtCalendarList.prototype, "handleClick", null);
tslib_1.__decorate([_index2.default], AtCalendarList.prototype, "handleLongClick", null);
exports.default = AtCalendarList;

Component(require('../../../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtCalendarList));