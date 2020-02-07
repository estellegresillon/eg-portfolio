module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/about/about.js":
/*!***************************************!*\
  !*** ./src/components/about/about.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.scss */ "./src/components/about/about.scss");
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_about_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./src/hooks/useWindowSize.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const About = ({
  showLightTheme,
  t
}) => {
  const windowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__["useWindowSize"])();
  const aboutContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const leftColumn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const rightColumn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  const moveColumns = () => {
    const containerTop = aboutContainer.current.offsetTop;
    const distanceFromTop = window.pageYOffset;
    leftColumn.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.2},0,0,1)`;
    rightColumn.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.2},0,0,1)`;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (windowSize.width > 728) {
      window.addEventListener("scroll", moveColumns, false);
      return () => window.removeEventListener("scroll", moveColumns, false);
    } // eslint-disable-next-line

  }, []);
  return __jsx("section", {
    id: "about",
    style: {
      color: showLightTheme ? "#000" : "#fff",
      background: showLightTheme ? "#fff" : "#000"
    }
  }, __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_3__["Waypoint"], {
    onEnter: () => handleWaypointEnter(aboutContainer.current),
    onLeave: () => handleWaypointLeave(aboutContainer.current)
  }, __jsx("div", {
    className: "about-container",
    ref: aboutContainer
  }, __jsx("div", {
    className: "about-column presentation",
    ref: leftColumn
  }, __jsx("p", null, __jsx("span", {
    className: "intro"
  }, "Hello"), ", ", t("about.intro")), __jsx("p", null, t("about.first-paragraph")), __jsx("p", null, t("about.second-paragraph"))), __jsx("div", {
    className: "about-column skills",
    ref: rightColumn
  }, __jsx("h5", null, __jsx("span", {
    "aria-label": "emoji-worker",
    role: "img"
  }, "\uD83D\uDCBB"), t("about.dev-title")), __jsx("ul", null, __jsx("li", {
    className: "bolder"
  }, "React.js / Redux / Nextjs / Context React"), __jsx("li", null, t("about.dev-first")), __jsx("li", null, t("about.dev-second")), __jsx("li", null, t("about.dev-third"))), __jsx("h5", null, __jsx("span", {
    "aria-label": "emoji-worker",
    role: "img"
  }, "\uD83C\uDFA8"), " UI DESIGN"), __jsx("ul", null, __jsx("li", {
    className: "bolder"
  }, "Sketch / Adobe / Invision / Zeplin"), __jsx("li", null, t("about.design-first")), __jsx("li", null, t("about.design-second")), __jsx("li", null, t("about.design-third")))))));
};

const mapStateToProps = state => {
  return {
    showLightTheme: state.showLightTheme
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(About)));

/***/ }),

/***/ "./src/components/about/about.scss":
/*!*****************************************!*\
  !*** ./src/components/about/about.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/about/index.js":
/*!***************************************!*\
  !*** ./src/components/about/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/components/about/about.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _about__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/app-layout.js":
/*!**************************************!*\
  !*** ./src/components/app-layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AppLayout = props => {
  return __jsx("div", null, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ "./src/components/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header/index.js");
/* harmony import */ var _hero_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-scene */ "./src/components/hero-scene/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ "./src/components/projects/index.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/components/about/index.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact */ "./src/components/contact/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ "./src/components/footer/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const App = () => {
  const mouseContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const mouseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const onCursorMove = (e, cursor, offset) => {
    const relX = e.clientX - offset;
    const relY = e.clientY - offset;
    mouseRef.current = relY;
    cursor.style.left = relX + "px";
    cursor.style.top = relY + "px";
  };

  const onScroll = cursor => {
    cursor.style.top = mouseRef.current + "px";
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const smallCursor = mouseContainer.current;
    window.addEventListener("mousemove", e => {
      onCursorMove(e, smallCursor, 5);
    }, false);
    return () => window.removeEventListener("mousemove", e => {
      onCursorMove(e, smallCursor, 5);
    }, false);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const smallCursor = mouseContainer.current;
    window.addEventListener("scroll", () => {
      onScroll(smallCursor);
    });
    return () => window.removeEventListener("scroll", () => {
      onScroll(smallCursor);
    });
  }, []);
  return __jsx("div", {
    className: "app"
  }, __jsx("div", {
    "aria-hidden": "true",
    className: "cursor-small",
    ref: mouseContainer
  }), __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_hero_scene__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_about__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_projects__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_contact__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/app.scss":
/*!*********************************!*\
  !*** ./src/components/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/contact/constants.js":
/*!*********************************************!*\
  !*** ./src/components/contact/constants.js ***!
  \*********************************************/
/*! exports provided: FUNNY_MESSAGES_ARRAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNNY_MESSAGES_ARRAY", function() { return FUNNY_MESSAGES_ARRAY; });
const FUNNY_MESSAGES_ARRAY = ["An exciting web project ?", "A friendly question ?", "A sexy static website ?", "A remote mission ?", "... or a mission onsite ?", "Looking for a brand new identity concept ?", "Looking for a designer that can code ?", "Looking for a coder that can design ?", "Need a React.Js webapp ?", "A coffee meeting ?"];

/***/ }),

