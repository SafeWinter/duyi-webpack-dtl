/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/event.js */ \"./src/pages/event.js\");\n\r\n\r\nconsole.log(\"index module\");\r\nObject(_pages_event_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(500); // 800ms by default\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/event.js":
/*!****************************!*\
  !*** ./src/pages/event.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return checkPrime; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util/index.js\");\n/* harmony import */ var _printNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printNumber.js */ \"./src/pages/printNumber.js\");\n\r\n\r\n\r\nfunction checkPrime(interval = 800) {\r\n  const checker = new _util__WEBPACK_IMPORTED_MODULE_0__[\"NumberChecker\"](interval);\r\n  checker.performTask = _printNumber_js__WEBPACK_IMPORTED_MODULE_1__[\"draw\"];\r\n\r\n  let activated = false;\r\n  window.onclick = function() {\r\n    activated = !activated;\r\n    if(activated) {\r\n      checker.start();\r\n    } else {\r\n      checker.stop();\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/pages/event.js?");

/***/ }),

/***/ "./src/pages/printNumber.js":
/*!**********************************!*\
  !*** ./src/pages/printNumber.js ***!
  \**********************************/
/*! exports provided: draw, drawPrime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPrime\", function() { return drawPrime; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util/index.js\");\n\r\n\r\nconst DOM = {\r\n  pool: document.querySelector('.pool'),\r\n  center: document.querySelector('.n'),\r\n  current: document.querySelector('.current')\r\n};\r\n\r\nfunction draw(n, checker = _util__WEBPACK_IMPORTED_MODULE_0__[\"isPrime\"]) {\r\n  const div = document.createElement('div');\r\n  if(checker(n)) {\r\n    div.classList.add('prime');\r\n    \r\n    const color = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"randColor\"])();\r\n    div.style.color = color;\r\n    drawPrime(n, color);\r\n  }\r\n  div.innerHTML = `${n}`;\r\n  DOM.pool.appendChild(div);\r\n\r\n  DOM.center.innerHTML = `${n}`;\r\n  DOM.center.classList.toggle('hidden', checker(n));\r\n}\r\n\r\nfunction drawPrime(n, color) {\r\n  // target: <span class=\"n prime\">20</span>\r\n  const span = document.createElement('span');\r\n  span.classList.add('n', 'prime');\r\n  span.style.color = color;\r\n  span.innerHTML = n;\r\n  DOM.current.appendChild(span);\r\n\r\n  span.clientHeight;  // force render\r\n  \r\n  const rx = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"randIndex\"])(150, -350), \r\n    ry = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"randIndex\"])(150, -350);\r\n  span.style.transform = `translate(${rx}px, ${ry}px)`;\r\n  span.style.opacity = '0';\r\n\r\n  // 淡出后删除元素\r\n  span.ontransitionend = ev => ev.target.remove();\r\n}\n\n//# sourceURL=webpack:///./src/pages/printNumber.js?");

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: isPrime, randIndex, randColor, NumberChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isPrime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime.js */ \"./src/util/isPrime.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPrime\", function() { return _isPrime_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _randColor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randColor.js */ \"./src/util/randColor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"randIndex\", function() { return _randColor_js__WEBPACK_IMPORTED_MODULE_1__[\"randIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"randColor\", function() { return _randColor_js__WEBPACK_IMPORTED_MODULE_1__[\"randColor\"]; });\n\n/* harmony import */ var _number_checker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-checker.js */ \"./src/util/number-checker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NumberChecker\", function() { return _number_checker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/util/index.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((n) => {\r\n  if (n === 2) return true;\r\n  \r\n  if(n < 2 || n % 2 === 0) {\r\n    return false;\r\n  }\r\n  \r\n  for(let i = 3, len = Math.sqrt(n); i <= len; i+=2) {\r\n    if(n % i === 0) {\r\n      return false;\r\n    }\r\n  }\r\n  return true;\r\n});\n\n//# sourceURL=webpack:///./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/number-checker.js":
/*!************************************!*\
  !*** ./src/util/number-checker.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumberChecker; });\nclass NumberChecker {\r\n  constructor(interval = 500, counter = 1) {\r\n    this.interval = interval;\r\n    this.timer = null;\r\n    this.counter = counter;\r\n  }\r\n\r\n  start() {\r\n    if(this.timer) {\r\n      return;\r\n    }\r\n    this.timer = setInterval(() => {\r\n      this.performTask(this.counter++);\r\n    }, this.interval);\r\n  }\r\n\r\n  stop() {\r\n    clearInterval(this.timer);\r\n    this.timer = null;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/util/number-checker.js?");

/***/ }),

/***/ "./src/util/randColor.js":
/*!*******************************!*\
  !*** ./src/util/randColor.js ***!
  \*******************************/
/*! exports provided: randIndex, randColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randIndex\", function() { return randIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randColor\", function() { return randColor; });\nconst randIndex = (end, start = 0) => \r\n  Math.floor(Math.random() * (end - start) + start); \r\n\r\nconst randColor = () => Array.from({length: 3}, (_, i) => i)\r\n  .map(_ => randIndex(255, 100).toString(16).padStart(2, '0'))\r\n  .reduce((prefix, hex) => prefix + hex, '#')\r\n  .toUpperCase();\n\n//# sourceURL=webpack:///./src/util/randColor.js?");

/***/ })

/******/ });