/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/display-data.js":
/*!*****************************!*\
  !*** ./src/display-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayData: () => (/* binding */ displayData)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n//Function to show the loader\nfunction showLoader() {\n  var loader = document.getElementById(\"loader\");\n  loader.style.display = \"flex\";\n}\n\n// Function to hide the loader\nfunction hideLoader() {\n  var loader = document.getElementById(\"loader\");\n  loader.style.display = \"none\";\n}\n\n// Display data\nfunction displayData(response) {\n  // Show loader\n  showLoader();\n  var data = response.docs;\n\n  // // Looping data\n  data.forEach(function (booksArr) {\n    createCard(booksArr);\n  });\n\n  // Create card\n  function createCard(book) {\n    // Target data\n    var modal = document.getElementById(\"modal\");\n    var modalParagraph = document.querySelector(\".text-modal\");\n    var findTitle = book.title;\n    var bookKey = book.key;\n    var findAuthor = book.author_name ? book.author_name[0] : \"Author not found.\";\n    var coverUrl = \"https://covers.openlibrary.org/b/id/\".concat(book.cover_i, \"-M.jpg\");\n    var coverImage = book.cover_i ? \"\".concat(coverUrl) : \"https://picsum.photos/id/777/500/500\";\n\n    // Create card element\n    var makeSlide = document.createElement(\"div\");\n    var makeCard = document.createElement(\"div\");\n    var makeImg = document.createElement(\"img\");\n    var makeContent = document.createElement(\"div\");\n    var makeTitle = document.createElement(\"div\");\n    var makeAuthor = document.createElement(\"p\");\n    var makeBtn = document.createElement(\"button\");\n\n    // Append card element\n    var bookSection = document.getElementById(\"books-section\");\n\n    // Append slide container\n    makeSlide.className = \"slide\";\n    bookSection.appendChild(makeSlide);\n\n    // Append card container div\n    makeCard.className = \"card\";\n    makeSlide.appendChild(makeCard);\n\n    // Append Img\n    makeImg.className = \"bk-cover\";\n    makeImg.src = coverImage;\n    makeImg.alt = findTitle;\n    makeCard.appendChild(makeImg);\n\n    // Append content container div\n    makeContent.className = \"content\";\n    makeCard.appendChild(makeContent);\n\n    // Append title div\n    makeTitle.className = \"title\";\n    makeTitle.appendChild(document.createTextNode(findTitle));\n    makeContent.appendChild(makeTitle);\n\n    // Append author P\n    makeAuthor.className = \"author\";\n    makeAuthor.appendChild(document.createTextNode(findAuthor));\n    makeContent.appendChild(makeAuthor);\n\n    //Button open modal\n    makeBtn.className = \"modal-button\";\n    makeBtn.setAttribute(\"id\", \"open-button\");\n    makeBtn.appendChild(document.createTextNode(\"Learn More\"));\n    makeContent.appendChild(makeBtn);\n\n    //Retrive book description\n    makeBtn.addEventListener(\"click\", function () {\n      // Show loader\n      showLoader();\n\n      //Fetch API\n      var descriptionUrl = \"https://openlibrary.org\".concat(bookKey, \".json\");\n      fetch(descriptionUrl).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        //Handling description\n        var description = \"No description available\";\n        if (data.description) {\n          if (_typeof(data.description) === \"object\") {\n            description = data.description.value || description;\n          } else if (typeof data.description === \"string\") {\n            description = data.description || description;\n          }\n        }\n        // Show description\n        modalParagraph.innerHTML = \"\".concat(description);\n        modal.showModal();\n        // Hide loader\n        setTimeout(hideLoader, 500);\n      })[\"catch\"](function (error) {\n        console.error(error);\n        // Hide loader\n        setTimeout(hideLoader, 500);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/display-data.js?");

/***/ }),

