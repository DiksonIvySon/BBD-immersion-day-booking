/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let submit = document.querySelector('button') \nlet json_data;  \nlet data ; \nconst { saveFile} = __webpack_require__(/*! ./server */ \"./src/server.js\")\n\nlet getData = () => {\n    console.log(`json ${json_data}`)\n}\n\ndata = window.addEventListener('click',function(e){\n    e.preventDefault() \n\n    let firstName = document.querySelector('#fname').value; \n    let lastName = document.querySelector('#lname').value; \n    let email = document.querySelector('#email').value; \n    let cellphone = document.querySelector('#cellphone').value;\n\n     data = { \n        firstName, \n        lastName, \n        email, \n        cellphone, \n    }     \n    json_data = JSON.stringify(data)   \n\n    getData()\n    saveFile(json_data)\n\n\n}) \n\n\nconsole.log(`jason ${json_data}`) \n\n\n//# sourceURL=webpack://bbd-immersion-day-booking/./src/main.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __dirname = \"/\";\nconst  fs = __webpack_require__(/*! node:fs */ \"node:fs\") ; \nconst path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nconst saveFile = (data) => { \n\n    try{ \n        fs.writeFileSync(path.join(__dirname, '../data/data.json'), data)\n    }catch (err)\n    {\n        console.error(`Error writing to file: ${path}`)\n        return false\n    } \n} \n\nmodule.exports = {saveFile}; \n\n//# sourceURL=webpack://bbd-immersion-day-booking/./src/server.js?");

/***/ }),

/***/ "node:fs":
/*!***************!*\
  !*** node:fs ***!
  \***************/
/***/ (() => {

eval("throw new Error(\"Module build failed: UnhandledSchemeError: Reading from \\\"node:fs\\\" is not handled by plugins (Unhandled scheme).\\nWebpack supports \\\"data:\\\" and \\\"file:\\\" URIs by default.\\nYou may need an additional plugin to handle \\\"node:\\\" URIs.\\n    at /mnt/c/Users/DYNABOOK/Desktop/BBD-project-1/BBD-immersion-day-booking/node_modules/webpack/lib/NormalModule.js:923:25\\n    at Hook.eval [as callAsync] (eval at create (/mnt/c/Users/DYNABOOK/Desktop/BBD-project-1/BBD-immersion-day-booking/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/mnt/c/Users/DYNABOOK/Desktop/BBD-project-1/BBD-immersion-day-booking/node_modules/tapable/lib/Hook.js:18:14)\\n    at Object.processResource (/mnt/c/Users/DYNABOOK/Desktop/BBD-project-1/BBD-immersion-day-booking/node_modules/webpack/lib/NormalModule.js:920:8)\\n    at processResource (/mnt/c/Users/DYNABOOK/Desktop/BBD-project-1/BBD-immersion-day-booking/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\\n    at iteratePitchingLoaders (/mnt/c/Users/DYNABOOK/Desktop/BBD-project-1/BBD-immersion-day-booking/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\\n    at runLoaders (/mnt/c/Users/DYNABOOK/Desktop/BBD-project-1/BBD-immersion-day-booking/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\\n    at NormalModule._doBuild (/mnt/c/Users/DYNABOOK/Desktop/BBD-project-1/BBD-immersion-day-booking/node_modules/webpack/lib/NormalModule.js:910:3)\\n    at NormalModule.build (/mnt/c/Users/DYNABOOK/Desktop/BBD-project-1/BBD-immersion-day-booking/node_modules/webpack/lib/NormalModule.js:1086:15)\\n    at /mnt/c/Users/DYNABOOK/Desktop/BBD-project-1/BBD-immersion-day-booking/node_modules/webpack/lib/Compilation.js:1406:12\");\n\n//# sourceURL=webpack://bbd-immersion-day-booking/node:fs?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;