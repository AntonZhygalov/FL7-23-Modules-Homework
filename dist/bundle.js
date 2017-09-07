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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__showResault__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputs__ = __webpack_require__(3);




__WEBPACK_IMPORTED_MODULE_2__inputs__["b" /* createInputs */]();
__WEBPACK_IMPORTED_MODULE_2__inputs__["a" /* createButtons */]();
__WEBPACK_IMPORTED_MODULE_2__inputs__["c" /* createOutput */]();

document.getElementsByClassName('calc')[0].addEventListener('click', function (event) {
    let number1 = parseFloat(document.getElementsByTagName('input')[0].value);
    let number2 = parseFloat(document.getElementsByTagName('input')[1].value);
    __WEBPACK_IMPORTED_MODULE_1__showResault__["a" /* displayResault */](__WEBPACK_IMPORTED_MODULE_0__calculate__["a" /* calculate */](number1, number2, event.target.innerHTML));
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calculate;
function calculate(number1, number2, sign) {
    if (isNaN(number1) || isNaN(number2)) {
        return 'Error';
    }
    switch (sign) {
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1 - number2;
            break;
        case ':':
            return number1 / number2;
            break;
        case '*':
            return number1 * number2;
            break;
        default:
        return '';
            break;
    }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = displayResault;
function displayResault(resault) {
    document.getElementsByClassName('output')[0].innerHTML = resault;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createInputs;
/* harmony export (immutable) */ __webpack_exports__["a"] = createButtons;
/* harmony export (immutable) */ __webpack_exports__["c"] = createOutput;
function createInputs() {
    for (var i = 0; i < 2; i++) {
        let myInputs = document.createElement('input');
        document.body.appendChild(myInputs);
    }
};

function createButtons() {
    let types = ['+', '-', ':', '*'];
    let myDiv = document.createElement('div');
    myDiv.classList.add('calc');
    document.body.appendChild(myDiv);
    for (var i = 0; i < types.length; i++) {
        let myButtons = document.createElement('button');
        myButtons.innerHTML = types[i];
        myDiv.appendChild(myButtons);
    }
};

function createOutput() {
    let myDiv = document.createElement('div');
    myDiv.classList.add('output');
    document.body.appendChild(myDiv);
};



/***/ })
/******/ ]);