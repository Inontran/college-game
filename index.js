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
/******/ 	return __webpack_require__(__webpack_require__.s = "./page/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/button/button.js":
/*!*************************************!*\
  !*** ./components/button/button.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./components/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/button/button.scss":
/*!***************************************!*\
  !*** ./components/button/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/carousel/carousel.js":
/*!*****************************************!*\
  !*** ./components/carousel/carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.scss */ "./components/carousel/carousel.scss");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carousel_scss__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Carousel = /*#__PURE__*/function () {
  function Carousel(carouselContainer) {
    _classCallCheck(this, Carousel);

    _defineProperty(this, "_carouselContainer", void 0);

    _defineProperty(this, "_stage", void 0);

    _defineProperty(this, "_stageWrapper", void 0);

    _defineProperty(this, "_prevBtn", void 0);

    _defineProperty(this, "_nextBtn", void 0);

    _defineProperty(this, "_scrollStep", 30);

    this._carouselContainer = carouselContainer;

    this._init();
  }

  _createClass(Carousel, [{
    key: "prevSlide",
    value: function prevSlide() {
      this._stageWrapper.scrollLeft -= this._scrollStep;
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      this._stageWrapper.scrollLeft += this._scrollStep;
    }
  }, {
    key: "_init",
    value: function _init() {
      this._wrapCarouselChildren();

      this._createNavBtns();

      this._bindEventListeners();

      this._addEventListeners();
    }
  }, {
    key: "_wrapCarouselChildren",
    value: function _wrapCarouselChildren() {
      var _this = this;

      this._stage = document.createElement('div');

      this._stage.classList.add('carousel__stage');

      var arrayCarouselChildren = [];

      var _iterator = _createForOfIteratorHelper(this._carouselContainer.children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          arrayCarouselChildren.push(item);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ;
      var itemWrapper;
      arrayCarouselChildren.forEach(function (item) {
        itemWrapper = document.createElement('div');
        itemWrapper.classList.add('carousel__item');
        itemWrapper.append(item);

        _this._stage.append(itemWrapper);
      });
      this._stageWrapper = document.createElement('div');

      this._stageWrapper.classList.add('carousel__stage-wrapper');

      this._stageWrapper.append(this._stage);

      this._carouselContainer.append(this._stageWrapper);

      this._scrollStep = itemWrapper.clientWidth;
    }
  }, {
    key: "_createNavBtns",
    value: function _createNavBtns() {
      var navContainer = document.createElement('div');
      navContainer.classList.add('carousel__nav');

      this._carouselContainer.append(navContainer);

      this._prevBtn = document.createElement('button');

      this._prevBtn.classList.add('carousel__prev-btn');

      this._prevBtn.type = 'button';
      navContainer.append(this._prevBtn);
      this._nextBtn = document.createElement('button');

      this._nextBtn.classList.add('carousel__next-btn');

      this._nextBtn.type = 'button';
      navContainer.append(this._nextBtn);
    }
  }, {
    key: "_bindEventListeners",
    value: function _bindEventListeners() {
      this._handlePrevBtnPointerdown = this._handlePrevBtnPointerdown.bind(this);
      this._handleNextBtnPointerdown = this._handleNextBtnPointerdown.bind(this);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      this._prevBtn.addEventListener('pointerdown', this._handlePrevBtnPointerdown);

      this._nextBtn.addEventListener('pointerdown', this._handleNextBtnPointerdown);
    }
  }, {
    key: "_handlePrevBtnPointerdown",
    value: function _handlePrevBtnPointerdown() {
      this.prevSlide();
    }
  }, {
    key: "_handleNextBtnPointerdown",
    value: function _handleNextBtnPointerdown() {
      this.nextSlide();
    }
  }]);

  return Carousel;
}();

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/carousel/carousel.scss":
/*!*******************************************!*\
  !*** ./components/carousel/carousel.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/map/map.js":
/*!*******************************!*\
  !*** ./components/map/map.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.scss */ "./components/map/map.scss");
