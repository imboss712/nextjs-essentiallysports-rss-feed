webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.js\");\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/error */ \"./components/error.js\");\n/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/articles */ \"./components/articles.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/project/sandbox/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar baseRSSUrl = \"https://api.rss2json.com/v1/api.json?rss_url=\";\nvar feedUrl = \"https://www.essentiallysports.com/feed/\";\n\nvar Home = function Home() {\n  _s();\n\n  // if (isLoading) {\n  //   return <Loading />;\n  // } else if (isError) {\n  //   return <Error />;\n  // } else if (feed) {\n  //   console.log(\"feed 3: \" + data.feed);\n  //   return (\n  //     <div className=\"text-sans\">\n  //       <Head>\n  //         <title>Home</title>\n  //         <link rel=\"icon\" href=\"/favicon.ico\" />\n  //       </Head>\n  //       <Nav feed={feed} />\n  //       <div className=\"w-full text-gray-900\">\n  //         <h1 className=\"m-0 w-full pt-20 leading-tight text-5xl text-center font-bold\">\n  //           Latest News &rarr;\n  //         </h1>\n  //         {/* Articles */}\n  //         <div className=\"max-w-4xl mx-auto pt-20 py-auto pb-8 flex flex-row justify-around\">\n  //           \n  //           <a\n  //             href=\"https://nextjs.org/learn\"\n  //             className=\"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\"\n  //           >\n  //             <h3 className=\"m-0 text-blue-500 text-lg font-bold\">\n  //               Next.js Learn &rarr;\n  //             </h3>\n  //             <p className=\"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\">\n  //               Learn about Next.js by following an interactive tutorial!\n  //             </p>\n  //           </a>\n  //           <a\n  //             href=\"https://github.com/zeit/next.js/tree/master/examples\"\n  //             className=\"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\"\n  //           >\n  //             <h3 className=\"m-0 text-blue-500 text-lg font-bold\">\n  //               Examples &rarr;\n  //             </h3>\n  //             <p className=\"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\">\n  //               Find other example boilerplates on the Next.js GitHub.\n  //             </p>\n  //           </a>\n  //         </div>\n  //       </div>\n  //     </div>\n  //   );\n  // } else {\n  //   return null;\n  // }\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      isLoading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      feed = _useState2[0],\n      setFeed = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      articles = _useState3[0],\n      setArticles = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isError = _useState4[0],\n      setError = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function fetchArticles() {\n      return _fetchArticles.apply(this, arguments);\n    }\n\n    function _fetchArticles() {\n      _fetchArticles = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var url, response, data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                url = baseRSSUrl + feedUrl;\n                _context.next = 4;\n                return fetch(url);\n\n              case 4:\n                response = _context.sent;\n                _context.next = 7;\n                return response.json();\n\n              case 7:\n                data = _context.sent;\n                setLoading(false);\n                setFeed(data.feed);\n                setArticles(data.items);\n                _context.next = 17;\n                break;\n\n              case 13:\n                _context.prev = 13;\n                _context.t0 = _context[\"catch\"](0);\n                setLoading(false);\n                setError(true);\n\n              case 17:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 13]]);\n      }));\n      return _fetchArticles.apply(this, arguments);\n    }\n\n    fetchArticles();\n  }, []);\n\n  if (isLoading) {\n    return __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 7\n      }\n    });\n  } else if (isError) {\n    return __jsx(_components_error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 7\n      }\n    });\n  } else if (feed != null) {\n    return __jsx(_components_articles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      feed: feed,\n      articles: articles,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 7\n      }\n    });\n  } else {\n    return null;\n  }\n};\n\n_s(Home, \"UNEDKgnzYTglMI3ycpp9TvzNJIQ=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJiYXNlUlNTVXJsIiwiZmVlZFVybCIsIkhvbWUiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJmZWVkIiwic2V0RmVlZCIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJmZXRjaEFydGljbGVzIiwidXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsK0NBQW5CO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLHlDQUFoQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckRpQixrQkF1RGVDLHNEQUFRLENBQUMsSUFBRCxDQXZEdkI7QUFBQSxNQXVEVkMsU0F2RFU7QUFBQSxNQXVEQ0MsVUF2REQ7O0FBQUEsbUJBd0RPRixzREFBUSxFQXhEZjtBQUFBLE1Bd0RWRyxJQXhEVTtBQUFBLE1Bd0RKQyxPQXhESTs7QUFBQSxtQkF5RGVKLHNEQUFRLENBQUMsRUFBRCxDQXpEdkI7QUFBQSxNQXlEVkssUUF6RFU7QUFBQSxNQXlEQUMsV0F6REE7O0FBQUEsbUJBMERXTixzREFBUSxDQUFDLEtBQUQsQ0ExRG5CO0FBQUEsTUEwRFZPLE9BMURVO0FBQUEsTUEwRERDLFFBMURDOztBQTREakJDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLGFBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVUMsbUJBRlYsR0FFZ0JkLFVBQVUsR0FBR0MsT0FGN0I7QUFBQTtBQUFBLHVCQUcyQmMsS0FBSyxDQUFDRCxHQUFELENBSGhDOztBQUFBO0FBR1VFLHdCQUhWO0FBQUE7QUFBQSx1QkFJdUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUp2Qjs7QUFBQTtBQUlVQyxvQkFKVjtBQUtJYiwwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSx1QkFBTyxDQUFDVyxJQUFJLENBQUNaLElBQU4sQ0FBUDtBQUNBRywyQkFBVyxDQUFDUyxJQUFJLENBQUNDLEtBQU4sQ0FBWDtBQVBKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU0lkLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FNLHdCQUFRLENBQUMsSUFBRCxDQUFSOztBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQWNkRSxpQkFBYTtBQUNkLEdBZlEsRUFlTixFQWZNLENBQVQ7O0FBaUJBLE1BQUlULFNBQUosRUFBZTtBQUNiLFdBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFHRCxHQUpELE1BSU8sSUFBSU0sT0FBSixFQUFhO0FBQ2xCLFdBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFHRCxHQUpNLE1BSUEsSUFBSUosSUFBSSxJQUFJLElBQVosRUFBa0I7QUFDdkIsV0FDRSxNQUFDLDREQUFEO0FBQVUsVUFBSSxFQUFFQSxJQUFoQjtBQUFzQixjQUFRLEVBQUVFLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQUdELEdBSk0sTUFJQTtBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0E1RkQ7O0dBQU1OLEk7O0tBQUFBLEk7QUE4RlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9jb21wb25lbnRzL2Vycm9yXCI7XG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXJ0aWNsZXNcIjtcblxuY29uc3QgYmFzZVJTU1VybCA9IFwiaHR0cHM6Ly9hcGkucnNzMmpzb24uY29tL3YxL2FwaS5qc29uP3Jzc191cmw9XCI7XG5jb25zdCBmZWVkVXJsID0gXCJodHRwczovL3d3dy5lc3NlbnRpYWxseXNwb3J0cy5jb20vZmVlZC9cIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgLy8gaWYgKGlzTG9hZGluZykge1xuICAvLyAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgLy8gfSBlbHNlIGlmIChpc0Vycm9yKSB7XG4gIC8vICAgcmV0dXJuIDxFcnJvciAvPjtcbiAgLy8gfSBlbHNlIGlmIChmZWVkKSB7XG4gIC8vICAgY29uc29sZS5sb2coXCJmZWVkIDM6IFwiICsgZGF0YS5mZWVkKTtcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNhbnNcIj5cbiAgLy8gICAgICAgPEhlYWQ+XG4gIC8vICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAvLyAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgLy8gICAgICAgPC9IZWFkPlxuXG4gIC8vICAgICAgIDxOYXYgZmVlZD17ZmVlZH0gLz5cblxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWdyYXktOTAwXCI+XG4gIC8vICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm0tMCB3LWZ1bGwgcHQtMjAgbGVhZGluZy10aWdodCB0ZXh0LTV4bCB0ZXh0LWNlbnRlciBmb250LWJvbGRcIj5cbiAgLy8gICAgICAgICAgIExhdGVzdCBOZXdzICZyYXJyO1xuICAvLyAgICAgICAgIDwvaDE+XG5cbiAgLy8gICAgICAgICB7LyogQXJ0aWNsZXMgKi99XG5cbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHB0LTIwIHB5LWF1dG8gcGItOCBmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kXCI+XG4gIC8vICAgICAgICAgICBcbiAgLy8gICAgICAgICAgIDxhXG4gIC8vICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIlxuICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC00IHB4LTUgcGItNiB3LTY0IHRleHQtbGVmdCBuby11bmRlcmxpbmUgdGV4dC1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMFwiXG4gIC8vICAgICAgICAgICA+XG4gIC8vICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtLTAgdGV4dC1ibHVlLTUwMCB0ZXh0LWxnIGZvbnQtYm9sZFwiPlxuICAvLyAgICAgICAgICAgICAgIE5leHQuanMgTGVhcm4gJnJhcnI7XG4gIC8vICAgICAgICAgICAgIDwvaDM+XG4gIC8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwdC0zIHB5LTAgcGItMCB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cbiAgLy8gICAgICAgICAgICAgICBMZWFybiBhYm91dCBOZXh0LmpzIGJ5IGZvbGxvd2luZyBhbiBpbnRlcmFjdGl2ZSB0dXRvcmlhbCFcbiAgLy8gICAgICAgICAgICAgPC9wPlxuICAvLyAgICAgICAgICAgPC9hPlxuICAvLyAgICAgICAgICAgPGFcbiAgLy8gICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXNcIlxuICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC00IHB4LTUgcGItNiB3LTY0IHRleHQtbGVmdCBuby11bmRlcmxpbmUgdGV4dC1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMFwiXG4gIC8vICAgICAgICAgICA+XG4gIC8vICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtLTAgdGV4dC1ibHVlLTUwMCB0ZXh0LWxnIGZvbnQtYm9sZFwiPlxuICAvLyAgICAgICAgICAgICAgIEV4YW1wbGVzICZyYXJyO1xuICAvLyAgICAgICAgICAgICA8L2gzPlxuICAvLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcHQtMyBweS0wIHBiLTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XG4gIC8vICAgICAgICAgICAgICAgRmluZCBvdGhlciBleGFtcGxlIGJvaWxlcnBsYXRlcyBvbiB0aGUgTmV4dC5qcyBHaXRIdWIuXG4gIC8vICAgICAgICAgICAgIDwvcD5cbiAgLy8gICAgICAgICAgIDwvYT5cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vICAgICA8L2Rpdj5cbiAgLy8gICApO1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIHJldHVybiBudWxsO1xuICAvLyB9XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2ZlZWQsIHNldEZlZWRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEFydGljbGVzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXJsID0gYmFzZVJTU1VybCArIGZlZWRVcmw7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldEZlZWQoZGF0YS5mZWVkKTtcbiAgICAgICAgc2V0QXJ0aWNsZXMoZGF0YS5pdGVtcyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoQXJ0aWNsZXMoKTtcbiAgfSwgW10pXG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8TG9hZGluZyAvPlxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3IgLz5cbiAgICApO1xuICB9IGVsc2UgaWYgKGZlZWQgIT0gbnVsbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXJ0aWNsZXMgZmVlZD17ZmVlZH0gYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})