/***/ "./src/fullpage.js":
/*!*************************!*\
  !*** ./src/fullpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Fulpage configuration object\nnew fullpage(\"#fullpage\", {\n  autoScrolling: true,\n  scrollHorizontally: true,\n  navigation: true,\n  css3: true,\n  loopHorizontal: true,\n  fitToSection: true,\n  keyboardScrolling: true,\n  licenseKey: \"gplv3-license\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fullpage());\n\n//# sourceURL=webpack://my-webpack-project/./src/fullpage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fullpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullpage */ \"./src/fullpage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _display_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-data */ \"./src/display-data.js\");\n\n\n\n\n// Element selection\nvar searchInput = document.querySelector(\".search-bar\");\nvar btnSearch = document.querySelector(\".btn-search\");\nvar modal = document.getElementById(\"modal\");\nvar closeModal = document.querySelector(\".close-modal\");\n\n// Add Event\nbtnSearch.addEventListener(\"click\", getInput);\ncloseModal.addEventListener(\"click\", function () {\n  modal.close();\n});\n\n// Function to get the input\nfunction getInput(event) {\n  event.preventDefault();\n  getData(searchInput.value);\n}\n\n// Fetch API\nfunction getData(search) {\n  var apiUrl = \"https://openlibrary.org/search.json?q=\".concat(search);\n  fetch(apiUrl).then(function (response) {\n    return response.json();\n  }).then(_display_data__WEBPACK_IMPORTED_MODULE_2__.displayData)[\"catch\"](function (error) {\n    console.error(error);\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* css reset */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n/* for develop DELET IN PRODACTION */\r\n.fp-arrow {\r\n  background-color: #2563eb;\r\n}\r\n\r\n/* START Global style */\r\n.hero-header {\r\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\r\n}\r\n\r\n.hero-section {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.slide {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/* START Search bar and butto style */\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-width: 500px;\r\n  user-select: none;\r\n}\r\n\r\n.text {\r\n  font-size: 0.8rem;\r\n  text-align: left;\r\n  width: 100%;\r\n  color: black;\r\n  font-weight: bold;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.search-bar {\r\n  border-radius: 8px;\r\n  padding: 7px 16px;\r\n  box-shadow: rgba(77, 79, 82, 0.2) 0px 8px 24px;\r\n  border: 2px solid rgb(184, 180, 180);\r\n  font-size: 0.8rem;\r\n  outline: none;\r\n  transition: 0.5s ease;\r\n}\r\n\r\n.search-bar:hover {\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n  border-color: rgb(138, 175, 255);\r\n}\r\n\r\n.search-bar:focus {\r\n  border: 2px solid rgb(57, 120, 255);\r\n  box-shadow: rgba(133, 130, 130, 0.1) 0px 4px 12px;\r\n  transform: scale(0.99);\r\n}\r\n\r\n.search-bar::placeholder {\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-search {\r\n  padding: 6px 15px;\r\n  text-align: center;\r\n  color: rgb(95, 87, 87);\r\n  cursor: pointer;\r\n  background-color: white;\r\n  border-radius: 6px;\r\n  border: none;\r\n  transition: 0.5s;\r\n  width: 50%;\r\n  margin-top: 7px;\r\n  font-size: 13px;\r\n  box-shadow:\r\n    rgba(104, 100, 100, 0.1) 0px 4px 6px -1px,\r\n    rgba(49, 42, 42, 0.06) 0px 2px 4px -1px;\r\n}\r\n\r\n.btn-search:hover {\r\n  border-radius: 7px;\r\n  background-color: rgb(243, 242, 242);\r\n  border-color: rgb(236, 232, 232);\r\n}\r\n/* END Serch bar and button style */\r\n\r\n/* START card style */\r\n.card {\r\n  max-width: 300px;\r\n  min-width: 250px;\r\n  border-radius: 10px;\r\n  background-color: #fff;\r\n  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);\r\n  border: 1px solid transparent;\r\n  margin: 1rem;\r\n}\r\n\r\n.card a {\r\n  text-decoration: none;\r\n}\r\n\r\n.content {\r\n  padding: 1.1rem;\r\n}\r\n\r\n.bk-cover {\r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 20rem;\r\n  background-color: rgb(239, 205, 255);\r\n  border-radius: 10px 10px 0 0;\r\n  border: none;\r\n}\r\n\r\n.title {\r\n  color: #111827;\r\n  font-size: 1.125rem;\r\n  line-height: 1.75rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.author {\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.9rem;\r\n  color: #6b7280;\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n}\r\n\r\n.modal-button {\r\n  display: flex;\r\n  margin-top: 1rem;\r\n  margin: 0 auto;\r\n  color: #ffffff;\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n  font-weight: 500;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  gap: 0.25rem;\r\n  background-color: #2563eb;\r\n  padding: 4px 8px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.modal-button {\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.modal-button:hover {\r\n  transform: translateX(4px);\r\n}\r\n/* END Card style */\r\n\r\n/* START Modal style */\r\n.text-modal {\r\n  padding: 1rem;\r\n}\r\n\r\n.book-modal {\r\n  text-align: center;\r\n  position: absolute;\r\n  padding: 0.5rem;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  margin-top: 8rem;\r\n  border-radius: 10px;\r\n  border: 0px solid;\r\n  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.book-modal::backdrop {\r\n  background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* START loader style */\r\n.loader {\r\n  --background: linear-gradient(135deg, #23c4f8, #275efe);\r\n  --shadow: rgba(39, 94, 254, 0.28);\r\n  --text: #6c7486;\r\n  --page: rgba(255, 255, 255, 0.36);\r\n  --page-fold: rgba(255, 255, 255, 0.52);\r\n  --duration: 3s;\r\n  width: 200px;\r\n  height: 140px;\r\n  position: relative;\r\n}\r\n\r\n.loader:before,\r\n.loader:after {\r\n  --r: -6deg;\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 8px;\r\n  width: 120px;\r\n  top: 80%;\r\n  box-shadow: 0 16px 12px var(--shadow);\r\n  transform: rotate(var(--r));\r\n}\r\n\r\n.loader:before {\r\n  left: 4px;\r\n}\r\n\r\n.loader:after {\r\n  --r: 6deg;\r\n  right: 4px;\r\n}\r\n\r\n.loader div {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 13px;\r\n  position: relative;\r\n  z-index: 1;\r\n  perspective: 600px;\r\n  box-shadow: 0 4px 6px var(--shadow);\r\n  background-image: var(--background);\r\n}\r\n\r\n.loader div ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: relative;\r\n}\r\n\r\n.loader div ul li {\r\n  --r: 180deg;\r\n  --o: 0;\r\n  --c: var(--page);\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n  transform-origin: 100% 50%;\r\n  color: var(--c);\r\n  opacity: var(--o);\r\n  transform: rotateY(var(--r));\r\n  -webkit-animation: var(--duration) ease infinite;\r\n  animation: var(--duration) ease infinite;\r\n}\r\n\r\n.loader div ul li:nth-child(2) {\r\n  --c: var(--page-fold);\r\n  -webkit-animation-name: page-2;\r\n  animation-name: page-2;\r\n}\r\n\r\n.loader div ul li:nth-child(3) {\r\n  --c: var(--page-fold);\r\n  -webkit-animation-name: page-3;\r\n  animation-name: page-3;\r\n}\r\n\r\n.loader div ul li:nth-child(4) {\r\n  --c: var(--page-fold);\r\n  -webkit-animation-name: page-4;\r\n  animation-name: page-4;\r\n}\r\n\r\n.loader div ul li:nth-child(5) {\r\n  --c: var(--page-fold);\r\n  -webkit-animation-name: page-5;\r\n  animation-name: page-5;\r\n}\r\n\r\n.loader div ul li svg {\r\n  width: 90px;\r\n  height: 120px;\r\n  display: block;\r\n}\r\n\r\n.loader div ul li:first-child {\r\n  --r: 0deg;\r\n  --o: 1;\r\n}\r\n\r\n.loader div ul li:last-child {\r\n  --o: 1;\r\n}\r\n\r\n.loader span {\r\n  display: block;\r\n  left: 0;\r\n  right: 0;\r\n  top: 100%;\r\n  margin-top: 20px;\r\n  text-align: center;\r\n  color: var(--text);\r\n}\r\n\r\n@keyframes page-2 {\r\n  0% {\r\n    transform: rotateY(180deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  20% {\r\n    opacity: 1;\r\n  }\r\n\r\n  35%,\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    transform: rotateY(0deg);\r\n  }\r\n}\r\n\r\n@keyframes page-3 {\r\n  15% {\r\n    transform: rotateY(180deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  35% {\r\n    opacity: 1;\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n\r\n  65%,\r\n  100% {\r\n    transform: rotateY(0deg);\r\n  }\r\n}\r\n\r\n@keyframes page-4 {\r\n  30% {\r\n    transform: rotateY(180deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n\r\n  65%,\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n\r\n  80%,\r\n  100% {\r\n    transform: rotateY(0deg);\r\n  }\r\n}\r\n\r\n@keyframes page-5 {\r\n  45% {\r\n    transform: rotateY(180deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  65% {\r\n    opacity: 1;\r\n  }\r\n\r\n  80%,\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n\r\n  95%,\r\n  100% {\r\n    transform: rotateY(0deg);\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;