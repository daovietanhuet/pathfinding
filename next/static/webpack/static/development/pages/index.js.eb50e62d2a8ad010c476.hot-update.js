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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "pathfinding", function _callee2() {
      var q, index, i, x, y, successor, child, _i, j;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this.state.priorityQueueOpen.length !== 0)) {
                _context2.next = 32;
                break;
              }

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
              child = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.priorityQueueOpen);
              _i = x - 1;

            case 10:
              if (!(_i < x + 2)) {
                _context2.next = 30;
                break;
              }

              j = y - 1;

            case 12:
              if (!(j < y + 2)) {
                _context2.next = 27;
                break;
              }

              if (!(_i >= 0 && j >= 0 && _i < 20 && j < 20)) {
                _context2.next = 23;
                break;
              }

              successor.index = j * 20 + _i;

              if (!(successor.index == _this.state.chooseIndex)) {
                _context2.next = 17;
                break;
              }

              return _context2.abrupt("return", successor.index);

            case 17:
              successor.g = q.g + 1;
              successor.h = Math.sqrt(Math.pow(_i - _this.state.chooseIndex % 20, 2) + Math.pow(j - _this.state.chooseIndex / 20, 2));
              successor.f = successor.g + successor.h;

              if (!_this.state.tableValue[successor.index] || _this.state.tableValue[successor.index] > successor.f) {
                console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.priorityQueueOpen), successor);
                _this.state.tableValue[successor.index] = successor.f;
              }

              _context2.next = 24;
              break;

            case 23:
              return _context2.abrupt("continue", 24);

            case 24:
              j++;
              _context2.next = 12;
              break;

            case 27:
              _i++;
              _context2.next = 10;
              break;

            case 30:
              _context2.next = 0;
              break;

            case 32:
              return _context2.abrupt("return", -1);

            case 33:
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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
//# sourceMappingURL=index.js.eb50e62d2a8ad010c476.hot-update.js.map