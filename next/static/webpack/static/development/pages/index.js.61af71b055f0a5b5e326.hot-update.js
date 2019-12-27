webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);










var _jsxFileName = "C:\\Users\\Admin\\Code\\Apathfinding\\pathfinding\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;


var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Home).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "row", function (index) {
      var row = [];

      var _loop = function _loop(i) {
        row.push(__jsx("div", {
          onClick: function _callee(e) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_this.setState(function (prev) {
                      prev.tableValue = [];
                      prev.tableValue[index + i] = -1;
                      return {
                        tableValue: prev.tableValue,
                        chooseIndex: index + i,
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
          key: index + i,
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
            backgroundColor: i + index == 300 ? "red" : _this.state.tableValue[index + i] == -1 ? "green" : _this.state.tableValue[index + i] ? "blue" : "white",
            verticalAlign: "top"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, _this.state.tableValue[index + i]));
      };

      for (var i = 0; i < 20; i++) {
        _loop(i);
      }

      return row;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "table", function () {
      var table = [];

      for (var i = 0; i < 20; i++) {
        table.push(__jsx("div", {
          style: {
            marginLeft: "30px"
          },
          key: "row" + i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, " ", _this.row(20 * i), " "));
      }

      return table;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "pathfinding", function _callee3() {
      var _loop2, _ret;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _loop2 = function _loop2() {
                var q, index, i, x, y, successor, _i, j;

                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _loop2$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        q = void 0, index = void 0;

                        for (i = 0; i < _this.state.priorityQueueOpen.length; i++) {
                          if (!q || _this.state.priorityQueueOpen[i].f < q.f) {
                            q = {};
                            q = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(q, _this.state.priorityQueueOpen[i]);
                            index = i;
                          }
                        }

                        console.log(q);

                        _this.state.priorityQueueOpen.splice(index, 1);

                        x = q.index % 20;
                        y = (q.index - q.index % 20) / 20;
                        successor = {};
                        _i = x - 1;

                      case 8:
                        if (!(_i < x + 2)) {
                          _context3.next = 31;
                          break;
                        }

                        j = y - 1;

                      case 10:
                        if (!(j < y + 2)) {
                          _context3.next = 28;
                          break;
                        }

                        if (!(_i >= 0 && j >= 0 && _i < 20 && j < 20)) {
                          _context3.next = 24;
                          break;
                        }

                        successor.index = j * 20 + _i;

                        if (!(successor.index == _this.state.chooseIndex)) {
                          _context3.next = 15;
                          break;
                        }

                        return _context3.abrupt("return", {
                          v: successor.index
                        });

                      case 15:
                        successor.g = q.g + 1;
                        successor.h = Math.sqrt(Math.pow(_i - _this.state.chooseIndex % 20, 2) + Math.pow(j - _this.state.chooseIndex / 20, 2));
                        successor.f = successor.g + successor.h;

                        if (!(!_this.state.tableValue[successor.index] || _this.state.tableValue[successor.index] > successor.f)) {
                          _context3.next = 22;
                          break;
                        }

                        if (q.index == 300) console.log("thêm", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.priorityQueueOpen));
                        _context3.next = 22;
                        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_this.setState(function _callee2(prev) {
                          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  prev.priorityQueueOpen.push(successor);
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

                      case 22:
                        _context3.next = 25;
                        break;

                      case 24:
                        return _context3.abrupt("continue", 25);

                      case 25:
                        j++;
                        _context3.next = 10;
                        break;

                      case 28:
                        _i++;
                        _context3.next = 8;
                        break;

                      case 31:
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
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_loop2());

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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, this.table());
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.61af71b055f0a5b5e326.hot-update.js.map