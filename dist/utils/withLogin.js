"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var autoLogin = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var findRes;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log('...这里是登录逻辑');
            _context5.next = 3;
            return _index2.default.getStorageSync('userInfo');

          case 3:
            findRes = _context5.sent;

            if (!findRes) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return");

          case 6:
            _index2.default.login({
              success: function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(res) {
                  var data;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!res.code) {
                            _context4.next = 7;
                            break;
                          }

                          _context4.next = 3;
                          return _api2.default.post(_config2.default.login, { code: res.code });

                        case 3:
                          data = _context4.sent;

                          console.log(data.data);
                          _context4.next = 7;
                          return _index2.default.setStorageSync('userInfo', data.data.data.userInfo);

                        case 7:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));

                function success(_x2) {
                  return _ref5.apply(this, arguments);
                }

                return success;
              }()
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function autoLogin() {
    return _ref4.apply(this, arguments);
  };
}();

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

var _api = require("./api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LIFE_CYCLE_MAP = ['willMount', 'didMount', 'didShow'];

/**
 *
 * 登录鉴权
 *
 * @param {string} [lifecycle] 需要等待的鉴权完再执行的生命周期 willMount didMount didShow
 * @returns 包装后的Component
 *
 */
function withLogin() {
  var lifecycle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'willMount';

  // 异常规避提醒
  if (LIFE_CYCLE_MAP.indexOf(lifecycle) < 0) {
    console.warn("\u4F20\u5165\u7684\u751F\u547D\u5468\u671F\u4E0D\u5B58\u5728, \u9274\u6743\u5224\u65AD\u5F02\u5E38 ===========> " + lifecycle);
    return function (Component) {
      return Component;
    };
  }
  return function withLoginComponent(Component) {
    // 避免H5兼容异常
    // if (tool.isH5()) {
    //   return Component;
    // }

    // 这里还可以通过redux来获取本地用户信息，在用户一次登录之后，其他需要鉴权的页面可以用判断跳过流程
    // @connect(({ user }) => ({
    //   userInfo: user.userInfo,
    // }))
    return function (_Component) {
      _inherits(WithLogin, _Component);

      function WithLogin() {
        _classCallCheck(this, WithLogin);

        return _possibleConstructorReturn(this, (WithLogin.__proto__ || Object.getPrototypeOf(WithLogin)).apply(this, arguments));
      }

      _createClass(WithLogin, [{
        key: "componentWillMount",
        value: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!_get(WithLogin.prototype.__proto__ || Object.getPrototypeOf(WithLogin.prototype), "componentWillMount", this)) {
                      _context.next = 8;
                      break;
                    }

                    if (!(lifecycle === LIFE_CYCLE_MAP[0])) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return autoLogin();

                  case 4:
                    res = _context.sent;

                    if (res) {
                      _context.next = 7;
                      break;
                    }

                    return _context.abrupt("return");

                  case 7:

                    _get(WithLogin.prototype.__proto__ || Object.getPrototypeOf(WithLogin.prototype), "componentWillMount", this).call(this);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function componentWillMount() {
            return _ref.apply(this, arguments);
          }

          return componentWillMount;
        }()
      }, {
        key: "componentDidMount",
        value: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!_get(WithLogin.prototype.__proto__ || Object.getPrototypeOf(WithLogin.prototype), "componentDidMount", this)) {
                      _context2.next = 8;
                      break;
                    }

                    if (!(lifecycle === LIFE_CYCLE_MAP[1])) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 4;
                    return autoLogin();

                  case 4:
                    res = _context2.sent;

                    if (res) {
                      _context2.next = 7;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 7:

                    _get(WithLogin.prototype.__proto__ || Object.getPrototypeOf(WithLogin.prototype), "componentDidMount", this).call(this);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function componentDidMount() {
            return _ref2.apply(this, arguments);
          }

          return componentDidMount;
        }()
      }, {
        key: "componentDidShow",
        value: function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!_get(WithLogin.prototype.__proto__ || Object.getPrototypeOf(WithLogin.prototype), "componentDidShow", this)) {
                      _context3.next = 8;
                      break;
                    }

                    if (!(lifecycle === LIFE_CYCLE_MAP[2])) {
                      _context3.next = 7;
                      break;
                    }

                    _context3.next = 4;
                    return autoLogin();

                  case 4:
                    res = _context3.sent;

                    if (res) {
                      _context3.next = 7;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 7:

                    _get(WithLogin.prototype.__proto__ || Object.getPrototypeOf(WithLogin.prototype), "componentDidShow", this).call(this);

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function componentDidShow() {
            return _ref3.apply(this, arguments);
          }

          return componentDidShow;
        }()
      }]);

      return WithLogin;
    }(Component);

    $_autoLogin = function $_autoLogin() {
      var _console;

      // ...这里是登录逻辑
      (_console = console).log.apply(_console, _toConsumableArray(这里是登录逻辑));
    };
  };
}

exports.default = withLogin;