/* harmony import */ var _map_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_map_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/map/map.scss":
/*!*********************************!*\
  !*** ./components/map/map.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/modal/modal.js":
/*!***********************************!*\
  !*** ./components/modal/modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.scss */ "./components/modal/modal.scss");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Modal = /*#__PURE__*/function () {
  function Modal(modalContainer) {
    _classCallCheck(this, Modal);

    _defineProperty(this, "_modalContainer", void 0);

    _defineProperty(this, "_closeBtns", void 0);

    this._modalContainer = modalContainer;

    this._init();
  }

  _createClass(Modal, [{
    key: "show",
    value: function show() {
      this._modalContainer.classList.add('modal_opened');
    }
  }, {
    key: "hide",
    value: function hide() {
      this._modalContainer.classList.remove('modal_opened');
    }
  }, {
    key: "_init",
    value: function _init() {
      this._closeBtns = this._modalContainer.querySelectorAll('.js-modal__close-btn .js-button');

      this._bindEventListeners();

      this._addEventListeners();
    }
  }, {
    key: "_bindEventListeners",
    value: function _bindEventListeners() {
      this._handleCloseBtnPointerdown = this._handleCloseBtnPointerdown.bind(this);
      this._handleModalPointerdown = this._handleModalPointerdown.bind(this);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this = this;

      this._modalContainer.addEventListener('pointerdown', this._handleModalPointerdown);

      this._closeBtns.forEach(function (btn) {
        btn.addEventListener('pointerdown', _this._handleCloseBtnPointerdown);
      });
    }
  }, {
    key: "_handleCloseBtnPointerdown",
    value: function _handleCloseBtnPointerdown() {
      this.hide();
    }
  }, {
    key: "_handleModalPointerdown",
    value: function _handleModalPointerdown(event) {
      var hasClassWrapper = event.target.classList.contains('modal__wrapper');
      var isChildModalWrapper = event.target.closest('.modal__wrapper');
      var doHideModal = !hasClassWrapper && !isChildModalWrapper;

      if (doHideModal) {
        this.hide();
      }
    }
  }]);

  return Modal;
}();

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/modal/modal.scss":
/*!*************************************!*\
  !*** ./components/modal/modal.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/personage/personage.js":
/*!*******************************************!*\
  !*** ./components/personage/personage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _personage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personage.scss */ "./components/personage/personage.scss");
/* harmony import */ var _personage_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_personage_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Personage = /*#__PURE__*/function (_EventTarget) {
  _inherits(Personage, _EventTarget);

  var _super = _createSuper(Personage);

  function Personage(personageContainer) {
    var _this;

    _classCallCheck(this, Personage);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_personageContainer", void 0);

    _defineProperty(_assertThisInitialized(_this), "_currentCoords", [444, 507]);

    _defineProperty(_assertThisInitialized(_this), "_currentPoint", 1);

    _defineProperty(_assertThisInitialized(_this), "_coordiantes", [[[420, 495], [402, 473], [385, 464], [368, 467], [350, 477]], [[336, 487], [320, 496], [301, 506], [277, 519]], [[263, 528], [250, 533], [240, 535], [229, 535], [216, 538], [204, 539], [189, 539]], [[174, 535], [160, 534], [147, 530], [135, 524], [126, 519], [110, 511]], [[91, 499], [84, 490], [84, 477], [95, 468], [104, 463], [117, 453], [123, 447]], [[115, 430], [113, 422], [118, 410], [124, 401], [134, 396], [142, 391]], [[154, 383], [161, 381], [167, 377], [174, 374], [181, 369], [188, 367], [193, 364], [201, 360], [214, 354]], [[230, 345], [236, 339], [239, 332], [239, 324], [232, 317], [223, 310], [214, 305], [204, 298], [196, 295], [188, 291], [176, 283]], [[162, 273], [148, 266], [136, 259], [128, 253], [121, 242], [127, 235], [138, 230]], [[158, 222], [163, 214], [158, 206], [153, 199], [154, 190], [157, 184], [169, 180], [181, 179], [192, 186], [201, 199]]]);

    _this._personageContainer = personageContainer;

    _this._init();

    return _this;
  }

  _createClass(Personage, [{
    key: "goNextPoint",
    value: function goNextPoint() {
      var _this2 = this;

      if (!this._coordiantes[this._currentPoint - 1]) {
        return;
      }

      this.dispatchEvent(new Event('start-moving'));
      var numberCoords = 0;
      var movingInterval = setInterval(function () {
        var position = _this2._coordiantes[_this2._currentPoint - 1][numberCoords];

        if (position) {
          _this2._personageContainer.style.left = position[0] + 'px';
          _this2._personageContainer.style.top = position[1] + 'px';
          numberCoords += 1;
        } else {
          clearInterval(movingInterval);
          _this2._currentPoint += 1;

          _this2.dispatchEvent(new Event('stop-moving'));
        }
      }, 100);
    }
  }, {
    key: "_init",
    value: function _init() {
      this._personageContainer.style.left = this._currentCoords[0] + 'px';
      this._personageContainer.style.top = this._currentCoords[1] + 'px';
    }
  }]);

  return Personage;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

/* harmony default export */ __webpack_exports__["default"] = (Personage);

/***/ }),

