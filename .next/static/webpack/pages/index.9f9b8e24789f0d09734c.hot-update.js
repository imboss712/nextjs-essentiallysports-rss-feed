webpackHotUpdate_N_E("pages/index",{

/***/ "./components/article.js":
/*!*******************************!*\
  !*** ./components/article.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/project/sandbox/components/article.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Article = function Article(_ref) {\n  var article = _ref.article;\n  var title = article.title,\n      pubDate = article.pubDate,\n      link = article.link,\n      author = article.author,\n      description = article.description,\n      categories = article.categories,\n      enclosure = article.enclosure;\n  return __jsx(\"div\", {\n    className: \"m-8 p-5 border border-gray-400 hover:border-blue-500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    target: \"_blank\",\n    href: link,\n    className: \"text-left no-underline text-gray-800\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, categories[0]), __jsx(\"h3\", {\n    className: \"m-0 text-black-500 text-lg font-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, title), __jsx(\"p\", {\n    className: \"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }, description), __jsx(\"ul\", {\n    className: \"flex justify-between my-2 pt-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    className: \"text-m text-red-500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 25\n    }\n  }, author)), __jsx(\"li\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    className: \"text-m text-gray-900\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 25\n    }\n  }, new Date(pubDate).toDateString())))));\n};\n\n_c = Article;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlLmpzPzQ5MGYiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImFydGljbGUiLCJ0aXRsZSIsInB1YkRhdGUiLCJsaW5rIiwiYXV0aG9yIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yaWVzIiwiZW5jbG9zdXJlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQUEsTUFDckJDLEtBRHFCLEdBQ2dERCxPQURoRCxDQUNyQkMsS0FEcUI7QUFBQSxNQUNkQyxPQURjLEdBQ2dERixPQURoRCxDQUNkRSxPQURjO0FBQUEsTUFDTEMsSUFESyxHQUNnREgsT0FEaEQsQ0FDTEcsSUFESztBQUFBLE1BQ0NDLE1BREQsR0FDZ0RKLE9BRGhELENBQ0NJLE1BREQ7QUFBQSxNQUNTQyxXQURULEdBQ2dETCxPQURoRCxDQUNTSyxXQURUO0FBQUEsTUFDc0JDLFVBRHRCLEdBQ2dETixPQURoRCxDQUNzQk0sVUFEdEI7QUFBQSxNQUNrQ0MsU0FEbEMsR0FDZ0RQLE9BRGhELENBQ2tDTyxTQURsQztBQUU3QixTQUNJO0FBQUssYUFBUyxFQUFDLHNEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFVBQU0sRUFBQyxRQURYO0FBRUksUUFBSSxFQUFFSixJQUZWO0FBR0ksYUFBUyxFQUFDLHNDQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlHLFVBQVUsQ0FBQyxDQUFELENBQWQsQ0FOSixFQU9JO0FBQUksYUFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0wsS0FETCxDQVBKLEVBVUk7QUFBRyxhQUFTLEVBQUMsMENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSSxXQURMLENBVkosRUFjSTtBQUFJLGFBQVMsRUFBQyxnQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0QsTUFBcEMsQ0FESixDQURKLEVBS0k7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQyxJQUFJSSxJQUFKLENBQVNOLE9BQVQsRUFBa0JPLFlBQWxCLEVBQXJDLENBREosQ0FMSixDQWRKLENBREosQ0FESjtBQThCSCxDQWhDRDs7S0FBTVYsTztBQWtDU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2FydGljbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFydGljbGUgPSAoeyBhcnRpY2xlIH0pID0+IHtcbiAgICBjb25zdCB7IHRpdGxlLCBwdWJEYXRlLCBsaW5rLCBhdXRob3IsIGRlc2NyaXB0aW9uLCBjYXRlZ29yaWVzLCBlbmNsb3N1cmUgfSA9IGFydGljbGU7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTggcC01IGJvcmRlciBib3JkZXItZ3JheS00MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgaHJlZj17bGlua31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbm8tdW5kZXJsaW5lIHRleHQtZ3JheS04MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17ZW5jbG9zdXJlLmxpbmt9IGFsdD17dGl0bGV9IC8+ICovfVxuICAgICAgICAgICAgICAgIDxwPntjYXRlZ29yaWVzWzBdfTwvcD5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmxhY2stNTAwIHRleHQtbGcgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwdC0zIHB5LTAgcGItMCB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBteS0yIHB0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbSB0ZXh0LXJlZC01MDBcIj57YXV0aG9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tIHRleHQtZ3JheS05MDBcIj57bmV3IERhdGUocHViRGF0ZSkudG9EYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/article.js\n");

/***/ })

})