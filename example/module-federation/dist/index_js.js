/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmodule_federation"] = self["webpackChunkmodule_federation"] || []).push([["index_js"],{

/***/ "./app.jsx":
/*!*****************!*\
  !*** ./app.jsx ***!
  \*****************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ App\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?bc32\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar RemoteButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"webpack_container_remote_mainApp_Button\").then(__webpack_require__.t.bind(__webpack_require__, /*! mainApp/Button */ \"webpack/container/remote/mainApp/Button\", 23));\n});\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {\n    fallback: \"Loading Button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RemoteButton, null)));\n}\n\n//# sourceURL=webpack://module-federation/./app.jsx?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! export bootstrap [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export unmount [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bootstrap\": () => /* binding */ bootstrap,\n/* harmony export */   \"mount\": () => /* binding */ mount,\n/* harmony export */   \"unmount\": () => /* binding */ unmount\n/* harmony export */ });\n/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.jsx */ \"./app.jsx\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?bc32\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nfunction bootstrap() {\n  return _bootstrap.apply(this, arguments);\n}\n\nfunction _bootstrap() {\n  _bootstrap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            __webpack_require__.p = '//localhost:8000/module-federation/dist/'; // eslint-disable-line\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _bootstrap.apply(this, arguments);\n}\n\nfunction mount(_x) {\n  return _mount.apply(this, arguments);\n}\n\nfunction _mount() {\n  _mount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(props) {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_app_jsx__WEBPACK_IMPORTED_MODULE_0__.default, null), props.container.querySelector(\"#\".concat(props.rootID)));\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _mount.apply(this, arguments);\n}\n\nfunction unmount(_x2) {\n  return _unmount.apply(this, arguments);\n}\n\nfunction _unmount() {\n  _unmount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(props) {\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            react_dom__WEBPACK_IMPORTED_MODULE_1___default().unmountComponentAtNode(props.container.querySelector(\"#\".concat(props.rootID)));\n\n          case 1:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _unmount.apply(this, arguments);\n}\n\n//# sourceURL=webpack://module-federation/./index.js?");

/***/ })

}]);