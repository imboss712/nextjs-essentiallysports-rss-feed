webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav */ \"./components/nav.js\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.js\");\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/error */ \"./components/error.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/project/sandbox/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar baseRSSUrl = \"https://api.rss2json.com/v1/api.json?rss_url=\";\nvar feedUrl = \"https://www.essentiallysports.com/feed/\";\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      isLoading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      feed = _useState2[0],\n      setFeed = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      articles = _useState3[0],\n      setArticles = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isError = _useState4[0],\n      setError = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function fetchArticles() {\n      return _fetchArticles.apply(this, arguments);\n    }\n\n    function _fetchArticles() {\n      _fetchArticles = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var url, response, _data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                url = baseRSSUrl + feedUrl;\n                console.log(\"url: \" + url);\n                _context.next = 5;\n                return fetch(url);\n\n              case 5:\n                response = _context.sent;\n                _context.next = 8;\n                return response.json();\n\n              case 8:\n                _data = _context.sent;\n                console.log(\"feed 0: \" + _data.feed);\n                setLoading(false);\n                setFeed(_data.feed);\n                console.log(\"feed 1: \" + _data.feed);\n                setArticles(_data.items);\n                console.log(\"feed 2: \" + _data.feed);\n                _context.next = 21;\n                break;\n\n              case 17:\n                _context.prev = 17;\n                _context.t0 = _context[\"catch\"](0);\n                setLoading(false);\n                setError(true);\n\n              case 21:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 17]]);\n      }));\n      return _fetchArticles.apply(this, arguments);\n    }\n\n    fetchArticles();\n  }, []);\n\n  if (isLoading) {\n    return __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 12\n      }\n    });\n  } else if (isError) {\n    return __jsx(_components_error__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 12\n      }\n    });\n  } else if (feed) {\n    console.log(\"feed 3: \" + data.feed);\n    return __jsx(\"div\", {\n      className: \"text-sans\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }\n    }, __jsx(\"title\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }\n    }, \"Home\"), __jsx(\"link\", {\n      rel: \"icon\",\n      href: \"/favicon.ico\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }\n    })), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      feed: feed,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }\n    }), __jsx(\"div\", {\n      className: \"w-full text-gray-900\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }\n    }, __jsx(\"h1\", {\n      className: \"m-0 w-full pt-20 leading-tight text-5xl text-center font-bold\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }\n    }, \"Latest News \\u2192\"), __jsx(\"div\", {\n      className: \"max-w-4xl mx-auto pt-20 py-auto pb-8 flex flex-row justify-around\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      href: \"https://nextjs.org/docs\",\n      className: \"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }\n    }, __jsx(\"h3\", {\n      className: \"m-0 text-blue-500 text-lg font-bold\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    }, \"Documentation \\u2192\"), __jsx(\"p\", {\n      className: \"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 15\n      }\n    }, \"Learn more about Next.js in the documentation.\")), __jsx(\"a\", {\n      href: \"https://nextjs.org/learn\",\n      className: \"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 13\n      }\n    }, __jsx(\"h3\", {\n      className: \"m-0 text-blue-500 text-lg font-bold\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 15\n      }\n    }, \"Next.js Learn \\u2192\"), __jsx(\"p\", {\n      className: \"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 15\n      }\n    }, \"Learn about Next.js by following an interactive tutorial!\")), __jsx(\"a\", {\n      href: \"https://github.com/zeit/next.js/tree/master/examples\",\n      className: \"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 13\n      }\n    }, __jsx(\"h3\", {\n      className: \"m-0 text-blue-500 text-lg font-bold\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 15\n      }\n    }, \"Examples \\u2192\"), __jsx(\"p\", {\n      className: \"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 15\n      }\n    }, \"Find other example boilerplates on the Next.js GitHub.\")))));\n  } else {\n    return null;\n  }\n};\n\n_s(Home, \"UNEDKgnzYTglMI3ycpp9TvzNJIQ=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJiYXNlUlNTVXJsIiwiZmVlZFVybCIsIkhvbWUiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJmZWVkIiwic2V0RmVlZCIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJmZXRjaEFydGljbGVzIiwidXJsIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRywrQ0FBbkI7QUFDQSxJQUFNQyxPQUFPLEdBQUcseUNBQWhCOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDZUMsc0RBQVEsQ0FBQyxJQUFELENBRHZCO0FBQUEsTUFDVkMsU0FEVTtBQUFBLE1BQ0NDLFVBREQ7O0FBQUEsbUJBRU9GLHNEQUFRLEVBRmY7QUFBQSxNQUVWRyxJQUZVO0FBQUEsTUFFSkMsT0FGSTs7QUFBQSxtQkFHZUosc0RBQVEsQ0FBQyxFQUFELENBSHZCO0FBQUEsTUFHVkssUUFIVTtBQUFBLE1BR0FDLFdBSEE7O0FBQUEsbUJBSVdOLHNEQUFRLENBQUMsS0FBRCxDQUpuQjtBQUFBLE1BSVZPLE9BSlU7QUFBQSxNQUlEQyxRQUpDOztBQU1qQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsYUFERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3TUFDZDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVUMsbUJBRlYsR0FFZ0JkLFVBQVUsR0FBR0MsT0FGN0I7QUFHSWMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVVGLEdBQXRCO0FBSEo7QUFBQSx1QkFJMkJHLEtB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFO0FBQUksZUFBUyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsRUFPRTtBQUFHLGVBQVMsRUFBQywwQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdFQVBGLENBdkJGLENBUEYsQ0FSRixDQURGO0FBc0RELEdBeERNLE1Bd0RBO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQTFGRDs7R0FBTUosSTs7S0FBQUEsSTtBQTRGU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL25hdlwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9jb21wb25lbnRzL2Vycm9yXCI7XG5cbmNvbnN0IGJhc2VSU1NVcmwgPSBcImh0dHBzOi8vYXBpLnJzczJqc29uLmNvbS92MS9hcGkuanNvbj9yc3NfdXJsPVwiO1xuY29uc3QgZmVlZFVybCA9IFwiaHR0cHM6Ly93d3cuZXNzZW50aWFsbHlzcG9ydHMuY29tL2ZlZWQvXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtmZWVkLCBzZXRGZWVkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcnRpY2xlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGJhc2VSU1NVcmwgKyBmZWVkVXJsO1xuICAgICAgICBjb25zb2xlLmxvZyhcInVybDogXCIgKyB1cmwpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmVlZCAwOiBcIiArIGRhdGEuZmVlZCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRGZWVkKGRhdGEuZmVlZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmVlZCAxOiBcIiArIGRhdGEuZmVlZCk7XG4gICAgICAgIHNldEFydGljbGVzKGRhdGEuaXRlbXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImZlZWQgMjogXCIgKyBkYXRhLmZlZWQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaEFydGljbGVzKCk7XG4gIH0sIFtdKVxuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH0gZWxzZSBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiA8RXJyb3IgLz47XG4gIH0gZWxzZSBpZiAoZmVlZCkge1xuICAgIGNvbnNvbGUubG9nKFwiZmVlZCAzOiBcIiArIGRhdGEuZmVlZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zYW5zXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8TmF2IGZlZWQ9e2ZlZWR9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtLTAgdy1mdWxsIHB0LTIwIGxlYWRpbmctdGlnaHQgdGV4dC01eGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICBMYXRlc3QgTmV3cyAmcmFycjtcbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgey8qIEFydGljbGVzICovfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwdC0yMCBweS1hdXRvIHBiLTggZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC01IHBiLTYgdy02NCB0ZXh0LWxlZnQgbm8tdW5kZXJsaW5lIHRleHQtZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBob3Zlcjpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmx1ZS01MDAgdGV4dC1sZyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uICZyYXJyO1xuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcHQtMyBweS0wIHBiLTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgTGVhcm4gbW9yZSBhYm91dCBOZXh0LmpzIGluIHRoZSBkb2N1bWVudGF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC01IHBiLTYgdy02NCB0ZXh0LWxlZnQgbm8tdW5kZXJsaW5lIHRleHQtZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBob3Zlcjpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmx1ZS01MDAgdGV4dC1sZyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICBOZXh0LmpzIExlYXJuICZyYXJyO1xuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcHQtMyBweS0wIHBiLTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgTGVhcm4gYWJvdXQgTmV4dC5qcyBieSBmb2xsb3dpbmcgYW4gaW50ZXJhY3RpdmUgdHV0b3JpYWwhXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC01IHBiLTYgdy02NCB0ZXh0LWxlZnQgbm8tdW5kZXJsaW5lIHRleHQtZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBob3Zlcjpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmx1ZS01MDAgdGV4dC1sZyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICBFeGFtcGxlcyAmcmFycjtcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHB0LTMgcHktMCBwYi0wIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgIEZpbmQgb3RoZXIgZXhhbXBsZSBib2lsZXJwbGF0ZXMgb24gdGhlIE5leHQuanMgR2l0SHViLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})