/***/ "./components/personage/personage.scss":
/*!*********************************************!*\
  !*** ./components/personage/personage.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/table/table.js":
/*!***********************************!*\
  !*** ./components/table/table.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.scss */ "./components/table/table.scss");
/* harmony import */ var _table_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_table_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Table = /*#__PURE__*/function () {
  function Table(tableContainer) {
    _classCallCheck(this, Table);

    _defineProperty(this, "_tableContainer", void 0);

    _defineProperty(this, "_tableBody", void 0);

    this._tableContainer = tableContainer;

    this._init();
  }

  _createClass(Table, [{
    key: "fillTable",
    value: function fillTable(dataRating) {
      if (!this._tableBody) {
        this._tableBody = document.createElement('tbody');

        this._tableBody.classList.add('table__body');

        this._tableContainer.append(this._tableBody);
      }

      var friendIds = [];
      dataRating.friends.forEach(function (friend) {
        friendIds.push(friend.id);
      });
      var sortedUsersArray = dataRating.rating.sort(function (user1, user2) {
        var user1Points = parseInt(user1.points, 10);
        var user2Points = parseInt(user2.points, 10);
        if (user2Points > user1Points) return 1;
        if (user2Points === user1Points) return 0;
        if (user2Points < user1Points) return -1;
      });
      var tableBodyContent = '';
      var numberPlace = 1;
      sortedUsersArray.forEach(function (player) {
        var tableUsernameModifier = 'table__username';

        if (friendIds.indexOf(player.id) !== -1) {
          tableUsernameModifier += ' table__username_friend';
        }

        var strNewRow = "<tr class=\"table__body-row\">\n                        <td class=\"table__body-cell table__body-cell_with-place\">".concat(numberPlace, "</td>\n                        <td class=\"table__body-cell table__body-cell_with-avatar\">\n                          <div class=\"table__avatar-wrapper\"></div>\n                        </td>\n                        <td class=\"table__body-cell table__body-cell_with-name\">\n                          <div class=\"").concat(tableUsernameModifier, "\" title=\"").concat(player.name, " ").concat(player.lastName, "\">\n                            ").concat(player.name, " ").concat(player.lastName, "\n                          </div>\n                        </td>\n                        <td class=\"table__body-cell table__body-cell_with-experience\">").concat(player.points, "</td>\n                      </tr>");
        tableBodyContent += strNewRow;
        numberPlace += 1;
      });
      this._tableBody.innerHTML = tableBodyContent;
    }
  }, {
    key: "_init",
    value: function _init() {
      this._tableBody = this._tableContainer.querySelector('.table__body');
    }
  }]);

  return Table;
}();

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/table/table.scss":
/*!*************************************!*\
  !*** ./components/table/table.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./page/data.js":
/*!**********************!*\
  !*** ./page/data.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = {
  "rating": [{
    "id": "123",
    "name": "Владимир",
    "lastName": "Ларионов",
    "img": "./male.png",
    "points": "463"
  }, {
    "id": "9",
    "name": "Владимир",
    "lastName": "Сергеев",
    "img": "./male.png",
    "points": "521"
  }, {
    "id": "231",
    "name": "Вениамин",
    "lastName": "Васильев",
    "img": "./male.png",
    "points": "865"
  }, {
    "id": "321",
    "name": "Мария",
    "lastName": "Логинова",
    "img": "./female.png",
    "points": "865"
  }, {
    "id": "492",
    "name": "Борис",
    "lastName": "Казанцев",
    "img": "./male.png",
    "points": "784"
  }, {
    "id": "452",
    "name": "Полина",
    "lastName": "Калинина",
    "img": "./female.png",
    "points": "225"
  }, {
    "id": "796",
    "name": "Даниил",
    "lastName": "Воробьёв",
    "img": "./male.png",
    "points": "642"
  }, {
    "id": "4",
    "name": "Эрик",
    "lastName": "Аксёнов",
    "img": "./male.png",
    "points": "150"
  }, {
    "id": "1155",
    "name": "Иван",
    "lastName": "Иванов",
    "img": "./male.png",
    "points": "100"
  }, {
    "id": "12145",
    "name": "Артем",
    "lastName": "Алексеев",
    "img": "./male.png",
    "points": "1000"
  }],
  "friends": [{
    "id": "9",
    "name": "Владимир",
    "lastName": "Сергеев",
    "img": "./male.png"
  }, {
    "id": "4",
    "name": "Эрик",
    "lastName": "Аксёнов",
    "img": "./male.png"
  }, {
    "id": "15411",
    "name": "Ирина",
    "lastName": "Чеснокова",
    "img": "./female.png"
  }, {
    "id": "15564",
    "name": "Дарина",
    "lastName": "Боброва",
    "img": "./female.png"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./page/entry.js":
/*!***********************!*\
  !*** ./page/entry.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/button/button */ "./components/button/button.js");
