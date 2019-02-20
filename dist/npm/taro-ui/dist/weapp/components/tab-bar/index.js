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

var AtTabBar = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtTabBar, _AtComponent);

  function AtTabBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtTabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtTabBar.__proto__ || Object.getPrototypeOf(AtTabBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray0", "tabList", "current", "selectedColor", "color", "__fn_onClick", "customStyle", "className", "fixed", "backgroundColor", "iconSize", "fontSize"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtTabBar, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtTabBar.prototype.__proto__ || Object.getPrototypeOf(AtTabBar.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.__triggerPropsFn("onClick", [null].concat([].concat(Array.prototype.slice.call(arguments))));
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
          fixed = _props.fixed,
          backgroundColor = _props.backgroundColor,
          tabList = _props.tabList,
          current = _props.current,
          color = _props.color,
          iconSize = _props.iconSize,
          fontSize = _props.fontSize,
          selectedColor = _props.selectedColor;
      // const { isIPhoneX } = this.state

      var defaultStyle = "color: " + color + ";";
      var selectedStyle = "color: " + selectedColor + ";";
      var titleStyle = "font-size: " + fontSize + "px;";
      var rootStyle = "background-color: " + backgroundColor + ";";

      var anonymousState__temp = (0, _index6.default)({
        'at-tab-bar': true,
        'at-tab-bar--fixed': fixed
        // 'at-tab-bar--ipx': isIPhoneX
      }, className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(this.mergeStyle(rootStyle, customStyle));
      var loopArray0 = tabList.map(function (item, i) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp4 = (0, _index.internal_inline_style)(current === i ? selectedStyle : defaultStyle);
        var $loopState__temp6 = item.$original.iconType ? !!item.$original.dot : null;
        var $loopState__temp8 = item.$original.iconType ? { fontSize: iconSize + "px" } : null;
        var $loopState__temp10 = (0, _index.internal_inline_style)(titleStyle);
        return {
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $loopState__temp8: $loopState__temp8,
          $loopState__temp10: $loopState__temp10,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray0: loopArray0,
        tabList: tabList,
        current: current,
        selectedColor: selectedColor,
        color: color
      });
      return this.__state;
    }
  }]);

  return AtTabBar;
}(_component2.default), _class.properties = {
  "__fn_onClick": {
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
  "fixed": {
    "type": null,
    "value": null
  },
  "backgroundColor": {
    "type": null,
    "value": null
  },
  "tabList": {
    "type": null,
    "value": null
  },
  "current": {
    "type": null,
    "value": null
  },
  "color": {
    "type": null,
    "value": null
  },
  "iconSize": {
    "type": null,
    "value": null
  },
  "fontSize": {
    "type": null,
    "value": null
  },
  "selectedColor": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleClick"], _class.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  backgroundColor: '#fff',
  current: 0,
  iconSize: '24',
  fontSize: '14',
  color: '#333',
  selectedColor: '#6190E8',
  scroll: false,
  tabList: [],
  onClick: function onClick() {}
}, _class.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  fixed: _index4.default.bool,
  backgroundColor: _index4.default.string,
  current: _index4.default.number,
  iconSize: _index4.default.oneOfType([_index4.default.number, _index4.default.string]),
  fontSize: _index4.default.oneOfType([_index4.default.number, _index4.default.string]),
  color: _index4.default.string,
  selectedColor: _index4.default.string,
  scroll: _index4.default.bool,
  tabList: _index4.default.array,
  onClick: _index4.default.func

  // constructor () {
  //   super(...arguments)
  //   this.state = {
  //     isIPhoneX: false
  //   }
  // }

  // componentDidMount () {
  //   const curEnv = Taro.getEnv()

  //   if (
  //     curEnv === Taro.ENV_TYPE.WEAPP &&
  //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
  //   ) {
  //     this.setState({ isIPhoneX: true })
  //   }
  // }

}, _temp2);
exports.default = AtTabBar;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtTabBar));