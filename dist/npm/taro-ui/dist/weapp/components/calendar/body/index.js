"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = require("../../../../../../tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _dayjsMin = require("../../../../../../dayjs/dayjs.min.js");

var _dayjsMin2 = _interopRequireDefault(_dayjsMin);

var _index = require("../../../../../../classnames/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../../@tarojs/taro-weapp/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../../bind-decorator/index.js");

var _index6 = _interopRequireDefault(_index5);

var _helper = require("../common/helper.js");

var _helper2 = _interopRequireDefault(_helper);

var _utils = require("../../../common/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ANIMTE_DURATION = 300;
var defaultProps = {
  marks: [],
  selectedDate: {
    end: Date.now(),
    start: Date.now()
  },
  format: 'YYYY-MM-DD',
  generateDate: Date.now()
};

var AtCalendarBody = (_temp2 = _class = function (_Taro$Component) {
  _inherits(AtCalendarBody, _Taro$Component);

  function AtCalendarBody() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtCalendarBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtCalendarBody.__proto__ || Object.getPrototypeOf(AtCalendarBody)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray0", "isSwiper", "listGroup", "offsetSize", "isAnimate", "__fn_onSwipeMonth", "isVertical", "__fn_onClick", "marks", "format", "minDate", "maxDate", "generateDate", "selectedDate", "selectedDates"], _this.handleTouchMove = function (e) {
      if (!_this.props.isSwiper) {
        return;
      }
      if (!_this.isTouching) {
        return;
      }var clientX = e.touches[0].clientX;

      var offsetSize = clientX - _this.startX;
      _this.setState({
        offsetSize: offsetSize
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtCalendarBody, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtCalendarBody.prototype.__proto__ || Object.getPrototypeOf(AtCalendarBody.prototype), "_constructor", this).apply(this, arguments);
      this.changeCount = 0;
      this.currentSwiperIndex = 1;
      this.startX = 0;
      this.swipeStartPoint = 0;
      this.isPreMonth = false;
      this.maxWidth = 0;
      this.isTouching = false;

      var marks = props.marks,
          format = props.format,
          minDate = props.minDate,
          maxDate = props.maxDate,
          generateDate = props.generateDate,
          selectedDate = props.selectedDate,
          selectedDates = props.selectedDates;

      this.generateFunc = (0, _helper2.default)({
        format: format,
        minDate: minDate,
        maxDate: maxDate,
        marks: marks,
        selectedDates: selectedDates
      });
      var listGroup = this.getGroups(generateDate, selectedDate);
      this.state = {
        listGroup: listGroup,
        offsetSize: 0,
        isAnimate: false
      };
    }
  }, {
    key: "getGroups",
    value: function getGroups(generateDate, selectedDate) {
      var dayjsDate = (0, _dayjsMin2.default)(generateDate);
      var arr = [];
      var preList = this.generateFunc(dayjsDate.subtract(1, 'month').valueOf(), selectedDate);
      var nowList = this.generateFunc(generateDate, selectedDate, true);
      var nextList = this.generateFunc(dayjsDate.add(1, 'month').valueOf(), selectedDate);
      var preListIndex = this.currentSwiperIndex === 0 ? 2 : this.currentSwiperIndex - 1;
      var nextListIndex = this.currentSwiperIndex === 2 ? 0 : this.currentSwiperIndex + 1;
      arr[preListIndex] = preList;
      arr[nextListIndex] = nextList;
      arr[this.currentSwiperIndex] = nowList;
      return arr;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var marks = nextProps.marks,
          format = nextProps.format,
          minDate = nextProps.minDate,
          maxDate = nextProps.maxDate,
          generateDate = nextProps.generateDate,
          selectedDate = nextProps.selectedDate,
          selectedDates = nextProps.selectedDates;

      this.generateFunc = (0, _helper2.default)({
        format: format,
        minDate: minDate,
        maxDate: maxDate,
        marks: marks,
        selectedDates: selectedDates
      });
      var listGroup = this.getGroups(generateDate, selectedDate);
      this.setState({
        offsetSize: 0,
        listGroup: listGroup
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      (0, _utils.delayQuerySelector)(this.$scope, '.at-calendar-slider__main').then(function (res) {
        _this2.maxWidth = res[0].width;
      });
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      if (!this.props.isSwiper) {
        return;
      }
      this.isTouching = true;
      this.startX = e.touches[0].clientX;
    }
  }, {
    key: "animateMoveSlide",
    value: function animateMoveSlide(offset, callback) {
      var _this3 = this;

      this.setState({
        isAnimate: true
      }, function () {
        _this3.setState({
          offsetSize: offset
        });
        setTimeout(function () {
          _this3.setState({
            isAnimate: false
          }, function () {
            callback && callback();
          });
        }, ANIMTE_DURATION);
      });
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      var _this4 = this;

      if (!this.props.isSwiper) {
        return;
      }
      var offsetSize = this.state.offsetSize;

      this.isTouching = false;
      var isRight = offsetSize > 0;
      var breakpoint = this.maxWidth / 2;
      var absOffsetSize = Math.abs(offsetSize);
      if (absOffsetSize > breakpoint) {
        var res = isRight ? this.maxWidth : -this.maxWidth;
        return this.animateMoveSlide(res, function () {
          _this4.__triggerPropsFn("onSwipeMonth", [null].concat([isRight ? -1 : 1]));
        });
      }
      this.animateMoveSlide(0);
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _e$detail = e.detail,
          current = _e$detail.current,
          source = _e$detail.source;

      if (source === 'touch') {
        this.currentSwiperIndex = current;
        this.changeCount = this.changeCount + 1;
      }
    }
  }, {
    key: "handleAnimateFinish",
    value: function handleAnimateFinish() {
      if (this.changeCount > 0) {
        this.__triggerPropsFn("onSwipeMonth", [null].concat([this.isPreMonth ? -this.changeCount : this.changeCount]));
        this.changeCount = 0;
      }
    }
  }, {
    key: "handleSwipeTouchStart",
    value: function handleSwipeTouchStart(e) {
      var _e$changedTouches$ = e.changedTouches[0],
          clientY = _e$changedTouches$.clientY,
          clientX = _e$changedTouches$.clientX;

      this.swipeStartPoint = this.props.isVertical ? clientY : clientX;
    }
  }, {
    key: "handleSwipeTouchEnd",
    value: function handleSwipeTouchEnd(e) {
      var _e$changedTouches$2 = e.changedTouches[0],
          clientY = _e$changedTouches$2.clientY,
          clientX = _e$changedTouches$2.clientX;

      this.isPreMonth = this.props.isVertical ? clientY - this.swipeStartPoint > 0 : clientX - this.swipeStartPoint > 0;
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _$anonymousState__temp;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var isSwiper = this.__props.isSwiper;
      var _state = this.__state,
          isAnimate = _state.isAnimate,
          offsetSize = _state.offsetSize,
          listGroup = _state.listGroup;

      if (!isSwiper) {
        _$anonymousState__temp = (0, _index2.default)('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + "weapp");
      }
      /* 需要 Taro 组件库维护 Swiper 使 小程序 和 H5 的表现保持一致  */
      var anonymousState__temp2 = (0, _index2.default)('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + "weapp");
      var anonymousState__temp3 = (0, _index2.default)('main__body');
      var loopArray0 = listGroup.map(function (item, key) {
        item = {
          $original: (0, _index3.internal_get_original)(item)
        };
        var $loopState__temp5 = key.toString();
        return {
          $loopState__temp5: $loopState__temp5,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray0: loopArray0,
        isSwiper: isSwiper
      });
      return this.__state;
    }
  }, {
    key: "funPrivatetdbpK",
    value: function funPrivatetdbpK() {
      this.__triggerPropsFn("onDayClick", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateuNboM",
    value: function funPrivateuNboM() {
      this.__triggerPropsFn("onLongClick", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return AtCalendarBody;
}(_index4.default.Component), _class.properties = {
  "isSwiper": {
    "type": null,
    "value": null
  },
  "__fn_onSwipeMonth": {
    "type": null,
    "value": null
  },
  "isVertical": {
    "type": null,
    "value": null
  },
  "onDayClick": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "__fn_onDayClick": {
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
  "marks": {
    "type": null,
    "value": null
  },
  "format": {
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
  "generateDate": {
    "type": null,
    "value": null
  },
  "selectedDate": {
    "type": null,
    "value": null
  },
  "selectedDates": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["funPrivatetdbpK", "funPrivateuNboM", "handleChange", "handleAnimateFinish", "handleSwipeTouchEnd", "handleSwipeTouchStart"], _temp2);


AtCalendarBody.defaultProps = defaultProps;
tslib_1.__decorate([_index6.default], AtCalendarBody.prototype, "getGroups", null);
tslib_1.__decorate([_index6.default], AtCalendarBody.prototype, "handleTouchStart", null);
tslib_1.__decorate([_index6.default], AtCalendarBody.prototype, "handleTouchEnd", null);
tslib_1.__decorate([_index6.default], AtCalendarBody.prototype, "handleChange", null);
tslib_1.__decorate([_index6.default], AtCalendarBody.prototype, "handleAnimateFinish", null);
tslib_1.__decorate([_index6.default], AtCalendarBody.prototype, "handleSwipeTouchStart", null);
tslib_1.__decorate([_index6.default], AtCalendarBody.prototype, "handleSwipeTouchEnd", null);
exports.default = AtCalendarBody;

Component(require('../../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtCalendarBody));