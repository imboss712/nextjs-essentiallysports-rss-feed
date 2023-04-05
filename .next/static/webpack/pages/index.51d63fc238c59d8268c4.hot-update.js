webpackHotUpdate_N_E("pages/index",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/project/sandbox/components/nav.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Nav = function Nav(props) {\n  var _props$feed = props.feed,\n      title = _props$feed.title,\n      link = _props$feed.link,\n      description = _props$feed.description,\n      image = _props$feed.image;\n  return __jsx(\"nav\", {\n    className: \"text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"flex justify-between px-4 my-4 py-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"li\", {\n    className: \"flex px-2 py-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"text-blue-500\\tno-underline text-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, \"Home\"))), __jsx(\"li\", {\n    className: \"flex px-2 py-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    target: \"_blank\",\n    href: link,\n    className: \"text-blue-500\\tno-underline text-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, props.feed.description))), __jsx(\"li\", {\n    className: \"flex px-2 py-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    target: \"_blank\",\n    href: \"https://github.com/imboss712\",\n    className: \"text-blue-500\\tno-underline text-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, \"Code\"))));\n};\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanM/MzFiMiJdLCJuYW1lcyI6WyJOYXYiLCJwcm9wcyIsImZlZWQiLCJ0aXRsZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBLG9CQUN1QkEsS0FBSyxDQUFDQyxJQUQ3QjtBQUFBLE1BQ2JDLEtBRGEsZUFDYkEsS0FEYTtBQUFBLE1BQ05DLElBRE0sZUFDTkEsSUFETTtBQUFBLE1BQ0FDLFdBREEsZUFDQUEsV0FEQTtBQUFBLE1BQ2FDLEtBRGIsZUFDYUEsS0FEYjtBQUVyQixTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxxQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixDQURGLEVBT0U7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBbUIsUUFBSSxFQUFFRixJQUF6QjtBQUErQixhQUFTLEVBQUMscUNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlELEtBQUosQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUYsS0FBSyxDQUFDQyxJQUFOLENBQVdHLFdBQWYsQ0FGRixDQURGLENBUEYsRUFjRTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxVQUFNLEVBQUMsUUFBVjtBQUFtQixRQUFJLEVBQUMsOEJBQXhCO0FBQXVELGFBQVMsRUFBQyxxQ0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBZEYsQ0FERixDQURGO0FBc0JELENBeEJEOztLQUFNTCxHO0FBMEJTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBOYXYgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgbGluaywgZGVzY3JpcHRpb24sIGltYWdlIH0gPSBwcm9wcy5mZWVkO1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC00IG15LTQgcHktMVwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBweC0yIHB5LTFcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFx0bm8tdW5kZXJsaW5lIHRleHQtc21cIj5Ib21lPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cblxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBweC0yIHB5LTFcIj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtsaW5rfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXHRuby11bmRlcmxpbmUgdGV4dC1zbVwiPlxuICAgICAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwPntwcm9wcy5mZWVkLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggcHgtMiBweS0xXCI+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pbWJvc3M3MTJcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXHRuby11bmRlcmxpbmUgdGV4dC1zbVwiPkNvZGU8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ })

})