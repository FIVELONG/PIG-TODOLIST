"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtCheckbox = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtCheckbox, _AtComponent);

  function AtCheckbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtCheckbox.__proto__ || Object.getPrototypeOf(AtCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray0", "options", "selectedList", "__fn_onChange", "customStyle", "className"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtCheckbox, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtCheckbox.prototype.__proto__ || Object.getPrototypeOf(AtCheckbox.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleClick",
    value: function handleClick(option) {
      if (option.disabled) {
        return;
      }var value = option.value;
      var selectedList = new Set(this.props.selectedList);
      if (!selectedList.has(value)) {
        selectedList.add(value);
      } else {
        selectedList.delete(value);
      }
      this.__triggerPropsFn("onChange", [null].concat([Array.from(selectedList)]));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _props = this.__props,
          customStyle = _props.customStyle,
          className = _props.className,
          options = _props.options,
          selectedList = _props.selectedList;


      var anonymousState__temp = (0, _index6.default)('at-checkbox', className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var loopArray0 = options.map(function (option) {
        option = {
          $original: (0, _index.internal_get_original)(option)
        };
        var $loopState__temp4 = selectedList.includes(option.$original.value) ? 'at-checkbox__icon at-checkbox__icon--selected' : 'at-checkbox__icon';
        var $loopState__temp6 = { fontSize: '14px' };
        return {
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $original: option.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray0: loopArray0,
        options: options
      });
      return this.__state;
    }
  }]);

  return AtCheckbox;
}(_component2.default), _class.properties = {
  "selectedList": {
    "type": null,
    "value": null
  },
  "__fn_onChange": {
    "type": null,
    "value": null
  },
  "customStyle": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  },
  "options": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleClick"], _class.defaultProps = {
  customStyle: '',
  className: '',
  options: [],
  selectedList: [],
  onChange: function onChange() {}
}, _class.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  options: _index4.default.array,
  selectedList: _index4.default.array,
  onChange: _index4.default.func
}, _temp2);
exports.default = AtCheckbox;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtCheckbox));