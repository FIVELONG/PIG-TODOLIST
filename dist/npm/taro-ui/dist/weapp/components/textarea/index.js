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

var defaultFunc = function defaultFunc() {};

var AtTextarea = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtTextarea, _AtComponent);

  function AtTextarea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtTextarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtTextarea.__proto__ || Object.getPrototypeOf(AtTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "placeholderStyle", "cursorSpacing", "value", "actualMaxlength", "placeholder", "disabled", "autoFocus", "focus", "showConfirmBar", "selectionStart", "selectionEnd", "fixed", "count", "maxlength", "__fn_onChange", "__fn_onFocus", "__fn_onBlur", "__fn_onConfirm", "__fn_onLinechange", "customStyle", "className", "placeholderClass", "textOverflowForbidden", "height"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtTextarea, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtTextarea.prototype.__proto__ || Object.getPrototypeOf(AtTextarea.prototype), "_constructor", this).apply(this, arguments);
    }
  }, {
    key: "handleInput",
    value: function handleInput() {
      this.__triggerPropsFn("onChange", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.__triggerPropsFn("onFocus", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.__triggerPropsFn("onBlur", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      this.__triggerPropsFn("onConfirm", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleLinechange",
    value: function handleLinechange() {
      this.__triggerPropsFn("onLinechange", [null].concat([].concat(Array.prototype.slice.call(arguments))));
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
          value = _props.value,
          cursorSpacing = _props.cursorSpacing,
          placeholder = _props.placeholder,
          placeholderStyle = _props.placeholderStyle,
          placeholderClass = _props.placeholderClass,
          maxlength = _props.maxlength,
          count = _props.count,
          disabled = _props.disabled,
          autoFocus = _props.autoFocus,
          focus = _props.focus,
          showConfirmBar = _props.showConfirmBar,
          selectionStart = _props.selectionStart,
          selectionEnd = _props.selectionEnd,
          fixed = _props.fixed,
          textOverflowForbidden = _props.textOverflowForbidden,
          height = _props.height;


      var actualMaxlength = maxlength;
      if (!textOverflowForbidden) {
        actualMaxlength += 500;
      }
      var textareaStyle = height ? "height:" + _index2.default.pxTransform(height) : '';

      var anonymousState__temp = (0, _index6.default)('at-textarea', className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var anonymousState__temp3 = (0, _index.internal_inline_style)(textareaStyle);
      var anonymousState__temp4 = (0, _index6.default)('placeholder', placeholderClass);
      var anonymousState__temp5 = count ? (0, _index6.default)({
        'at-textarea__bottom': true,
        'at-textarea--error': maxlength < value.length
      }) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        placeholderStyle: placeholderStyle,
        cursorSpacing: cursorSpacing,
        value: value,
        actualMaxlength: actualMaxlength,
        placeholder: placeholder,
        disabled: disabled,
        autoFocus: autoFocus,
        focus: focus,
        showConfirmBar: showConfirmBar,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        fixed: fixed,
        count: count,
        maxlength: maxlength
      });
      return this.__state;
    }
  }]);

  return AtTextarea;
}(_component2.default), _class.properties = {
  "__fn_onChange": {
    "type": null,
    "value": null
  },
  "__fn_onFocus": {
    "type": null,
    "value": null
  },
  "__fn_onBlur": {
    "type": null,
    "value": null
  },
  "__fn_onConfirm": {
    "type": null,
    "value": null
  },
  "__fn_onLinechange": {
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
  "value": {
    "type": null,
    "value": null
  },
  "cursorSpacing": {
    "type": null,
    "value": null
  },
  "placeholder": {
    "type": null,
    "value": null
  },
  "placeholderStyle": {
    "type": null,
    "value": null
  },
  "placeholderClass": {
    "type": null,
    "value": null
  },
  "maxlength": {
    "type": null,
    "value": null
  },
  "count": {
    "type": null,
    "value": null
  },
  "disabled": {
    "type": null,
    "value": null
  },
  "autoFocus": {
    "type": null,
    "value": null
  },
  "focus": {
    "type": null,
    "value": null
  },
  "showConfirmBar": {
    "type": null,
    "value": null
  },
  "selectionStart": {
    "type": null,
    "value": null
  },
  "selectionEnd": {
    "type": null,
    "value": null
  },
  "fixed": {
    "type": null,
    "value": null
  },
  "textOverflowForbidden": {
    "type": null,
    "value": null
  },
  "height": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleInput", "handleFocus", "handleBlur", "handleConfirm", "handleLinechange"], _class.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  value: '',
  cursorSpacing: 100,
  maxlength: 200,
  placeholder: '',
  disabled: false,
  autoFocus: false,
  focus: false,
  showConfirmBar: false,
  selectionStart: -1,
  selectionEnd: -1,
  count: true,
  fixed: false,
  height: '',
  textOverflowForbidden: true,
  onLinechange: defaultFunc,
  onChange: defaultFunc,
  onFocus: defaultFunc,
  onBlur: defaultFunc,
  onConfirm: defaultFunc
}, _class.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  value: _index4.default.string.isRequired,
  cursorSpacing: _index4.default.number,
  maxlength: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  placeholderClass: _index4.default.string,
  placeholderStyle: _index4.default.string,
  placeholder: _index4.default.string,
  disabled: _index4.default.bool,
  autoFocus: _index4.default.bool,
  focus: _index4.default.bool,
  showConfirmBar: _index4.default.bool,
  selectionStart: _index4.default.number,
  selectionEnd: _index4.default.number,
  count: _index4.default.bool,
  textOverflowForbidden: _index4.default.bool,
  fixed: _index4.default.bool,
  height: _index4.default.string,
  onLinechange: _index4.default.func,
  onChange: _index4.default.func.isRequired,
  onFocus: _index4.default.func,
  onBlur: _index4.default.func,
  onConfirm: _index4.default.func
}, _temp2);
exports.default = AtTextarea;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtTextarea));