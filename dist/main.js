/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/class.ts
var HelloWorld = /** @class */ (function () {
    function HelloWorld(name) {
        this.name = name;
    }
    HelloWorld.prototype.greet = function () {
        return "Hola mundo Webpack en " + this.name + "!";
    };
    return HelloWorld;
}());
/* harmony default export */ const src_class = (HelloWorld);

;// CONCATENATED MODULE: ./src/index.ts

var style = __webpack_require__(997);
var tailwind = __webpack_require__(473);
var logo = "./assets/favicon.png";
console.log("Buena la banda");
var saludar = function () {
    var saludo = ["Hello", "World"];
    saludo.forEach(function (e) {
        console.log(e);
    });
};
saludar();
var arr = [1, 2, 3], codeEsNext = function () { return console.log.apply(console, arr); };
codeEsNext();
var img = document.querySelector("#img");
if (img)
    img.innerHTML = "<img src=\"" + logo + "\" alt=\"magenta sky\"/>";
var d = document, $p = d.createElement("p"), $hello = new src_class("Typescript");
$p.textContent = $hello.greet();

})();

/******/ })()
;