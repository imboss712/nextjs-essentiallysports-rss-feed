webpackHotUpdate_N_E("pages/index",{

/***/ "./components/article.js":
/*!*******************************!*\
  !*** ./components/article.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/project/sandbox/components/article.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Article = function Article(_ref) {\n  var article = _ref.article;\n  var title = article.title,\n      pubDate = article.pubDate,\n      link = article.link,\n      author = article.author,\n      description = article.description,\n      categories = article.categories,\n      enclosure = article.enclosure;\n  return __jsx(\"div\", {\n    className: \"m-8 p-5 border border-gray-400 hover:border-blue-500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    target: \"_blank\",\n    href: link,\n    className: \"text-left no-underline text-gray-800 flex flex-nowrap flex-col lg:flex-row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    classname: \"self-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: enclosure.link,\n    alt: title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    classname: \"flex-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"pl-1 mt-1 mb-3 text-m text-gray-700 underline\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 82\n    }\n  }, categories[0])), __jsx(\"h3\", {\n    className: \"m-0 text-black-500 text-lg font-bold break-words\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }, title), __jsx(\"p\", {\n    className: \"m-0 pt-3 py-0 pb-0 text-sm text-gray-900 break-words hidden lg:block md:block\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, description), __jsx(\"ul\", {\n    className: \"flex justify-between mt-2 mb-1 pt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }, __jsx(\"li\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 25\n    }\n  }, __jsx(\"p\", {\n    className: \"text-m text-red-700\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 29\n    }\n  }, author)), __jsx(\"li\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 25\n    }\n  }, __jsx(\"p\", {\n    className: \"text-m text-gray-900\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 29\n    }\n  }, new Date(pubDate).toDateString()))))));\n};\n\n_c = Article;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlLmpzPzQ5MGYiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImFydGljbGUiLCJ0aXRsZSIsInB1YkRhdGUiLCJsaW5rIiwiYXV0aG9yIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yaWVzIiwiZW5jbG9zdXJlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQUEsTUFDckJDLEtBRHFCLEdBQ2dERCxPQURoRCxDQUNyQkMsS0FEcUI7QUFBQSxNQUNkQyxPQURjLEdBQ2dERixPQURoRCxDQUNkRSxPQURjO0FBQUEsTUFDTEMsSUFESyxHQUNnREgsT0FEaEQsQ0FDTEcsSUFESztBQUFBLE1BQ0NDLE1BREQsR0FDZ0RKLE9BRGhELENBQ0NJLE1BREQ7QUFBQSxNQUNTQyxXQURULEdBQ2dETCxPQURoRCxDQUNTSyxXQURUO0FBQUEsTUFDc0JDLFVBRHRCLEdBQ2dETixPQURoRCxDQUNzQk0sVUFEdEI7QUFBQSxNQUNrQ0MsU0FEbEMsR0FDZ0RQLE9BRGhELENBQ2tDTyxTQURsQztBQUU3QixTQUNJO0FBQUssYUFBUyxFQUFDLHNEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFVBQU0sRUFBQyxRQURYO0FBRUksUUFBSSxFQUFFSixJQUZWO0FBR0ksYUFBUyxFQUFDLDRFQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLE9BQUcsRUFBRUksU0FBUyxDQUFDSixJQURuQjtBQUVJLE9BQUcsRUFBRUYsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixFQVdJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLCtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTSyxVQUFVLENBQUMsQ0FBRCxDQUFuQixDQUE3RCxDQURKLEVBRUk7QUFBSSxhQUFTLEVBQUMsa0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTCxLQURMLENBRkosRUFLSTtBQUFHLGFBQVMsRUFBQywrRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tJLFdBREwsQ0FMSixFQVNJO0FBQUksYUFBUyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DRCxNQUFwQyxDQURKLENBREosRUFLSTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDLElBQUlJLElBQUosQ0FBU04sT0FBVCxFQUFrQk8sWUFBbEIsRUFBckMsQ0FESixDQUxKLENBVEosQ0FYSixDQURKLENBREo7QUFtQ0gsQ0FyQ0Q7O0tBQU1WLE87QUF1Q1NBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hcnRpY2xlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSwgcHViRGF0ZSwgbGluaywgYXV0aG9yLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcmllcywgZW5jbG9zdXJlIH0gPSBhcnRpY2xlO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS04IHAtNSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2xpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG5vLXVuZGVybGluZSB0ZXh0LWdyYXktODAwIGZsZXggZmxleC1ub3dyYXAgZmxleC1jb2wgbGc6ZmxleC1yb3dcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NuYW1lPVwic2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbmNsb3N1cmUubGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc25hbWU9XCJmbGV4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwtMSBtdC0xIG1iLTMgdGV4dC1tIHRleHQtZ3JheS03MDAgdW5kZXJsaW5lXCI+PHN0cm9uZz57Y2F0ZWdvcmllc1swXX08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtLTAgdGV4dC1ibGFjay01MDAgdGV4dC1sZyBmb250LWJvbGQgYnJlYWstd29yZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHB0LTMgcHktMCBwYi0wIHRleHQtc20gdGV4dC1ncmF5LTkwMCBicmVhay13b3JkcyBoaWRkZW4gbGc6YmxvY2sgbWQ6YmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC0yIG1iLTEgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW0gdGV4dC1yZWQtNzAwXCI+e2F1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbSB0ZXh0LWdyYXktOTAwXCI+e25ldyBEYXRlKHB1YkRhdGUpLnRvRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/article.js\n");

/***/ })

})