webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav */ \"./components/nav.js\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.js\");\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/error */ \"./components/error.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/project/sandbox/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar baseRSSUrl = \"https://api.rss2json.com/v1/api.json?rss_url=\";\nvar feedUrl = \"https://www.essentiallysports.com/feed/\";\n\nvar Home = function Home() {\n  _s();\n\n  // const [isLoading, setLoading] = useState(true);\n  // const [feed, setFeed] = useState();\n  // const [articles, setArticles] = useState([]);\n  // const [isError, setError] = useState(false);\n  // useEffect(() => {\n  //   async function fetchArticles() {\n  //     try {\n  //       const url = baseRSSUrl + feedUrl;\n  //       console.log(\"url: \" + url);\n  //       const response = await fetch(url);\n  //       const data = await response.json();\n  //       console.log(\"feed 0: \" + data.feed);\n  //       setLoading(false);\n  //       setFeed(data.feed);\n  //       console.log(\"feed 1: \" + data.feed);\n  //       setArticles(data.items);\n  //       console.log(\"feed 2: \" + data.feed);\n  //     } catch (error) {\n  //       setLoading(false);\n  //       setError(true);\n  //     }\n  //   }\n  //   fetchArticles();\n  // }, [])\n  // if (isLoading) {\n  //   return <Loading />;\n  // } else if (isError) {\n  //   return <Error />;\n  // } else if (feed) {\n  //   console.log(\"feed 3: \" + data.feed);\n  //   return (\n  //     <div className=\"text-sans\">\n  //       <Head>\n  //         <title>Home</title>\n  //         <link rel=\"icon\" href=\"/favicon.ico\" />\n  //       </Head>\n  //       <Nav feed={feed} />\n  //       <div className=\"w-full text-gray-900\">\n  //         <h1 className=\"m-0 w-full pt-20 leading-tight text-5xl text-center font-bold\">\n  //           Latest News &rarr;\n  //         </h1>\n  //         {/* Articles */}\n  //         <div className=\"max-w-4xl mx-auto pt-20 py-auto pb-8 flex flex-row justify-around\">\n  //           <a\n  //             href=\"https://nextjs.org/docs\"\n  //             className=\"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\"\n  //           >\n  //             <h3 className=\"m-0 text-blue-500 text-lg font-bold\">\n  //               Documentation &rarr;\n  //             </h3>\n  //             <p className=\"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\">\n  //               Learn more about Next.js in the documentation.\n  //             </p>\n  //           </a>\n  //           <a\n  //             href=\"https://nextjs.org/learn\"\n  //             className=\"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\"\n  //           >\n  //             <h3 className=\"m-0 text-blue-500 text-lg font-bold\">\n  //               Next.js Learn &rarr;\n  //             </h3>\n  //             <p className=\"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\">\n  //               Learn about Next.js by following an interactive tutorial!\n  //             </p>\n  //           </a>\n  //           <a\n  //             href=\"https://github.com/zeit/next.js/tree/master/examples\"\n  //             className=\"pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500\"\n  //           >\n  //             <h3 className=\"m-0 text-blue-500 text-lg font-bold\">\n  //               Examples &rarr;\n  //             </h3>\n  //             <p className=\"m-0 pt-3 py-0 pb-0 text-sm text-gray-900\">\n  //               Find other example boilerplates on the Next.js GitHub.\n  //             </p>\n  //           </a>\n  //         </div>\n  //       </div>\n  //     </div>\n  //   );\n  // } else {\n  //   return null;\n  // }\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      isLoading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      feed = _useState2[0],\n      setFeed = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      articles = _useState3[0],\n      setArticles = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isError = _useState4[0],\n      setError = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function fetchArticles() {\n      return _fetchArticles.apply(this, arguments);\n    }\n\n    function _fetchArticles() {\n      _fetchArticles = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var url, response, data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                url = baseRSSUrl + feedUrl;\n                _context.next = 4;\n                return fetch(url);\n\n              case 4:\n                response = _context.sent;\n                _context.next = 7;\n                return response.json();\n\n              case 7:\n                data = _context.sent;\n                setLoading(false);\n                setFeed(data.feed);\n                setArticles(data.items);\n                _context.next = 17;\n                break;\n\n              case 13:\n                _context.prev = 13;\n                _context.t0 = _context[\"catch\"](0);\n                setLoading(false);\n                setError(true);\n\n              case 17:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 13]]);\n      }));\n      return _fetchArticles.apply(this, arguments);\n    }\n\n    fetchArticles();\n  }, []);\n\n  if (isLoading) {\n    return __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 7\n      }\n    });\n  } else if (isError) {\n    return __jsx(_components_error__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 7\n      }\n    });\n  } else if (feed != null) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }\n    }, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 14\n      }\n    }, \"Latest News:\")), articles.map(function (article, index) {\n      return __jsx(Article, {\n        key: index,\n        article: article,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 11\n        }\n      });\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      href: \"https://www.essentiallysports.com/\",\n      target: \"_blank\",\n      rel: \"noopener noreferrer\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 13\n      }\n    }, \"Read more article on essentiallysports.com\"))));\n  } else {\n    return null;\n  }\n};\n\n_s(Home, \"UNEDKgnzYTglMI3ycpp9TvzNJIQ=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJiYXNlUlNTVXJsIiwiZmVlZFVybCIsIkhvbWUiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJmZWVkIiwic2V0RmVlZCIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJmZXRjaEFydGljbGVzIiwidXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaXRlbXMiLCJtYXAiLCJhcnRpY2xlIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLCtDQUFuQjtBQUNBLElBQU1DLE9BQU8sR0FBRyx5Q0FBaEI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekZpQixrQkEyRmVDLHNEQUFRLENBQUMsSUFBRCxDQTNGdkI7QUFBQSxNQTJGVkMsU0EzRlU7QUFBQSxNQTJGQ0MsVUEzRkQ7O0FBQUEsbUJBNEZPRixzREFBUSxFQTVGZjtBQUFBLE1BNEZWRyxJQTVGVTtBQUFBLE1BNEZKQyxPQTVGSTs7QUFBQSxtQkE2RmVKLHNEQUFRLENBQUMsRUFBRCxDQTdGdkI7QUFBQSxNQTZGVkssUUE3RlU7QUFBQSxNQTZGQUMsV0E3RkE7O0FBQUEsbUJBOEZXTixzREFBUSxDQUFDLEtBQUQsQ0E5Rm5CO0FBQUEsTUE4RlZPLE9BOUZVO0FBQUEsTUE4RkRDLFFBOUZDOztBQWdHakJDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLGFBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVUMsbUJBRlYsR0FFZ0JkLFVBQVUsR0FBR0MsT0FGN0I7QUFBQTtBQUFBLHVCQUcyQmMsS0FBSyxDQUFDRCxHQUFELENBSGhDOztBQUFBO0FBR1VFLHdCQUhWO0FBQUE7QUFBQSx1QkFJdUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUp2Qjs7QUFBQTtBQUlVQyxvQkFKVjtBQUtJYiwwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSx1QkFBTyxDQUFDVyxJQUFJLENBQUNaLElBQU4sQ0FBUDtBQUNBRywyQkFBVyxDQUFDUyxJQUFJLENBQUNDLEtBQU4sQ0FBWDtBQVBKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU0lkLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FNLHdCQUFRLENBQUMsSUFBRCxDQUFSOztBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQWNkRSxpQkFBYTtBQUNkLEdBZlEsRUFlTixFQWZNLENBQVQ7O0FBaUJBLE1BQUlULFNBQUosRUFBZTtBQUNiLFdBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFHRCxHQUpELE1BSU8sSUFBSU0sT0FBSixFQUFhO0FBQ2xCLFdBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFHRCxHQUpNLE1BSUEsSUFBSUosSUFBSSxJQUFJLElBQVosRUFBa0I7QUFDdkIsV0FDRSxtRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBTCxDQUZGLEVBSUdFLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLGFBQ1osTUFBQyxPQUFEO0FBQVMsV0FBRyxFQUFFQSxLQUFkO0FBQXFCLGVBQU8sRUFBRUQsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURZO0FBQUEsS0FBYixDQUpILEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLG9DQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFHRSxTQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBTEYsQ0FERixDQVJGLENBREY7QUFvQkQsR0FyQk0sTUFxQkE7QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGLENBakpEOztHQUFNbkIsSTs7S0FBQUEsSTtBQW1KU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL25hdlwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9jb21wb25lbnRzL2Vycm9yXCI7XG5cbmNvbnN0IGJhc2VSU1NVcmwgPSBcImh0dHBzOi8vYXBpLnJzczJqc29uLmNvbS92MS9hcGkuanNvbj9yc3NfdXJsPVwiO1xuY29uc3QgZmVlZFVybCA9IFwiaHR0cHM6Ly93d3cuZXNzZW50aWFsbHlzcG9ydHMuY29tL2ZlZWQvXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIC8vIGNvbnN0IFtmZWVkLCBzZXRGZWVkXSA9IHVzZVN0YXRlKCk7XG4gIC8vIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zdCBbaXNFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcnRpY2xlcygpIHtcbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGNvbnN0IHVybCA9IGJhc2VSU1NVcmwgKyBmZWVkVXJsO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcInVybDogXCIgKyB1cmwpO1xuICAvLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiZmVlZCAwOiBcIiArIGRhdGEuZmVlZCk7XG4gIC8vICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAvLyAgICAgICBzZXRGZWVkKGRhdGEuZmVlZCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiZmVlZCAxOiBcIiArIGRhdGEuZmVlZCk7XG4gIC8vICAgICAgIHNldEFydGljbGVzKGRhdGEuaXRlbXMpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcImZlZWQgMjogXCIgKyBkYXRhLmZlZWQpO1xuICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICAgIHNldEVycm9yKHRydWUpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICBmZXRjaEFydGljbGVzKCk7XG4gIC8vIH0sIFtdKVxuXG4gIC8vIGlmIChpc0xvYWRpbmcpIHtcbiAgLy8gICByZXR1cm4gPExvYWRpbmcgLz47XG4gIC8vIH0gZWxzZSBpZiAoaXNFcnJvcikge1xuICAvLyAgIHJldHVybiA8RXJyb3IgLz47XG4gIC8vIH0gZWxzZSBpZiAoZmVlZCkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiZmVlZCAzOiBcIiArIGRhdGEuZmVlZCk7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zYW5zXCI+XG4gIC8vICAgICAgIDxIZWFkPlxuICAvLyAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgLy8gICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gIC8vICAgICAgIDwvSGVhZD5cblxuICAvLyAgICAgICA8TmF2IGZlZWQ9e2ZlZWR9IC8+XG5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1ncmF5LTkwMFwiPlxuICAvLyAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtLTAgdy1mdWxsIHB0LTIwIGxlYWRpbmctdGlnaHQgdGV4dC01eGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+XG4gIC8vICAgICAgICAgICBMYXRlc3QgTmV3cyAmcmFycjtcbiAgLy8gICAgICAgICA8L2gxPlxuXG4gIC8vICAgICAgICAgey8qIEFydGljbGVzICovfVxuXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwdC0yMCBweS1hdXRvIHBiLTggZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiPlxuICAvLyAgICAgICAgICAgPGFcbiAgLy8gICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC01IHBiLTYgdy02NCB0ZXh0LWxlZnQgbm8tdW5kZXJsaW5lIHRleHQtZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBob3Zlcjpib3JkZXItYmx1ZS01MDBcIlxuICAvLyAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmx1ZS01MDAgdGV4dC1sZyBmb250LWJvbGRcIj5cbiAgLy8gICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uICZyYXJyO1xuICAvLyAgICAgICAgICAgICA8L2gzPlxuICAvLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcHQtMyBweS0wIHBiLTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XG4gIC8vICAgICAgICAgICAgICAgTGVhcm4gbW9yZSBhYm91dCBOZXh0LmpzIGluIHRoZSBkb2N1bWVudGF0aW9uLlxuICAvLyAgICAgICAgICAgICA8L3A+XG4gIC8vICAgICAgICAgICA8L2E+XG4gIC8vICAgICAgICAgICA8YVxuICAvLyAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC01IHBiLTYgdy02NCB0ZXh0LWxlZnQgbm8tdW5kZXJsaW5lIHRleHQtZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBob3Zlcjpib3JkZXItYmx1ZS01MDBcIlxuICAvLyAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmx1ZS01MDAgdGV4dC1sZyBmb250LWJvbGRcIj5cbiAgLy8gICAgICAgICAgICAgICBOZXh0LmpzIExlYXJuICZyYXJyO1xuICAvLyAgICAgICAgICAgICA8L2gzPlxuICAvLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcHQtMyBweS0wIHBiLTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XG4gIC8vICAgICAgICAgICAgICAgTGVhcm4gYWJvdXQgTmV4dC5qcyBieSBmb2xsb3dpbmcgYW4gaW50ZXJhY3RpdmUgdHV0b3JpYWwhXG4gIC8vICAgICAgICAgICAgIDwvcD5cbiAgLy8gICAgICAgICAgIDwvYT5cbiAgLy8gICAgICAgICAgIDxhXG4gIC8vICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzXCJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC01IHBiLTYgdy02NCB0ZXh0LWxlZnQgbm8tdW5kZXJsaW5lIHRleHQtZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBob3Zlcjpib3JkZXItYmx1ZS01MDBcIlxuICAvLyAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHRleHQtYmx1ZS01MDAgdGV4dC1sZyBmb250LWJvbGRcIj5cbiAgLy8gICAgICAgICAgICAgICBFeGFtcGxlcyAmcmFycjtcbiAgLy8gICAgICAgICAgICAgPC9oMz5cbiAgLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHB0LTMgcHktMCBwYi0wIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxuICAvLyAgICAgICAgICAgICAgIEZpbmQgb3RoZXIgZXhhbXBsZSBib2lsZXJwbGF0ZXMgb24gdGhlIE5leHQuanMgR2l0SHViLlxuICAvLyAgICAgICAgICAgICA8L3A+XG4gIC8vICAgICAgICAgICA8L2E+XG4gIC8vICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgKTtcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICByZXR1cm4gbnVsbDtcbiAgLy8gfVxuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtmZWVkLCBzZXRGZWVkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcnRpY2xlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGJhc2VSU1NVcmwgKyBmZWVkVXJsO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIHNldEZlZWQoZGF0YS5mZWVkKVxuICAgICAgICBzZXRBcnRpY2xlcyhkYXRhLml0ZW1zKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hBcnRpY2xlcygpO1xuICB9LCBbXSlcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMb2FkaW5nIC8+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChpc0Vycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFcnJvciAvPlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZmVlZCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG5cbiAgICAgICAgPGRpdj48aDI+TGF0ZXN0IE5ld3M6PC9oMj48L2Rpdj5cblxuICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxBcnRpY2xlIGtleT17aW5kZXh9IGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgICkpfVxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5lc3NlbnRpYWxseXNwb3J0cy5jb20vXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5SZWFkIG1vcmUgYXJ0aWNsZSBvbiBlc3NlbnRpYWxseXNwb3J0cy5jb208L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})