webpackHotUpdate_N_E("pages/index",{

/***/ "./components/nav.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.js\");\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/error */ \"./components/error.js\");\n/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/articles */ \"./components/articles.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/project/sandbox/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar baseRSSUrl = \"https://api.rss2json.com/v1/api.json?rss_url=\";\nvar feedUrl = \"https://www.essentiallysports.com/feed/\";\n\nvar Home = function Home() {\n  _s();\n\n  // if (isLoading) {\n  //   return <Loading />;\n  // } else if (isError) {\n  //   return <Error />;\n  // } else if (feed) {\n  //   console.log(\"feed 3: \" + data.feed);\n  //   return (\n  //     <div className=\"text-sans\">\n  //       <Head>\n  //         <title>Home</title>\n  //         <link rel=\"icon\" href=\"/favicon.ico\" />\n  //       </Head>\n  //       <Nav feed={feed} />\n  //       <div className=\"w-full text-gray-900\">\n  //         <h1 className=\"m-0 w-full pt-20 leading-tight text-5xl text-center font-bold\">\n  //           Latest News &rarr;\n  //         </h1>\n  //         {/* Articles */}\n  //         <div className=\"max-w-4xl mx-auto pt-20 py-auto pb-8 flex flex-row justify-around\">\n  //           <a\n  //             href=\"https://nextjs.org/docs\"\n  //             className=\"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\"\n  //           >\n  //             <h3 className=\"m-0 text-blue-500 text-lg font-bold\">\n  //               Documentation &rarr;\n  //             </h3>\n  //             <p className=\"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\">\n  //               Learn more about Next.js in the documentation.\n  //             </p>\n  //           </a>\n  //           <a\n  //             href=\"https://nextjs.org/learn\"\n  //             className=\"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\"\n  //           >\n  //             <h3 className=\"m-0 text-blue-500 text-lg font-bold\">\n  //               Next.js Learn &rarr;\n  //             </h3>\n  //             <p className=\"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\">\n  //               Learn about Next.js by following an interactive tutorial!\n  //             </p>\n  //           </a>\n  //           <a\n  //             href=\"https://github.com/zeit/next.js/tree/master/examples\"\n  //             className=\"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\"\n  //           >\n  //             <h3 className=\"m-0 text-blue-500 text-lg font-bold\">\n  //               Examples &rarr;\n  //             </h3>\n  //             <p className=\"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\">\n  //               Find other example boilerplates on the Next.js GitHub.\n  //             </p>\n  //           </a>\n  //         </div>\n  //       </div>\n  //     </div>\n  //   );\n  // } else {\n  //   return null;\n  // }\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      isLoading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      feed = _useState2[0],\n      setFeed = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      articles = _useState3[0],\n      setArticles = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isError = _useState4[0],\n      setError = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function fetchArticles() {\n      return _fetchArticles.apply(this, arguments);\n    }\n\n    function _fetchArticles() {\n      _fetchArticles = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var url, response, data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                url = baseRSSUrl + feedUrl;\n                _context.next = 4;\n                return fetch(url);\n\n              case 4:\n                response = _context.sent;\n                _context.next = 7;\n                return response.json();\n\n              case 7:\n                data = _context.sent;\n                setLoading(false);\n                setFeed(data.feed);\n                setArticles(data.items);\n                _context.next = 17;\n                break;\n\n              case 13:\n                _context.prev = 13;\n                _context.t0 = _context[\"catch\"](0);\n                setLoading(false);\n                setError(true);\n\n              case 17:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 13]]);\n      }));\n      return _fetchArticles.apply(this, arguments);\n    }\n\n    fetchArticles();\n  }, []);\n\n  if (isLoading) {\n    return __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 7\n      }\n    });\n  } else if (isError) {\n    return __jsx(_components_error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 7\n      }\n    });\n  } else if (feed != null) {\n    return __jsx(\"div\", {\n      className: \"text-sans\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 7\n      }\n    }, __jsx(_components_articles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      feed: feed,\n      articles: articles,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }\n    }));\n  } else {\n    return null;\n  }\n};\n\n_s(Home, \"UNEDKgnzYTglMI3ycpp9TvzNJIQ=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJiYXNlUlNTVXJsIiwiZmVlZFVybCIsIkhvbWUiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJmZWVkIiwic2V0RmVlZCIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJmZXRjaEFydGljbGVzIiwidXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsK0NBQW5CO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLHlDQUFoQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvRGlCLGtCQWlFZUMsc0RBQVEsQ0FBQyxJQUFELENBakV2QjtBQUFBLE1BaUVWQyxTQWpFVTtBQUFBLE1BaUVDQyxVQWpFRDs7QUFBQSxtQkFrRU9GLHNEQUFRLEVBbEVmO0FBQUEsTUFrRVZHLElBbEVVO0FBQUEsTUFrRUpDLE9BbEVJOztBQUFBLG1CQW1FZUosc0RBQVEsQ0FBQyxFQUFELENBbkV2QjtBQUFBLE1BbUVWSyxRQW5FVTtBQUFBLE1BbUVBQyxXQW5FQTs7QUFBQSxtQkFvRVdOLHNEQUFRLENBQUMsS0FBRCxDQXBFbkI7QUFBQSxNQW9FVk8sT0FwRVU7QUFBQSxNQW9FREMsUUFwRUM7O0FBc0VqQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsYUFERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3TUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVVQyxtQkFGVixHQUVnQmQsVUFBVSxHQUFHQyxPQUY3QjtBQUFBO0FBQUEsdUJBRzJCYyxLQUFLLENBQUNELEdBQUQsQ0FIaEM7O0FBQUE7QUFHVUUsd0JBSFY7QUFBQTtBQUFBLHVCQUl1QkEsUUFBUSxDQUFDQyxJQUFULEVBSnZCOztBQUFBO0FBSVVDLG9CQUpWO0FBS0liLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FFLHVCQUFPLENBQUNXLElBQUksQ0FBQ1osSUFBTixDQUFQO0FBQ0FHLDJCQUFXLENBQUNTLElBQUksQ0FBQ0MsS0FBTixDQUFYO0FBUEo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTSWQsMEJBQVUsQ0FBQyxLQUFELENBQVY7QUFDQU0sd0JBQVEsQ0FBQyxJQUFELENBQVI7O0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7O0FBY2RFLGlCQUFhO0FBQ2QsR0FmUSxFQWVOLEVBZk0sQ0FBVDs7QUFpQkEsTUFBSVQsU0FBSixFQUFlO0FBQ2IsV0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQUdELEdBSkQsTUFJTyxJQUFJTSxPQUFKLEVBQWE7QUFDbEIsV0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQUdELEdBSk0sTUFJQSxJQUFJSixJQUFJLElBQUksSUFBWixFQUFrQjtBQUN2QixXQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNERBQUQ7QUFBVSxVQUFJLEVBQUVBLElBQWhCO0FBQXNCLGNBQVEsRUFBRUUsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFLRCxHQU5NLE1BTUE7QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGLENBeEdEOztHQUFNTixJOztLQUFBQSxJO0FBMEdTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRpbmdcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vY29tcG9uZW50cy9lcnJvclwiO1xuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi9jb21wb25lbnRzL2FydGljbGVzXCI7XG5cbmNvbnN0IGJhc2VSU1NVcmwgPSBcImh0dHBzOi8vYXBpLnJzczJqc29uLmNvbS92MS9hcGkuanNvbj9yc3NfdXJsPVwiO1xuY29uc3QgZmVlZFVybCA9IFwiaHR0cHM6Ly93d3cuZXNzZW50aWFsbHlzcG9ydHMuY29tL2ZlZWQvXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIC8vIGlmIChpc0xvYWRpbmcpIHtcbiAgLy8gICByZXR1cm4gPExvYWRpbmcgLz47XG4gIC8vIH0gZWxzZSBpZiAoaXNFcnJvcikge1xuICAvLyAgIHJldHVybiA8RXJyb3IgLz47XG4gIC8vIH0gZWxzZSBpZiAoZmVlZCkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiZmVlZCAzOiBcIiArIGRhdGEuZmVlZCk7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zYW5zXCI+XG4gIC8vICAgICAgIDxIZWFkPlxuICAvLyAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgLy8gICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gIC8vICAgICAgIDwvSGVhZD5cblxuICAvLyAgICAgICA8TmF2IGZlZWQ9e2ZlZWR9IC8+XG5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1ncmF5LTkwMFwiPlxuICAvLyAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtLTAgdy1mdWxsIHB0LTIwIGxlYWRpbmctdGlnaHQgdGV4dC01eGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+XG4gIC8vICAgICAgICAgICBMYXRlc3QgTmV3cyAmcmFycjtcbiAgLy8gICAgICAgICA8L2gxPlxuXG4gIC8vICAgICAgICAgey8qIEFydGljbGVzICovfVxuXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwdC0yMCBweS1hdXRvIHBiLTggZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiPlxuICAvLyAgICAgICAgICAgPGFcbiAgLy8gICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC01IHBiLTYgdy02NCB0ZXh0LWxlZnQgbm8tdW5kZXJsaW5lIHRleHQtZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBob3Zlcjpib3JkZXItYmx1ZS01MDBcIlxuICAvLyAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmx1ZS01MDAgdGV4dC1sZyBmb250LWJvbGRcIj5cbiAgLy8gICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uICZyYXJyO1xuICAvLyAgICAgICAgICAgICA8L2gzPlxuICAvLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcHQtMyBweS0wIHBiLTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XG4gIC8vICAgICAgICAgICAgICAgTGVhcm4gbW9yZSBhYm91dCBOZXh0LmpzIGluIHRoZSBkb2N1bWVudGF0aW9uLlxuICAvLyAgICAgICAgICAgICA8L3A+XG4gIC8vICAgICAgICAgICA8L2E+XG4gIC8vICAgICAgICAgICA8YVxuICAvLyAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC01IHBiLTYgdy02NCB0ZXh0LWxlZnQgbm8tdW5kZXJsaW5lIHRleHQtZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBob3Zlcjpib3JkZXItYmx1ZS01MDBcIlxuICAvLyAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmx1ZS01MDAgdGV4dC1sZyBmb250LWJvbGRcIj5cbiAgLy8gICAgICAgICAgICAgICBOZXh0LmpzIExlYXJuICZyYXJyO1xuICAvLyAgICAgICAgICAgICA8L2gzPlxuICAvLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcHQtMyBweS0wIHBiLTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XG4gIC8vICAgICAgICAgICAgICAgTGVhcm4gYWJvdXQgTmV4dC5qcyBieSBmb2xsb3dpbmcgYW4gaW50ZXJhY3RpdmUgdHV0b3JpYWwhXG4gIC8vICAgICAgICAgICAgIDwvcD5cbiAgLy8gICAgICAgICAgIDwvYT5cbiAgLy8gICAgICAgICAgIDxhXG4gIC8vICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzXCJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC01IHBiLTYgdy02NCB0ZXh0LWxlZnQgbm8tdW5kZXJsaW5lIHRleHQtZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBob3Zlcjpib3JkZXItYmx1ZS01MDBcIlxuICAvLyAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmx1ZS01MDAgdGV4dC1sZyBmb250LWJvbGRcIj5cbiAgLy8gICAgICAgICAgICAgICBFeGFtcGxlcyAmcmFycjtcbiAgLy8gICAgICAgICAgICAgPC9oMz5cbiAgLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHB0LTMgcHktMCBwYi0wIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxuICAvLyAgICAgICAgICAgICAgIEZpbmQgb3RoZXIgZXhhbXBsZSBib2lsZXJwbGF0ZXMgb24gdGhlIE5leHQuanMgR2l0SHViLlxuICAvLyAgICAgICAgICAgICA8L3A+XG4gIC8vICAgICAgICAgICA8L2E+XG4gIC8vICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgKTtcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICByZXR1cm4gbnVsbDtcbiAgLy8gfVxuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtmZWVkLCBzZXRGZWVkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcnRpY2xlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGJhc2VSU1NVcmwgKyBmZWVkVXJsO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRGZWVkKGRhdGEuZmVlZCk7XG4gICAgICAgIHNldEFydGljbGVzKGRhdGEuaXRlbXMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaEFydGljbGVzKCk7XG4gIH0sIFtdKVxuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExvYWRpbmcgLz5cbiAgICApO1xuICB9IGVsc2UgaWYgKGlzRXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yIC8+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChmZWVkICE9IG51bGwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNhbnNcIj5cbiAgICAgICAgPEFydGljbGVzIGZlZWQ9e2ZlZWR9IGFydGljbGVzPXthcnRpY2xlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})