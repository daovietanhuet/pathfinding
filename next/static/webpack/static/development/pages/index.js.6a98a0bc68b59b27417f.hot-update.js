webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "C:\\Users\\Admin\\Code\\Apathfinding\\pathfinding\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;


var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Home).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "row", function (index) {
      var row = [];

      var _loop = function _loop(_i) {
        row.push(__jsx("div", {
          onClick: function _callee(e) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_this.setState(function (prev) {
                      prev.tableValue = [];
                      prev.tableValue[index + _i] = -1;
                      return {
                        tableValue: prev.tableValue,
                        chooseIndex: index + _i,
                        priorityQueueOpen: [{
                          index: 300,
                          f: 0,
                          g: 0
                        }]
                      };
                    }));

                  case 2:
                    _this.pathfinding();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            });
          },
          key: index + _i,
          style: {
            width: "30px",
            height: "30px",
            border: "1px solid #000000",
            display: "inline-block",
            marginLeft: "3px",
            marginBottom: "3px",
            textAlign: "center",
            lineHeight: "30px",
            color: "white",
            fontWeight: "bolder",
            backgroundColor: _i + index == 300 ? "red" : _this.state.tableValue[index + _i] == -1 ? "green" : _this.state.tableValue[index + _i] ? "blue" : "white",
            verticalAlign: "top"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, _this.state.tableValue[index + _i]));
      };

      for (var _i = 0; _i < 20; _i++) {
        _loop(_i);
      }

      return row;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "table", function () {
      var table = [];

      for (var _i2 = 0; _i2 < 20; _i2++) {
        table.push(__jsx("div", {
          style: {
            marginLeft: "30px"
          },
          key: "row" + _i2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, " ", _this.row(20 * _i2), " "));
      }

      return table;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "pathfinding", function _callee3() {
      var _loop2, _ret;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _loop2 = function _loop2() {
                var q, index, _i3, x, y, successor, child, childf, _i4, j;

                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _loop2$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        q = void 0, index = void 0;

                        for (_i3 = 0; _i3 < _this.state.priorityQueueOpen.length; _i3++) {
                          if (!q || _this.state.priorityQueueOpen[_i3].f < q.f) {
                            q = {};
                            q = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(q, _this.state.priorityQueueOpen[_i3]);
                            index = _i3;
                          }
                        }

                        console.log(q);

                        _this.state.priorityQueueOpen.splice(index, 1);

                        x = q.index % 20;
                        y = (q.index - q.index % 20) / 20;
                        successor = {};
                        child = [];
                        childf = [];
                        _i4 = x - 1;

                      case 10:
                        if (!(_i4 < x + 2)) {
                          _context3.next = 30;
                          break;
                        }

                        j = y - 1;

                      case 12:
                        if (!(j < y + 2)) {
                          _context3.next = 27;
                          break;
                        }

                        if (!(_i4 >= 0 && j >= 0 && _i4 < 20 && j < 20)) {
                          _context3.next = 23;
                          break;
                        }

                        successor.index = j * 20 + _i4;

                        if (!(successor.index == _this.state.chooseIndex)) {
                          _context3.next = 17;
                          break;
                        }

                        return _context3.abrupt("return", {
                          v: successor.index
                        });

                      case 17:
                        successor.g = q.g + 1;
                        successor.h = Math.sqrt(Math.pow(_i4 - _this.state.chooseIndex % 20, 2) + Math.pow(j - _this.state.chooseIndex / 20, 2));
                        successor.f = successor.g + successor.h;

                        if (!_this.state.tableValue[successor.index] || _this.state.tableValue[successor.index] > successor.f) {
                          child.push(successor);
                          childf[successor];
                        }

                        _context3.next = 24;
                        break;

                      case 23:
                        return _context3.abrupt("continue", 24);

                      case 24:
                        j++;
                        _context3.next = 12;
                        break;

                      case 27:
                        _i4++;
                        _context3.next = 10;
                        break;

                      case 30:
                        _context3.next = 32;
                        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_this.setState(function _callee2(prev) {
                          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  prev.priorityQueueOpen.push(successor, i);
                                  prev.tableValue[successor.index] = successor.f;
                                  return _context2.abrupt("return", {
                                    priorityQueueOpen: prev.priorityQueueOpen,
                                    tableValue: prev.tableValue
                                  });

                                case 3:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          });
                        }));

                      case 32:
                      case "end":
                        return _context3.stop();
                    }
                  }
                });
              };

            case 1:
              if (!(_this.state.priorityQueueOpen.length !== 0)) {
                _context4.next = 9;
                break;
              }

              _context4.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_loop2());

            case 4:
              _ret = _context4.sent;

              if (!(typeof _ret === "object")) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", _ret.v);

            case 7:
              _context4.next = 1;
              break;

            case 9:
              return _context4.abrupt("return", -1);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      });
    });

    _this.state = {
      tableValue: [],
      chooseIndex: null,
      priorityQueueOpen: [{
        index: 300,
        f: 0,
        g: 0
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, this.table());
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.6a98a0bc68b59b27417f.hot-update.js.map