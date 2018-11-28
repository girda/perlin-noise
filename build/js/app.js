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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _perlin = __webpack_require__(/*! ./lib/perlin */ \"./lib/perlin.js\");\n\nvar _perlin2 = _interopRequireDefault(_perlin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar canvas = document.querySelector('canvas');\nvar ctx = canvas.getContext('2d');\nvar size = 500;\n\ncanvas.width = size * 2;\ncanvas.height = size;\n\nvar NUM = 100;\n\nfunction random(num) {\n  return Math.floor(Math.random() * num);\n}\n\nfunction draww() {\n\n  ctx.save();\n  ctx.beginPath();\n  for (var i = 0; i < NUM; i++) {\n    ctx.lineTo(i * 10, 400 * (0, _perlin2.default)(i / 20, time / 200 + i / 1000, 0));\n  }\n  ctx.strokeStyle = '#000';\n  ctx.globalAlpha = 0.05;\n  ctx.stroke();\n  ctx.restore();\n}\n\nvar time = 0;\n\nfunction render() {\n  draww();\n  time++;\n  window.requestAnimationFrame(render);\n}\n\nrender();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQZXJsaW4gZnJvbSAnLi9saWIvcGVybGluJztcclxuXHJcbmxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5sZXQgc2l6ZSA9IDUwMDtcclxuXHJcbmNhbnZhcy53aWR0aCA9IHNpemUqMjtcclxuY2FudmFzLmhlaWdodCA9IHNpemU7XHJcblxyXG5jb25zdCBOVU0gPSAxMDA7XHJcblxyXG5mdW5jdGlvbiByYW5kb20obnVtKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkqbnVtICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXd3KCkge1xyXG5cclxuICBjdHguc2F2ZSgpO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTTsgaSsrKSB7XHJcbiAgICBjdHgubGluZVRvKCBpKjEwLCA0MDAqUGVybGluKGkvMjAsdGltZS8yMDAraS8xMDAwLDApKTtcclxuICB9XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xyXG4gIGN0eC5nbG9iYWxBbHBoYT0wLjA1O1xyXG4gIGN0eC5zdHJva2UoKTtcclxuICBjdHgucmVzdG9yZSgpO1xyXG59XHJcblxyXG5sZXQgdGltZSA9IDA7XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgZHJhd3coKTtcclxuICB0aW1lKys7XHJcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG59XHJcblxyXG5yZW5kZXIoKTtcclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./lib/perlin.js":
/*!***********************!*\
  !*** ./lib/perlin.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Perlin;\nfunction Perlin(x, y, z) {\n\n  var p = new Array(512);\n  var permutation = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];\n  for (var i = 0; i < 256; i++) {\n    p[256 + i] = p[i] = permutation[i];\n  }var X = Math.floor(x) & 255,\n      // FIND UNIT CUBE THAT\n  Y = Math.floor(y) & 255,\n      // CONTAINS POINT.\n  Z = Math.floor(z) & 255;\n  x -= Math.floor(x); // FIND RELATIVE X,Y,Z\n  y -= Math.floor(y); // OF POINT IN CUBE.\n  z -= Math.floor(z);\n  var u = fade(x),\n      // COMPUTE FADE CURVES\n  v = fade(y),\n      // FOR EACH OF X,Y,Z.\n  w = fade(z);\n  var A = p[X] + Y,\n      AA = p[A] + Z,\n      AB = p[A + 1] + Z,\n      // HASH COORDINATES OF\n  B = p[X + 1] + Y,\n      BA = p[B] + Z,\n      BB = p[B + 1] + Z; // THE 8 CUBE CORNERS,\n\n  return scale(lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z), // AND ADD\n  grad(p[BA], x - 1, y, z)), // BLENDED\n  lerp(u, grad(p[AB], x, y - 1, z), // RESULTS\n  grad(p[BB], x - 1, y - 1, z))), // FROM  8\n  lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1), // CORNERS\n  grad(p[BA + 1], x - 1, y, z - 1)), // OF CUBE\n  lerp(u, grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1)))));\n}\nfunction fade(t) {\n  return t * t * t * (t * (t * 6 - 15) + 10);\n}\nfunction lerp(t, a, b) {\n  return a + t * (b - a);\n}\nfunction grad(hash, x, y, z) {\n  var h = hash & 15; // CONVERT LO 4 BITS OF HASH CODE\n  var u = h < 8 ? x : y,\n      // INTO 12 GRADIENT DIRECTIONS.\n  v = h < 4 ? y : h === 12 || h === 14 ? x : z;\n  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);\n}\nfunction scale(n) {\n  return (1 + n) / 2;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcGVybGluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9saWIvcGVybGluLmpzPzliNWEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJsaW4oeCwgeSwgeikge1xyXG5cclxuICB2YXIgcCA9IG5ldyBBcnJheSg1MTIpO1xyXG4gIHZhciBwZXJtdXRhdGlvbiA9IFsgMTUxLDE2MCwxMzcsOTEsOTAsMTUsXHJcbiAgICAxMzEsMTMsMjAxLDk1LDk2LDUzLDE5NCwyMzMsNywyMjUsMTQwLDM2LDEwMywzMCw2OSwxNDIsOCw5OSwzNywyNDAsMjEsMTAsMjMsXHJcbiAgICAxOTAsIDYsMTQ4LDI0NywxMjAsMjM0LDc1LDAsMjYsMTk3LDYyLDk0LDI1MiwyMTksMjAzLDExNywzNSwxMSwzMiw1NywxNzcsMzMsXHJcbiAgICA4OCwyMzcsMTQ5LDU2LDg3LDE3NCwyMCwxMjUsMTM2LDE3MSwxNjgsIDY4LDE3NSw3NCwxNjUsNzEsMTM0LDEzOSw0OCwyNywxNjYsXHJcbiAgICA3NywxNDYsMTU4LDIzMSw4MywxMTEsMjI5LDEyMiw2MCwyMTEsMTMzLDIzMCwyMjAsMTA1LDkyLDQxLDU1LDQ2LDI0NSw0MCwyNDQsXHJcbiAgICAxMDIsMTQzLDU0LCA2NSwyNSw2MywxNjEsIDEsMjE2LDgwLDczLDIwOSw3NiwxMzIsMTg3LDIwOCwgODksMTgsMTY5LDIwMCwxOTYsXHJcbiAgICAxMzUsMTMwLDExNiwxODgsMTU5LDg2LDE2NCwxMDAsMTA5LDE5OCwxNzMsMTg2LCAzLDY0LDUyLDIxNywyMjYsMjUwLDEyNCwxMjMsXHJcbiAgICA1LDIwMiwzOCwxNDcsMTE4LDEyNiwyNTUsODIsODUsMjEyLDIwNywyMDYsNTksMjI3LDQ3LDE2LDU4LDE3LDE4MiwxODksMjgsNDIsXHJcbiAgICAyMjMsMTgzLDE3MCwyMTMsMTE5LDI0OCwxNTIsIDIsNDQsMTU0LDE2MywgNzAsMjIxLDE1MywxMDEsMTU1LDE2NywgNDMsMTcyLDksXHJcbiAgICAxMjksMjIsMzksMjUzLCAxOSw5OCwxMDgsMTEwLDc5LDExMywyMjQsMjMyLDE3OCwxODUsIDExMiwxMDQsMjE4LDI0Niw5NywyMjgsXHJcbiAgICAyNTEsMzQsMjQyLDE5MywyMzgsMjEwLDE0NCwxMiwxOTEsMTc5LDE2MiwyNDEsIDgxLDUxLDE0NSwyMzUsMjQ5LDE0LDIzOSwxMDcsXHJcbiAgICA0OSwxOTIsMjE0LCAzMSwxODEsMTk5LDEwNiwxNTcsMTg0LCA4NCwyMDQsMTc2LDExNSwxMjEsNTAsNDUsMTI3LCA0LDE1MCwyNTQsXHJcbiAgICAxMzgsMjM2LDIwNSw5MywyMjIsMTE0LDY3LDI5LDI0LDcyLDI0MywxNDEsMTI4LDE5NSw3OCw2NiwyMTUsNjEsMTU2LDE4MFxyXG4gIF07XHJcbiAgZm9yICh2YXIgaT0wOyBpIDwgMjU2IDsgaSsrKSBcclxuICAgIHBbMjU2K2ldID0gcFtpXSA9IHBlcm11dGF0aW9uW2ldOyBcclxuXHJcbiAgdmFyIFggPSBNYXRoLmZsb29yKHgpICYgMjU1LCAvLyBGSU5EIFVOSVQgQ1VCRSBUSEFUXHJcbiAgICBZID0gTWF0aC5mbG9vcih5KSAmIDI1NSwgLy8gQ09OVEFJTlMgUE9JTlQuXHJcbiAgICBaID0gTWF0aC5mbG9vcih6KSAmIDI1NTtcclxuICB4IC09IE1hdGguZmxvb3IoeCk7IC8vIEZJTkQgUkVMQVRJVkUgWCxZLFpcclxuICB5IC09IE1hdGguZmxvb3IoeSk7IC8vIE9GIFBPSU5UIElOIENVQkUuXHJcbiAgeiAtPSBNYXRoLmZsb29yKHopO1xyXG4gIHZhciB1ID0gZmFkZSh4KSwgLy8gQ09NUFVURSBGQURFIENVUlZFU1xyXG4gICAgdiA9IGZhZGUoeSksIC8vIEZPUiBFQUNIIE9GIFgsWSxaLlxyXG4gICAgdyA9IGZhZGUoeik7XHJcbiAgdmFyIEEgPSBwW1ggXStZLCBBQSA9IHBbQV0rWiwgQUIgPSBwW0ErMV0rWiwgLy8gSEFTSCBDT09SRElOQVRFUyBPRlxyXG4gICAgQiA9IHBbWCsxXStZLCBCQSA9IHBbQl0rWiwgQkIgPSBwW0IrMV0rWjsgLy8gVEhFIDggQ1VCRSBDT1JORVJTLFxyXG5cclxuICByZXR1cm4gc2NhbGUobGVycCh3LCBsZXJwKHYsIGxlcnAodSwgZ3JhZChwW0FBIF0sIHggLCB5ICwgeiApLCAvLyBBTkQgQUREXHJcbiAgICBncmFkKHBbQkEgXSwgeC0xLCB5ICwgeiApKSwgLy8gQkxFTkRFRFxyXG4gIGxlcnAodSwgZ3JhZChwW0FCIF0sIHggLCB5LTEsIHogKSwgLy8gUkVTVUxUU1xyXG4gICAgZ3JhZChwW0JCIF0sIHgtMSwgeS0xLCB6ICkpKSwvLyBGUk9NICA4XHJcbiAgbGVycCh2LCBsZXJwKHUsIGdyYWQocFtBQSsxXSwgeCAsIHkgLCB6LTEgKSwgLy8gQ09STkVSU1xyXG4gICAgZ3JhZChwW0JBKzFdLCB4LTEsIHkgLCB6LTEgKSksIC8vIE9GIENVQkVcclxuICBsZXJwKHUsIGdyYWQocFtBQisxXSwgeCAsIHktMSwgei0xICksXHJcbiAgICBncmFkKHBbQkIrMV0sIHgtMSwgeS0xLCB6LTEgKSkpKSk7XHJcbn1cclxuZnVuY3Rpb24gZmFkZSh0KSB7IHJldHVybiB0ICogdCAqIHQgKiAodCAqICh0ICogNiAtIDE1KSArIDEwKTsgfVxyXG5mdW5jdGlvbiBsZXJwKCB0LCBhLCBiKSB7IHJldHVybiBhICsgdCAqIChiIC0gYSk7IH1cclxuZnVuY3Rpb24gZ3JhZChoYXNoLCB4LCB5LCB6KSB7XHJcbiAgdmFyIGggPSBoYXNoICYgMTU7IC8vIENPTlZFUlQgTE8gNCBCSVRTIE9GIEhBU0ggQ09ERVxyXG4gIHZhciB1ID0gaDw4ID8geCA6IHksIC8vIElOVE8gMTIgR1JBRElFTlQgRElSRUNUSU9OUy5cclxuICAgIHYgPSBoPDQgPyB5IDogaD09PTEyfHxoPT09MTQgPyB4IDogejtcclxuICByZXR1cm4gKChoJjEpID09PSAwID8gdSA6IC11KSArICgoaCYyKSA9PT0gMCA/IHYgOiAtdik7XHJcbn0gXHJcbmZ1bmN0aW9uIHNjYWxlKG4pIHsgcmV0dXJuICgxICsgbikvMjsgfVxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/perlin.js\n");

/***/ })

/******/ });