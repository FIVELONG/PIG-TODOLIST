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

var AtInput = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtInput, _AtComponent);

  function AtInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtInput.__proto__ || Object.getPrototypeOf(AtInput)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "title", "name", "type", "placeholderStyle", "placeholder", "cursorSpacing", "maxlength", "autoFocus", "focus", "value", "confirmType", "cursor", "selectionStart", "selectionEnd", "adjustPosition", "disabled", "clear", "error", "__fn_onChange", "__fn_onFocus", "__fn_onBlur", "__fn_onConfirm", "editable", "__fn_onClick", "__fn_onErrorClick", "className", "customStyle", "border", "placeholderClass", "children"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtInput, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtInput.prototype.__proto__ || Object.getPrototypeOf(AtInput.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      this.__triggerPropsFn("onChange", [null].concat([e.target.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      this.__triggerPropsFn("onFocus", [null].concat([e.target.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      this.__triggerPropsFn("onBlur", [null].concat([e.target.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "onConfirm",
    value: function onConfirm(e) {
      this.__triggerPropsFn("onConfirm", [null].concat([e.target.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      !this.props.editable && this.__triggerPropsFn("onClick", [null].concat([e].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "clearValue",
    value: function clearValue() {
      this.__triggerPropsFn("onChange", [null].concat([''].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "onErrorClick",
    value: function onErrorClick() {
      this.__triggerPropsFn("onErrorClick", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _props = this.__props,
          className = _props.className,
          customStyle = _props.customStyle,
          name = _props.name,
          cursorSpacing = _props.cursorSpacing,
          confirmType = _props.confirmType,
          cursor = _props.cursor,
          selectionStart = _props.selectionStart,
          selectionEnd = _props.selectionEnd,
          adjustPosition = _props.adjustPosition,
          border = _props.border,
          title = _props.title,
          editable = _props.editable,
          error = _props.error,
          clear = _props.clear,
          placeholder = _props.placeholder,
          placeholderStyle = _props.placeholderStyle,
          placeholderClass = _props.placeholderClass,
          autoFocus = _props.autoFocus,
          focus = _props.focus,
          value = _props.value;
      var _props2 = this.__props,
          maxlength = _props2.maxlength,
          type = _props2.type,
          disabled = _props2.disabled;


      if (type === 'phone') {
        maxlength = 11;
        type = 'number';
      }
      if (!disabled && !editable) {
        disabled = true;
      }

      var anonymousState__temp = (0, _index6.default)({
        'at-input': true,
        'at-input--without-border': !border
      }, className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var anonymousState__temp3 = (0, _index6.default)({
        'at-input__container': true,
        'at-input--error': error,
        'at-input--disabled': disabled
      });
      var anonymousState__temp4 = (0, _index6.default)('placeholder', placeholderClass);
      var anonymousState__temp5 = clear && value ? { fontSize: '15px' } : null;
      var anonymousState__temp6 = error ? { fontSize: '15px' } : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        title: title,
        name: name,
        type: type,
        placeholderStyle: placeholderStyle,
        placeholder: placeholder,
        cursorSpacing: cursorSpacing,
        maxlength: maxlength,
        autoFocus: autoFocus,
        focus: focus,
        value: value,
        confirmType: confirmType,
        cursor: cursor,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        adjustPosition: adjustPosition,
        disabled: disabled,
        clear: clear,
        error: error
      });
      return this.__state;
    }
  }]);

  return AtInput;
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
  "editable": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "__fn_onErrorClick": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  },
  "customStyle": {
    "type": null,
    "value": null
  },
  "name": {
    "type": null,
    "value": null
  },
  "cursorSpacing": {
    "type": null,
    "value": null
  },
  "confirmType": {
    "type": null,
    "value": null
  },
  "cursor": {
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
  "adjustPosition": {
    "type": null,
    "value": null
  },
  "border": {
    "type": null,
    "value": null
  },
  "title": {
    "type": null,
    "value": null
  },
  "error": {
    "type": null,
    "value": null
  },
  "clear": {
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
  "autoFocus": {
    "type": null,
    "value": null
  },
  "focus": {
    "type": null,
    "value": null
  },
  "value": {
    "type": null,
    "value": null
  },
  "maxlength": {
    "type": null,
    "value": null
  },
  "type": {
    "type": null,
    "value": null
  },
  "disabled": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["onClick", "onInput", "onFocus", "onBlur", "onConfirm", "clearValue", "onErrorClick"], _class.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  title: '',
  cursorSpacing: 50,
  confirmType: '完成',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxlength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  focus: false,
  onChange: defaultFunc,
  onFocus: defaultFunc,
  onBlur: defaultFunc,
  onConfirm: defaultFunc,
  onErrorClick: defaultFunc,
  onClick: defaultFunc
}, _class.propTypes = {
  className: _index4.default.oneOfType([_index4.default.string, _index4.default.array]),
  customStyle: _index4.default.oneOfType([_index4.default.string, _index4.default.object]),
  value: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  name: _index4.default.string,
  placeholder: _index4.default.string,
  placeholderStyle: _index4.default.string,
  placeholderClass: _index4.default.string,
  title: _index4.default.string,
  confirmType: _index4.default.string,
  cursor: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  selectionStart: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  selectionEnd: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  adjustPosition: _index4.default.bool,
  cursorSpacing: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  maxlength: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  type: _index4.default.string,
  disabled: _index4.default.bool,
  border: _index4.default.bool,
  editable: _index4.default.bool,
  error: _index4.default.bool,
  clear: _index4.default.bool,
  backgroundColor: _index4.default.string,
  autoFocus: _index4.default.bool,
  focus: _index4.default.bool,
  onChange: _index4.default.func,
  onFocus: _index4.default.func,
  onBlur: _index4.default.func,
  onConfirm: _index4.default.func,
  onErrorClick: _index4.default.func,
  onClick: _index4.default.func
}, _temp2);
exports.default = AtInput;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtInput));