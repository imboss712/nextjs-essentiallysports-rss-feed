webpackHotUpdate_N_E("pages/index",{

/***/ "./components/articles.js":
/*!********************************!*\
  !*** ./components/articles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./components/nav.js\");\n/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article */ \"./components/article.js\");\nvar _this = undefined,\n    _jsxFileName = \"/project/sandbox/components/articles.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Articles = function Articles(_ref) {\n  var feed = _ref.feed,\n      articles = _ref.articles;\n  return __jsx(\"div\", {\n    className: \"text-sans\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, feed.title), __jsx(\"meta\", {\n    name: \"description\",\n    content: feed.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  })), __jsx(_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    feed: feed,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"w-full text-center text-gray-900\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: \"m-0 w-full pt-12 leading-tight text-5xl font-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, \"Latest News \\u2192\"), articles.length == 0 ? __jsx(\"p\", {\n    className: \"my-4 text-lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 41\n    }\n  }, \"No Articles Found !\") : articles.map(function (article, index) {\n    return __jsx(_article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: index,\n      article: article,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 21\n      }\n    });\n  }), __jsx(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.essentiallysports.com/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    type: \"button\",\n    \"class\": \"align-middle text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded text-center my-4 text-m px-5 py-3 m-2 focus:outline-none\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }, \"Read more news from EssentiallySports\"))));\n};\n\n_c = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\n\nvar _c;\n\n$RefreshReg$(_c, \"Articles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlcy5qcz8xMzQ2Il0sIm5hbWVzIjpbIkFydGljbGVzIiwiZmVlZCIsImFydGljbGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsIm1hcCIsImFydGljbGUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDckMsU0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFELElBQUksQ0FBQ0UsS0FBYixDQURKLEVBRUk7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUVGLElBQUksQ0FBQ0csV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMscUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLEVBUUksTUFBQyw0Q0FBRDtBQUFLLFFBQUksRUFBRUgsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFVSTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsbURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUtLQyxRQUFRLENBQUNHLE1BQVQsSUFBbUIsQ0FBbkIsR0FBdUI7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUF2QixHQUVNSCxRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSxXQUNoQixNQUFDLGdEQUFEO0FBQVMsU0FBRyxFQUFFQSxLQUFkO0FBQXFCLGFBQU8sRUFBRUQsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURnQjtBQUFBLEdBQWIsQ0FQWCxFQVdJO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBbUIsUUFBSSxFQUFDLG9DQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFNLHlKQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURKLENBWEosQ0FWSixDQURKO0FBOEJILENBL0JEOztLQUFNUCxRO0FBaUNTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXJ0aWNsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdlwiO1xuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vYXJ0aWNsZVwiO1xuXG5jb25zdCBBcnRpY2xlcyA9ICh7IGZlZWQsIGFydGljbGVzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2Fuc1wiPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPntmZWVkLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZmVlZC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPE5hdiBmZWVkPXtmZWVkfSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm0tMCB3LWZ1bGwgcHQtMTIgbGVhZGluZy10aWdodCB0ZXh0LTV4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgTGF0ZXN0IE5ld3MgJnJhcnI7XG4gICAgICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgICAgIHthcnRpY2xlcy5sZW5ndGggPT0gMCA/IDxwIGNsYXNzTmFtZT1cIm15LTQgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICBObyBBcnRpY2xlcyBGb3VuZCAhXG4gICAgICAgICAgICAgICAgPC9wPiA6IGFydGljbGVzLm1hcCgoYXJ0aWNsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGUga2V5PXtpbmRleH0gYXJ0aWNsZT17YXJ0aWNsZX0gLz5cbiAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5lc3NlbnRpYWxseXNwb3J0cy5jb20vXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYWxpZ24tbWlkZGxlIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctYmx1ZS0zMDAgcm91bmRlZCB0ZXh0LWNlbnRlciBteS00IHRleHQtbSBweC01IHB5LTMgbS0yIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBtb3JlIG5ld3MgZnJvbSBFc3NlbnRpYWxseVNwb3J0c1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/articles.js\n");

/***/ })

})