/***/ "./src/components/contact/contact.js":
/*!*******************************************!*\
  !*** ./src/components/contact/contact.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.scss */ "./src/components/contact/contact.scss");
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contact_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/components/contact/helpers.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/components/contact/constants.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./src/hooks/useWindowSize.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Contact = ({
  showLightTheme,
  t
}) => {
  const windowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__["useWindowSize"])();
  const contactContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const textContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  const moveContainer = () => {
    const containerTop = contactContainer.current.offsetTop;
    const distanceFromTop = window.pageYOffset;
    contactContainer.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.8},0,0,1)`;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (windowSize.width > 728) {
      window.addEventListener("scroll", moveContainer, false);
      return () => window.removeEventListener("scroll", moveContainer, false);
    } // eslint-disable-next-line

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["printLetterByLetter"])(textContainer.current, _constants__WEBPACK_IMPORTED_MODULE_6__["FUNNY_MESSAGES_ARRAY"][0]);
    return () => Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["printLetterByLetter"])(null, null);
  }, []);
  return __jsx("section", {
    id: "contact",
    style: {
      color: showLightTheme ? "#000" : "#fff",
      background: showLightTheme ? "#fff" : "#000"
    }
  }, __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_3__["Waypoint"], {
    onEnter: () => handleWaypointEnter(contactContainer.current),
    onLeave: () => handleWaypointLeave(contactContainer.current)
  }, __jsx("div", {
    className: "contact-container",
    ref: contactContainer
  }, __jsx("div", {
    className: "contact-infos"
  }, __jsx("div", {
    "aria-hidden": "true",
    className: "text-wrapper"
  }, __jsx("div", {
    id: "text-container",
    ref: textContainer
  })), __jsx("div", {
    className: "mail-wrapper"
  }, __jsx("img", {
    src: "profile-pic.jpg",
    height: "100px",
    width: "auto",
    alt: "Author portrait"
  }), __jsx("div", {
    className: "column-right"
  }, __jsx("p", {
    className: "send-email"
  }, t('contact.send-mail')), __jsx("a", {
    href: "mailto:estelle.gresillon@gmail.com",
    title: "Mail link",
    style: {
      color: showLightTheme ? "#0e0e0e" : "#fff"
    }
  }, "estelle.gresillon@gmail.com"))), __jsx("p", {
    className: "disponibility"
  }, __jsx("span", {
    "aria-label": "Emoji businesswoman",
    role: "img"
  }, "\uD83D\uDC69\u200D\uD83D\uDCBC"), " ", t('contact.availability'))), __jsx("div", {
    className: "social-icons"
  }, __jsx("a", {
    style: {
      color: showLightTheme ? "#0e0e0e" : "#fff"
    },
    href: "https://www.linkedin.com/in/estellegresillon/",
    "aria-label": "LinkedIn link"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fab fa-linkedin"
  })), __jsx("a", {
    href: "https://dribbble.com/estellegresillon",
    style: {
      color: showLightTheme ? "#0e0e0e" : "#fff"
    },
    "aria-label": "Dribbble link"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fab fa-dribbble"
  })), __jsx("a", {
    href: "https://github.com/estellegresillon",
    style: {
      color: showLightTheme ? "#0e0e0e" : "#fff"
    },
    "aria-label": "GitHub link"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fab fa-github-alt"
  })), __jsx("a", {
    href: "mailto:estelle.gresillon@gmail.com",
    style: {
      color: showLightTheme ? "#0e0e0e" : "#fff"
    },
    "aria-label": "Mail link"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "far fa-paper-plane"
  }))))));
};

const mapStateToProps = state => {
  return {
    showLightTheme: state.showLightTheme
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Contact)));

/***/ }),

/***/ "./src/components/contact/contact.scss":
/*!*********************************************!*\
  !*** ./src/components/contact/contact.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/contact/helpers.js":
/*!*******************************************!*\
  !*** ./src/components/contact/helpers.js ***!
  \*******************************************/
/*! exports provided: printLetterByLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLetterByLetter", function() { return printLetterByLetter; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/components/contact/constants.js");

const printLetterByLetter = (destination, message) => {
  let i = 0;
  const interval = setInterval(function () {
    const container = destination;

    if (container) {
      container.innerHTML += message.charAt(i);
    } else {
      clearInterval(interval);
      return;
    }

    i++;

    if (i === message.length) {
      clearInterval(interval);
      setTimeout(() => {
        deleteMessage(destination, message);
      }, 1000);
    }
  }, 50);
};

const deleteMessage = (destination, message) => {
  const nextWord = _constants__WEBPACK_IMPORTED_MODULE_0__["FUNNY_MESSAGES_ARRAY"].indexOf(message) + 1;
  let letterIndex = message.length - 1;
  const interval = setInterval(function () {
    const container = destination;

    if (container) {
      container.innerHTML = message.substring(0, letterIndex - 1);
    } else {
      clearInterval(interval);
      return;
    }

    letterIndex--;

    if (letterIndex === 0) {
      clearInterval(interval);
      setTimeout(() => {
        if (nextWord === _constants__WEBPACK_IMPORTED_MODULE_0__["FUNNY_MESSAGES_ARRAY"].length) {
          printLetterByLetter(destination, _constants__WEBPACK_IMPORTED_MODULE_0__["FUNNY_MESSAGES_ARRAY"][0]);
        } else printLetterByLetter(destination, _constants__WEBPACK_IMPORTED_MODULE_0__["FUNNY_MESSAGES_ARRAY"][nextWord]);
      }, 500);
    }
  }, 20);
};

/***/ }),

/***/ "./src/components/contact/index.js":
/*!*****************************************!*\
  !*** ./src/components/contact/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/components/contact/contact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _contact__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.scss */ "./src/components/footer/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = ({
  showLightTheme,
  t
}) => {
  return __jsx("footer", {
    style: {
      color: showLightTheme ? "#000" : "#fff",
      background: showLightTheme ? "#fff" : "#000"
    }
  }, __jsx("p", null, t('footer.credits')), __jsx("p", null, t('footer.techno')));
};

const mapStateToProps = state => {
  return {
    showLightTheme: state.showLightTheme
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Footer)));

/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/footer/index.js":
/*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/components/footer/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions.js");
/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useComponentVisible */ "./src/hooks/useComponentVisible.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Header = ({
  showLightTheme,
  toggleTheme
}) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__["useComponentVisible"])(false);
  const {
    0: logoValue,
    1: setLogoValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("ESTELLE GRESILLON");
  const {
    0: language,
    1: setLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleLogoValueChange = () => {
    const windowHeight = window.innerHeight;
    const distanceFromTop = window.pageYOffset;
    const windowScrollHeight = document.body.scrollHeight;

    if (distanceFromTop + windowHeight * 2 >= windowScrollHeight) {
      setLogoValue("CLICK HERE TO SCROLL TO TOP");
    } else if (distanceFromTop > windowHeight * 5) {
      setLogoValue("🍰🍰🍰");
    } else if (distanceFromTop > windowHeight * 4) {
      setLogoValue("🍰🍰");
    } else if (distanceFromTop > windowHeight * 3) {
      setLogoValue("🍰");
    } else if (distanceFromTop > windowHeight * 2) {
      setLogoValue("HELLO ?");
    } else if (distanceFromTop > windowHeight) {
      setLogoValue("🖤🖤🖤");
    } else setLogoValue("ESTELLE GRESILLON");
  };

  const handleLanguageChange = language => {
    i18next__WEBPACK_IMPORTED_MODULE_2___default.a.changeLanguage(language);
    setLanguage(language);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", handleLogoValueChange, false);
    return () => window.removeEventListener("scroll", handleLogoValueChange, false);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentLanguage = i18next__WEBPACK_IMPORTED_MODULE_2___default.a.language;
    setLanguage(currentLanguage);
  }, []);
  return __jsx("header", {
    className: "App-header",
    style: {
      color: showLightTheme ? "#000" : "#fff"
    }
  }, __jsx("div", {
    className: "logo",
    "aria-label": "Estelle Gr\xE9sillon",
    "aria-hidden": "true",
    onClick: () => window.scrollTo(0, 0)
  }, logoValue), __jsx("div", {
    className: "center-menu"
  }, __jsx("div", {
    "aria-hidden": "true",
    className: "theme",
    onClick: () => toggleTheme(showLightTheme)
  }, showLightTheme ? __jsx("i", {
    className: "fas fa-sun"
  }) : __jsx("i", {
    className: "fas fa-moon"
  })), __jsx("div", {
    className: "language-menu",
    style: {
      borderLeft: `1px solid ${showLightTheme ? "#000" : "#fff"}`
    }
  }, __jsx("span", {
    className: language === "fr" ? "bolder" : "",
    onClick: () => handleLanguageChange('fr')
  }, "FR"), __jsx("span", {
    className: language === "en" ? "bolder" : "",
    onClick: () => handleLanguageChange('en')
  }, "EN"))), __jsx("nav", {
    onClick: () => setIsComponentVisible(true)
  }, "MENU ", __jsx("i", {
    className: "fas fa-bars"
  })), isComponentVisible && __jsx("ul", {
    onClick: () => setIsComponentVisible(false),
    ref: ref
  }, __jsx("li", null, __jsx("a", {
    style: {
      color: showLightTheme ? "#000" : "#fff"
    },
    href: "#about"
  }, "ABOUT")), __jsx("li", null, __jsx("a", {
    style: {
      color: showLightTheme ? "#000" : "#fff"
    },
    href: "#projects"
  }, "PROJECTS")), __jsx("li", null, __jsx("a", {
    style: {
      color: showLightTheme ? "#000" : "#fff"
    },
    href: "#contact"
  }, "CONTACT")), __jsx("li", {
    className: "mobile-only"
  }, __jsx("span", {
    className: language === "fr" ? "bolder" : "",
    onClick: () => handleLanguageChange('fr')
  }, "FR"), __jsx("span", {
    className: language === "en" ? "bolder" : "",
    onClick: () => handleLanguageChange('en')
  }, "EN"))));
};

const mapStateToProps = state => {
  return {
    showLightTheme: state.showLightTheme
  };
};

const mapDispatchToProps = dispatch => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    toggleTheme: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["toggleTheme"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/header/header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/hero-scene/hero-scene.js":
/*!*************************************************!*\
  !*** ./src/components/hero-scene/hero-scene.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hero_scene_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-scene.scss */ "./src/components/hero-scene/hero-scene.scss");
/* harmony import */ var _hero_scene_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hero_scene_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HeroScene = ({
  showLightTheme,
  t
}) => {
  const heroCursor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const heroScene = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const heroTitleOne = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const heroTitleTwo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const heroTitleThree = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const heroTitleFour = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const onCursorMove = (e, container, cursor, offset) => {
    const relX = e.pageX - container.offsetLeft - offset;
    const relY = e.pageY - container.offsetTop - offset;
    cursor.style.left = relX + "px";
    cursor.style.top = relY + "px";
  };

  const slideTitleToLeft = e => {
    const containerTop = heroScene.current.offsetTop;
    const distanceFromTop = window.pageYOffset;
    heroTitleOne.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.5},0,0,1)`;
    heroTitleTwo.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.5},0,0,1)`;
    heroTitleThree.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.5},0,0,1)`;
    heroTitleFour.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.5},0,0,1)`;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const heroContainer = heroScene.current;
    const mouseContainer = heroCursor.current;
    heroContainer.addEventListener("mousemove", e => {
      onCursorMove(e, heroContainer, mouseContainer, 280);
    }, false);
    return () => heroContainer.removeEventListener("mousemove", e => {
      onCursorMove(e, heroContainer, mouseContainer, 280);
    }, false);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", slideTitleToLeft, false);
    return () => window.removeEventListener("scroll", slideTitleToLeft, false);
  }, []);
  return __jsx("section", {
    className: "hero-scene",
    ref: heroScene,
    "aria-hidden": "true",
    style: {
      color: showLightTheme ? "#000" : "#fff",
      background: showLightTheme ? "#fff" : "#000"
    }
  }, __jsx("div", {
    className: "hero-cursor",
    ref: heroCursor,
    style: {
      mixBlendMode: showLightTheme ? "screen" : "darken"
    }
  }), __jsx("h1", {
    className: "first",
    ref: heroTitleOne
  }, __jsx("span", {
    className: "title-stroke"
  }, "DESIGNER"), __jsx("span", {
    className: "title-plain"
  }, "UI"), __jsx("span", {
    className: "title-stroke"
  }, "DESIGNER"), __jsx("span", {
    className: "title-plain"
  }, "UI"), __jsx("span", {
    className: "title-stroke"
  }, "DESIGNER")), __jsx("h1", {
    ref: heroTitleTwo
  }, __jsx("span", {
    className: "title-stroke"
  }, "FRONTEND"), __jsx("span", {
    className: "title-plain"
  }, "DEVELOPER"), __jsx("span", {
    className: "title-stroke"
  }, "FRONTEND"), __jsx("span", {
    className: "title-plain"
  }, "DEVELOPER")), __jsx("h1", {
    className: "first mobile-only",
    ref: heroTitleThree
  }, __jsx("span", {
    className: "title-stroke"
  }, "DESIGNER"), __jsx("span", {
    className: "title-plain"
  }, "UI"), __jsx("span", {
    className: "title-stroke"
  }, "DESIGNER"), __jsx("span", {
    className: "title-plain"
  }, "UI"), __jsx("span", {
    className: "title-stroke"
  }, "DESIGNER")), __jsx("h1", {
    className: "mobile-only",
    ref: heroTitleFour
  }, __jsx("span", {
    className: "title-stroke"
  }, "FRONTEND"), __jsx("span", {
    className: "title-plain"
  }, "DEVELOPER"), __jsx("span", {
    className: "title-stroke"
  }, "FRONTEND")), __jsx("ul", {
    className: "skillset"
  }, __jsx("li", null, t('hero-scene.front-end')), __jsx("li", {
    className: "tools"
  }, "REACT.JS - NEXTJS - REDUX - CONTEXT REACT"), __jsx("br", null), __jsx("li", null, "UI DESIGN"), __jsx("li", {
    className: "tools"
  }, "SKETCH - ADOBE - INVISION - ZEPLIN")), __jsx("p", {
    className: "availability"
  }, t('hero-scene.availability')));
};

const mapStateToProps = state => {
  return {
    showLightTheme: state.showLightTheme
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(HeroScene)));

/***/ }),

/***/ "./src/components/hero-scene/hero-scene.scss":
/*!***************************************************!*\
  !*** ./src/components/hero-scene/hero-scene.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/hero-scene/index.js":
/*!********************************************!*\
  !*** ./src/components/hero-scene/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-scene */ "./src/components/hero-scene/hero-scene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _hero_scene__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/projects/constants.js":
/*!**********************************************!*\
  !*** ./src/components/projects/constants.js ***!
  \**********************************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
const PROJECTS = [{
  name: "Rafael Bolano",
  year: 2020,
  img: "rafaelbolano",
  url: "http://rafaelbolano.estellegresillon.fr"
}, {
  name: "Zest",
  year: 2020,
  img: "zest",
  url: "http://zest.estellegresillon.fr"
}, {
  name: "Foodlab",
  year: 2019,
  img: "foodlab",
  url: "https://foodlab.space"
}, {
  name: "Dive In Santorini",
  year: 2019,
  img: "santorini",
  url: "http://santorini.estellegresillon.fr"
}, {
  name: "Otaku Market",
  year: 2018,
  img: "otaku",
  url: "https://www.otaku-market.com"
}, {
  name: "That's My Rock",
  year: 2018,
  img: "thatsmyrock",
  url: "http://www.thatsmyrock.com/"
}];

/***/ }),

/***/ "./src/components/projects/index.js":
/*!******************************************!*\
  !*** ./src/components/projects/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/components/projects/projects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _projects__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/projects/project-item/index.js":
/*!*******************************************************!*\
  !*** ./src/components/projects/project-item/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-item */ "./src/components/projects/project-item/project-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _project_item__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/projects/project-item/project-item.js":
/*!**************************************************************!*\
  !*** ./src/components/projects/project-item/project-item.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_item_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-item.scss */ "./src/components/projects/project-item/project-item.scss");
/* harmony import */ var _project_item_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_project_item_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./src/hooks/useWindowSize.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ProjectItem = ({
  project
}) => {
  const windowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__["useWindowSize"])();
  const projectContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const imgContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const projectTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-project-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-project-on");
  };

  const moveImage = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;
    imgContainer.current.style.transform = `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000001},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.1},${distanceFromMiddleY * -0.1},0,1)`;
  };

  const moveTitle = () => {
    const containerTop = projectContainer.current.offsetTop;
    const distanceFromTop = window.pageYOffset;

    if (project.img === "rafaelbolano" || project.img === "foodlab" || project.img === "otaku") {
      projectTitle.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.6},0,0,1)`;
    } else {
      projectTitle.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.6},0,0,1)`;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (windowSize.width > 728) {
      const section = projectContainer.current;
      section.addEventListener("mousemove", moveImage, false);
      return () => section.removeEventListener("mousemove", moveImage, false);
    } // eslint-disable-next-line

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (windowSize.width > 728) {
      window.addEventListener("scroll", moveTitle, false);
      return () => window.removeEventListener("scroll", moveTitle, false);
    } // eslint-disable-next-line

  }, []);
  return __jsx("div", {
    className: `project-card ${project.img}`,
    ref: projectContainer,
    onClick: () => window.open(project.url, '_blank')
  }, __jsx("h3", {
    ref: projectTitle,
    className: "title-stroke"
  }, project.name), __jsx("h4", {
    className: "title-stroke"
  }, project.year, __jsx("span", {
    "aria-label": "External link"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fas fa-external-link-alt"
  }))), __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"], {
    onEnter: () => handleWaypointEnter(imgContainer.current),
    onLeave: () => handleWaypointLeave(imgContainer.current)
  }, __jsx("img", {
    ref: imgContainer,
    src: `${project.img}.jpg`,
    alt: `${project.name} website preview`
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

/***/ }),

/***/ "./src/components/projects/project-item/project-item.scss":
/*!****************************************************************!*\
  !*** ./src/components/projects/project-item/project-item.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/projects/projects.js":
/*!*********************************************!*\
  !*** ./src/components/projects/projects.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _projects_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.scss */ "./src/components/projects/projects.scss");
/* harmony import */ var _projects_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projects_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/components/projects/constants.js");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-item */ "./src/components/projects/project-item/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Projects = ({
  showLightTheme
}) => {
  return __jsx("section", {
    id: "projects",
    style: {
      color: showLightTheme ? "#000" : "#fff",
      background: showLightTheme ? "#fff" : "#000"
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_3__["PROJECTS"].map(prj => __jsx(_project_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: prj.name,
    project: prj
  })));
};

const mapStateToProps = state => {
  return {
    showLightTheme: state.showLightTheme
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Projects));

/***/ }),

/***/ "./src/components/projects/projects.scss":
/*!***********************************************!*\
  !*** ./src/components/projects/projects.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/hooks/useComponentVisible.js":
/*!******************************************!*\
  !*** ./src/hooks/useComponentVisible.js ***!
  \******************************************/
/*! exports provided: useComponentVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponentVisible", function() { return useComponentVisible; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useComponentVisible = initialIsVisible => {
  const {
    0: isComponentVisible,
    1: setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialIsVisible);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return {
    ref,
    isComponentVisible,
    setIsComponentVisible
  };
};

/***/ }),

/***/ "./src/hooks/useWindowSize.js":
/*!************************************!*\
  !*** ./src/hooks/useWindowSize.js ***!
  \************************************/
/*! exports provided: useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWindowSize = () => {
  const isClient = false;

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  };

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // eslint-disable-next-line
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/app-layout */ "./src/components/app-layout.js");
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/app */ "./src/components/app.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  // static getInitialProps({store, isServer, pathname, query}) {
  //     store.dispatch({type: 'FOO', payload: 'foo'}); // component will be able to read from store's state when rendered
  //     return {custom: 'custom'}; // you can pass some custom props to component from here
  // }
  render() {
    return __jsx(_components_app_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_app__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(Page));

/***/ }),

/***/ "./src/redux/actions.js":
/*!******************************!*\
  !*** ./src/redux/actions.js ***!
  \******************************/
/*! exports provided: toggleTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTheme", function() { return toggleTheme; });
const toggleTheme = boolean => {
  return {
    type: "TOGGLE_THEME",
    payload: boolean
  };
};

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/estellegresillon/Code/eg-portfolio/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-waypoint":
/*!*********************************!*\
  !*** external "react-waypoint" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map