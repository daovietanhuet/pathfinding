webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "C:\\Users\\Admin\\Code\\Apathfinding\\pathfinding\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;


var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Home).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "row", function (index) {
      var row = [];

      var _loop = function _loop(i) {
        row.push(__jsx("div", {
          onClick: function _callee(e) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(_this.setState(function (prev) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "table", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "pathfinding", function _callee2() {
      var q, index, i, x, y, successor, _i, j;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this.state.priorityQueueOpen.length !== 0)) {
                _context2.next = 31;
                break;
              }

              q = void 0, index = void 0;

              for (i = 0; i < _this.state.priorityQueueOpen.length; i++) {
                if (!q || _this.state.priorityQueueOpen[i].f < q.f) {
                  q = {};
                  q = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(q, _this.state.priorityQueueOpen[i]);
                  index = i;
                }
              }

              console.log(q);

              _this.state.priorityQueueOpen.splice(index, 1);

              x = q.index % 20;
              y = (q.index - q.index % 20) / 20;
              successor = {};
              _i = x - 1;

            case 9:
              if (!(_i < x + 2)) {
                _context2.next = 29;
                break;
              }

              j = y - 1;

            case 11:
              if (!(j < y + 2)) {
                _context2.next = 26;
                break;
              }

              if (!(_i >= 0 && j >= 0 && _i < 20 && j < 20)) {
                _context2.next = 22;
                break;
              }

              successor.index = j * 20 + _i;

              if (!(successor.index == _this.state.chooseIndex)) {
                _context2.next = 16;
                break;
              }

              return _context2.abrupt("return", successor.index);

            case 16:
              successor.g = q.g + 1;
              successor.h = Math.sqrt(Math.pow(_i - _this.state.chooseIndex % 20, 2) + Math.pow(j - _this.state.chooseIndex / 20, 2));
              successor.f = successor.g + successor.h;

              if (!_this.state.tableValue[successor.index] || _this.state.tableValue[successor.index] > successor.f) {
                console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.priorityQueueOpen));
                _this.state.priorityQueueOpen = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.priorityQueueOpen), [successor]);
                _this.state.tableValue[successor.index] = successor.f;
              }

              _context2.next = 23;
              break;

            case 22:
              return _context2.abrupt("continue", 23);

            case 23:
              j++;
              _context2.next = 11;
              break;

            case 26:
              _i++;
              _context2.next = 9;
              break;

            case 29:
              _context2.next = 0;
              break;

            case 31:
              return _context2.abrupt("return", -1);

            case 32:
            case "end":
              return _context2.stop();
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, this.table());
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a2e34d4e07f5e3f43b2b.hot-update.js.map