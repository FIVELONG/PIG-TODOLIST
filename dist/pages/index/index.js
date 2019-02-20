"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _config = require("../../utils/config.js");

var _config2 = _interopRequireDefault(_config);

var _api = require("../../utils/api.js");

var _api2 = _interopRequireDefault(_api);

var _withLogin = require("../../utils/withLogin.js");

var _withLogin2 = _interopRequireDefault(_withLogin);

var _counter = require("../../actions/counter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _withLogin2.default)(), _dec2 = (0, _index3.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    add: function add() {
      dispatch((0, _counter.add)());
    },
    dec: function dec() {
      dispatch((0, _counter.minus)());
    },
    asyncAdd: function asyncAdd() {
      dispatch((0, _counter.asyncAdd)());
    }
  };
}), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "anonymousState__temp6", "anonymousState__temp7", "loopArray0", "tabs", "backlogList", "checkedList", "memoList", "showModalAdd", "current", "titleValue", "TRUEBOOLEN", "backlogValue", "FALSEBOOLEN", "showAddContentPanel", "memoTitle", "memoContent", "showBottomTab"], _this.config = {
      navigationBarTitleText: '猪维乐丨日历'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        current: 0,
        checkedList: [],
        showBottomTab: false,
        showAddContentPanel: false,
        backlogList: [],
        memoList: [],
        memoTitle: '',
        memoContent: '',
        tabs: [],
        backlogValue: '',
        titleValue: '',
        showModalAdd: false
      };
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      var _this2 = this;

      var cur = this;
      function getArrDifference(arr1, arr2) {
        return arr1.concat(arr2).filter(function (v, i, arr) {
          return arr.indexOf(v) === arr.lastIndexOf(v);
        });
      }
      var res = getArrDifference(value, this.state.checkedList);
      console.log(value);
      console.log(res);
      this.setState({
        checkedList: value
      }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.post(_config2.default.updateBacklog, { backlogId: res[0] });

              case 2:
                _this2.getBacklogList();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })));
    }
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
      });
      _index2.default.setNavigationBarTitle({
        title: value == 0 ? '猪维乐丨TAGS' : '猪维乐丨MEMO'
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose(value) {
      console.log(value);
      this.setState({
        showAddContentPanel: false
      });
    }
  }, {
    key: "showPanel",
    value: function showPanel(state) {
      this.setState({
        showAddContentPanel: !state
      });
    }
  }, {
    key: "chooseDate",
    value: function chooseDate(data) {
      console.log(data.value);
      this.getBacklogList(data.value);
    }
  }, {
    key: "handleBacklogChange",
    value: function handleBacklogChange(event) {
      this.setState({
        backlogValue: event.target.value
      });
    }
  }, {
    key: "handleTitleChange",
    value: function handleTitleChange(value) {
      this.setState({
        titleValue: value
      });
    }
  }, {
    key: "subBacklog",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // do something
                this.setState({
                  showModalAdd: false
                }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var _state, titleValue, backlogValue, current, res, _res;

                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _state = _this3.state, titleValue = _state.titleValue, backlogValue = _state.backlogValue, current = _state.current;
                          _context2.next = 3;
                          return _api2.default.post(current == 0 ? _config2.default.addBacklog : _config2.default.addMemo, {
                            content: backlogValue,
                            title: titleValue
                          });

                        case 3:
                          res = _context2.sent;

                          console.log(res);

                          if (!(res.data.code == 0)) {
                            _context2.next = 20;
                            break;
                          }

                          _index2.default.atMessage({
                            'message': '添加成功',
                            'type': 'success'
                          });
                          setTimeout(function () {
                            _index2.default.navigateBack({
                              delta: 1
                            });
                          }, 1500);
                          _this3.setState({
                            backlogValue: '',
                            titleValue: ''
                          });

                          if (!(current == 0)) {
                            _context2.next = 14;
                            break;
                          }

                          _context2.next = 12;
                          return _this3.getBacklogList();

                        case 12:
                          _context2.next = 18;
                          break;

                        case 14:
                          _context2.next = 16;
                          return _api2.default.get(_config2.default.getMemoList);

                        case 16:
                          _res = _context2.sent;

                          _this3.setState({
                            memoList: _res.data.data
                          });

                        case 18:
                          _context2.next = 21;
                          break;

                        case 20:
                          _index2.default.atMessage({
                            'message': '添加失败，稍后再试',
                            'type': 'error'
                          });

                        case 21:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this3);
                })));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function subBacklog() {
        return _ref4.apply(this, arguments);
      }

      return subBacklog;
    }()
  }, {
    key: "linkAdd",
    value: function linkAdd() {
      this.setState({
        showModalAdd: true
      });
    }
  }, {
    key: "handleCloseAdd",
    value: function handleCloseAdd() {
      this.setState({
        showModalAdd: false
      });
    }
  }, {
    key: "handleCancelAdd",
    value: function handleCancelAdd() {
      this.setState({
        showModalAdd: false
      });
    }
  }, {
    key: "setMemoMain",
    value: function setMemoMain(title, content) {
      this.setState({
        memoTitle: title,
        memoContent: content,
        showAddContentPanel: true
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }
  }, {
    key: "getBacklogList",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(date) {
        var params, res, finishList, index, element;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                params = {};

                if (date) {
                  params = { date: date };
                }
                _context4.next = 4;
                return _api2.default.get(_config2.default.getBacklogList, params);

              case 4:
                res = _context4.sent;

                console.log(res);

                if (!(res.data.code != 0)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return");

              case 8:
                finishList = [];

                for (index = 0; index < res.data.data.length; index++) {
                  element = res.data.data[index];

                  element.value = element.id;
                  element.disabled = element.state == 0 ? false : true;
                  if (element.state == 1) {
                    finishList.push(element.id);
                  }
                }
                this.setState({
                  backlogList: res.data.data,
                  checkedList: finishList
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getBacklogList(_x) {
        return _ref6.apply(this, arguments);
      }

      return getBacklogList;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var findRes, res;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _api2.default.get(_config2.default.getTabList);

              case 2:
                findRes = _context5.sent;

                this.setState({
                  tabs: findRes.data.data
                });
                _context5.next = 6;
                return this.getBacklogList();

              case 6:
                _context5.next = 8;
                return _api2.default.get(_config2.default.getMemoList);

              case 8:
                res = _context5.sent;

                this.setState({
                  memoList: res.data.data
                });

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _ref7.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "onPageScroll",
    value: function onPageScroll(e) {
      if (e.scrollTop > 55) {
        this.setState({
          showBottomTab: true
        });
      } else {
        this.setState({
          showBottomTab: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function componentDidShow() {
        return _ref8.apply(this, arguments);
      }

      return componentDidShow;
    }()
  }, {
    key: "copyBtn",
    value: function copyBtn() {
      _index2.default.atMessage({
        'message': '复制功能开发中···'
      });
    }
  }, {
    key: "editBtn",
    value: function editBtn() {
      _index2.default.atMessage({
        'message': '编辑功能开发中···'
      });
    }
  }, {
    key: "deleteBtn",
    value: function deleteBtn() {
      _index2.default.atMessage({
        'message': '删除功能开发中···'
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _$anonymousState__temp;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;
      var loopArray0 = void 0;

      var FALSEBOOLEN = false;
      var TRUEBOOLEN = true;
      var _state2 = this.__state,
          titleValue = _state2.titleValue,
          backlogValue = _state2.backlogValue,
          showModalAdd = _state2.showModalAdd,
          current = _state2.current,
          showAddContentPanel = _state2.showAddContentPanel,
          backlogList = _state2.backlogList,
          checkedList = _state2.checkedList,
          memoList = _state2.memoList,
          memoTitle = _state2.memoTitle,
          memoContent = _state2.memoContent,
          tabs = _state2.tabs;

      var backlogMain = null;
      var memoMain = null;
      var defaultMain = null;
      var addMain = null;
      if (tabs.length >= 2) {
        tabs[0].text = backlogList.length - checkedList.length;
        tabs[1].text = memoList ? memoList.length : 0;

        if (backlogList.length) {}
        if (memoList && memoList.length) {
          loopArray0 = memoList.map(function (item, index) {
            item = {
              $original: (0, _index.internal_get_original)(item)
            };
            var $loopState__temp2 = String(index);
            var $loopState__temp4 = { size: 25, color: 'rgba(52, 72, 94, 0.5)', value: 'bookmark' };
            return {
              $loopState__temp2: $loopState__temp2,
              $loopState__temp4: $loopState__temp4,
              $original: item.$original
            };
          });
        }
        if (showModalAdd) {
          _$anonymousState__temp = "\u8F93\u5165" + (current == 0 ? 'TAGS' : 'MEMO') + "...";
        }
      }
      var anonymousState__temp6 = (0, _index.internal_inline_style)({ display: tabs.length >= 2 ? "block" : "none" });
      var anonymousState__temp7 = (0, _index.internal_inline_style)({ display: this.__state.showBottomTab ? "block" : "none" });
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        loopArray0: loopArray0,
        TRUEBOOLEN: TRUEBOOLEN,
        FALSEBOOLEN: FALSEBOOLEN
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["handleChange", "setMemoMain", "handleCloseAdd", "handleTitleChange", "handleBacklogChange", "handleCancelAdd", "subBacklog", "handleClick", "chooseDate", "linkAdd", "handleClose", "copyBtn", "editBtn", "deleteBtn"], _temp2)) || _class) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));