/* harmony import */ var _components_map_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/map/map */ "./components/map/map.js");
/* harmony import */ var _components_carousel_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/carousel/carousel */ "./components/carousel/carousel.js");
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/modal/modal */ "./components/modal/modal.js");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/table/table */ "./components/table/table.js");
/* harmony import */ var _components_personage_personage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/personage/personage */ "./components/personage/personage.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ "./page/data.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./page/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);








document.addEventListener('DOMContentLoaded', function () {
  var carouselContainer = document.querySelector('.js-carousel');
  var carosuel = new _components_carousel_carousel__WEBPACK_IMPORTED_MODULE_2__["default"](carouselContainer);
  var modalContainer = document.querySelector('#rating-modal');
  var modal = new _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"](modalContainer);
  var btnOpenRating = document.querySelector('.js-main-window__btn-open-rating .js-button');
  btnOpenRating.addEventListener('pointerdown', function () {
    modal.show();
  });
  var tableContainer = document.querySelector('.js-table');
  var table = new _components_table_table__WEBPACK_IMPORTED_MODULE_4__["default"](tableContainer);
  table.fillTable(_data__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var personageContainer = document.querySelector('.js-personage');
  var personage = new _components_personage_personage__WEBPACK_IMPORTED_MODULE_5__["default"](personageContainer);
  var btnMovingPersonage = document.querySelector('.js-main-window__moving-btn .js-button');
  btnMovingPersonage.addEventListener('pointerdown', function () {
    personage.goNextPoint();
  });
  personage.addEventListener('start-moving', function () {
    btnMovingPersonage.disabled = true;
  });
  personage.addEventListener('stop-moving', function () {
    btnMovingPersonage.disabled = false;
  });
});

/***/ }),

/***/ "./page/style.scss":
/*!*************************!*\
  !*** ./page/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=index.js.map