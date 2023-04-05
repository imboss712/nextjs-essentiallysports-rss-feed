webpackHotUpdate_N_E("pages/index",{

/***/ "./components/article.js":
/*!*******************************!*\
  !*** ./components/article.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/project/sandbox/components/article.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Article = function Article(_ref) {\n  var article = _ref.article;\n  var title = article.title,\n      pubDate = article.pubDate,\n      link = article.link,\n      author = article.author,\n      description = article.description,\n      categories = article.categories,\n      enclosure = article.enclosure;\n  return __jsx(\"div\", {\n    className: \"m-8 p-5 border border-gray-400 hover:border-blue-500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    target: \"_blank\",\n    href: link,\n    className: \"text-left no-underline text-gray-800 flex flex-row flex-nowrap justify-stretch justify-items-center content-stretch items-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"justify-self-center\",\n    style: {\n      width: 500,\n      height: 500\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: enclosure.link,\n    alt: title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    className: \"justify-self-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"pl-1 mt-1 mb-3 text-m text-gray-700 underline\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 82\n    }\n  }, categories[0])), __jsx(\"h3\", {\n    className: \"m-0 text-black-500 text-lg font-bold break-words\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }, title), __jsx(\"p\", {\n    className: \"m-0 pt-3 py-0 pb-0 text-sm text-gray-900 break-words hidden lg:block md:block\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, description), __jsx(\"ul\", {\n    className: \"flex justify-between mt-2 mb-1 pt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }, __jsx(\"li\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 25\n    }\n  }, __jsx(\"p\", {\n    className: \"text-m text-red-700\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 29\n    }\n  }, author)), __jsx(\"li\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 25\n    }\n  }, __jsx(\"p\", {\n    className: \"text-m text-gray-900\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 29\n    }\n  }, new Date(pubDate).toDateString()))))));\n};\n\n_c = Article;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlLmpzPzQ5MGYiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImFydGljbGUiLCJ0aXRsZSIsInB1YkRhdGUiLCJsaW5rIiwiYXV0aG9yIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yaWVzIiwiZW5jbG9zdXJlIiwid2lkdGgiLCJoZWlnaHQiLCJEYXRlIiwidG9EYXRlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFBQSxNQUNyQkMsS0FEcUIsR0FDZ0RELE9BRGhELENBQ3JCQyxLQURxQjtBQUFBLE1BQ2RDLE9BRGMsR0FDZ0RGLE9BRGhELENBQ2RFLE9BRGM7QUFBQSxNQUNMQyxJQURLLEdBQ2dESCxPQURoRCxDQUNMRyxJQURLO0FBQUEsTUFDQ0MsTUFERCxHQUNnREosT0FEaEQsQ0FDQ0ksTUFERDtBQUFBLE1BQ1NDLFdBRFQsR0FDZ0RMLE9BRGhELENBQ1NLLFdBRFQ7QUFBQSxNQUNzQkMsVUFEdEIsR0FDZ0ROLE9BRGhELENBQ3NCTSxVQUR0QjtBQUFBLE1BQ2tDQyxTQURsQyxHQUNnRFAsT0FEaEQsQ0FDa0NPLFNBRGxDO0FBRTdCLFNBQ0k7QUFBSyxhQUFTLEVBQUMsc0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksVUFBTSxFQUFDLFFBRFg7QUFFSSxRQUFJLEVBQUVKLElBRlY7QUFHSSxhQUFTLEVBQUMsa0lBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQXFDLFNBQUssRUFBRTtBQUFFSyxXQUFLLEVBQUUsR0FBVDtBQUFjQyxZQUFNLEVBQUU7QUFBdEIsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksT0FBRyxFQUFFRixTQUFTLENBQUNKLElBRG5CO0FBRUksT0FBRyxFQUFFRixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLEVBV0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLCtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTSyxVQUFVLENBQUMsQ0FBRCxDQUFuQixDQUE3RCxDQURKLEVBRUk7QUFBSSxhQUFTLEVBQUMsa0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTCxLQURMLENBRkosRUFLSTtBQUFHLGFBQVMsRUFBQywrRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tJLFdBREwsQ0FMSixFQVNJO0FBQUksYUFBUyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DRCxNQUFwQyxDQURKLENBREosRUFLSTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDLElBQUlNLElBQUosQ0FBU1IsT0FBVCxFQUFrQlMsWUFBbEIsRUFBckMsQ0FESixDQUxKLENBVEosQ0FYSixDQURKLENBREo7QUFtQ0gsQ0FyQ0Q7O0tBQU1aLE87QUF1Q1NBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hcnRpY2xlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSwgcHViRGF0ZSwgbGluaywgYXV0aG9yLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcmllcywgZW5jbG9zdXJlIH0gPSBhcnRpY2xlO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS04IHAtNSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2xpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG5vLXVuZGVybGluZSB0ZXh0LWdyYXktODAwIGZsZXggZmxleC1yb3cgZmxleC1ub3dyYXAganVzdGlmeS1zdHJldGNoIGp1c3RpZnktaXRlbXMtY2VudGVyIGNvbnRlbnQtc3RyZXRjaCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiA1MDAsIGhlaWdodDogNTAwIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VuY2xvc3VyZS5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsLTEgbXQtMSBtYi0zIHRleHQtbSB0ZXh0LWdyYXktNzAwIHVuZGVybGluZVwiPjxzdHJvbmc+e2NhdGVnb3JpZXNbMF19PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmxhY2stNTAwIHRleHQtbGcgZm9udC1ib2xkIGJyZWFrLXdvcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwdC0zIHB5LTAgcGItMCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYnJlYWstd29yZHMgaGlkZGVuIGxnOmJsb2NrIG1kOmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtMiBtYi0xIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tIHRleHQtcmVkLTcwMFwiPnthdXRob3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW0gdGV4dC1ncmF5LTkwMFwiPntuZXcgRGF0ZShwdWJEYXRlKS50b0RhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/article.js\n");

/***/ })

})