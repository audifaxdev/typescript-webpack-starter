/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/audifax/projects/tsx-redux-webpack2-starter-kit/bin";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_bootstrap__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_bootstrap__);




const MyNavBar = (props) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Navbar"], null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Navbar"].Header, null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Navbar"].Brand, null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/" },
                "Welcome @ React TSX Starter KIT ;  ",
                props.slug)),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Navbar"].Toggle, null)),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Navbar"].Collapse, null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Nav"], { activeKey: "3.3", pullRight: true },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_bootstrap__["IndexLinkContainer"], { to: "/" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavItem"], { href: "/", eventKey: 1 }, "Home")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_bootstrap__["IndexLinkContainer"], { to: "/about" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavItem"], { href: "/about", eventKey: 2 }, "About")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavDropdown"], { eventKey: 3, title: "Profile", id: "basic-nav-dropdown" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { eventKey: 3.1 }, "Login"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { eventKey: 3.2 }, "Logout"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { eventKey: 3.3 }, "Username"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { divider: true }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { eventKey: 3.3 }, "Separated link"))))));
/* harmony export (immutable) */ __webpack_exports__["a"] = MyNavBar;



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);





const App = (props) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"], { store: props.store },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: props.history },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_2__components_home__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/about", component: __WEBPACK_IMPORTED_MODULE_3__components_about__["a" /* About */] }))));
/* harmony export (immutable) */ __webpack_exports__["a"] = App;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = counter;
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("es6-template-strings/compile.js");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("es6-template-strings/resolve-to-string.js");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar__ = __webpack_require__(2);


const About = () => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__navbar__["a" /* MyNavBar */], { slug: "About" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "On the about page"))));
/* harmony export (immutable) */ __webpack_exports__["a"] = About;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_actions__ = __webpack_require__(16);





;
class Home extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        let { counter, increment, decrement } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__navbar__["a" /* MyNavBar */], { slug: "Home" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Carousel"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Carousel"].Item, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Image"], { responsive: true, className: "center-block", width: 900, height: 500, alt: "900x500", src: "/dist/carousel.png" }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Carousel"].Caption, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "First slide label"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Nulla vitae elit libero, a pharetra augue mollis interdum."))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Carousel"].Item, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Image"], { responsive: true, className: "center-block", width: 900, height: 500, alt: "900x500", src: "/dist/carousel.png" }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Carousel"].Caption, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Second slide label"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Carousel"].Item, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Image"], { responsive: true, className: "center-block", width: 900, height: 500, alt: "900x500", src: "/dist/carousel.png" }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Carousel"].Caption, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Third slide label"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "On the homepage."),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Todos"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null,
                    "counter: ",
                    counter),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ButtonToolbar"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { onClick: increment }, "Increment"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { onClick: decrement }, "Decrement")))));
    }
}
/* unused harmony export Home */

const stateToProps = (state) => ({ counter: state });
const actionsToProps = (dispatch) => ({
    increment: () => dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__redux_actions__["a" /* increment */])()),
    decrement: () => dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__redux_actions__["b" /* decrement */])()),
});
/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"](stateToProps, actionsToProps)(Home);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const INCREMENT_COUNTER = 'INCREMENT';
/* unused harmony export INCREMENT_COUNTER */

const DECREMENT_COUNTER = 'DECREMENT';
/* unused harmony export DECREMENT_COUNTER */

const increment = () => {
    return {
        type: INCREMENT_COUNTER,
    };
};
/* harmony export (immutable) */ __webpack_exports__["a"] = increment;

const decrement = () => {
    return {
        type: DECREMENT_COUNTER,
    };
};
/* harmony export (immutable) */ __webpack_exports__["b"] = decrement;



/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_es6_template_strings_compile_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_es6_template_strings_compile_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_es6_template_strings_compile_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_es6_template_strings_resolve_to_string_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_es6_template_strings_resolve_to_string_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_es6_template_strings_resolve_to_string_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__redux_reducers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app__ = __webpack_require__(5);











const reactMustRender = ['/', 'index.html', 'index.htm', 'index'];
const indexFilePath = "/Users/audifax/projects/tsx-redux-webpack2-starter-kit" + '/public/index.html';
if (!__WEBPACK_IMPORTED_MODULE_1_fs__["existsSync"](indexFilePath)) {
    console.log(indexFilePath + ' not found');
    process.exit(1);
}
let indexHtml = __WEBPACK_IMPORTED_MODULE_3_es6_template_strings_compile_js___default()(__WEBPACK_IMPORTED_MODULE_1_fs__["readFileSync"](indexFilePath));
__WEBPACK_IMPORTED_MODULE_1_fs__["watchFile"](indexFilePath, () => {
    console.log(indexFilePath + ' has changed : reloading...');
    indexHtml = __WEBPACK_IMPORTED_MODULE_3_es6_template_strings_compile_js___default()(__WEBPACK_IMPORTED_MODULE_1_fs__["readFileSync"](indexFilePath));
});
const server = __WEBPACK_IMPORTED_MODULE_0_express__();
let ReactServerMiddleware = (req, res, next) => {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["includes"])(reactMustRender, req.path) && __WEBPACK_IMPORTED_MODULE_1_fs__["existsSync"]("/Users/audifax/projects/tsx-redux-webpack2-starter-kit" + '/public' + req.path)) {
        return next();
    }
    const history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_router__["createMemoryHistory"])();
    const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_9__redux_reducers__["a" /* default */]);
    history.createLocation(req.url);
    const appString = __WEBPACK_IMPORTED_MODULE_7_react_dom_server__["renderToString"](__WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10__app__["a" /* App */], { store: store, history: history }));
    let data = __WEBPACK_IMPORTED_MODULE_4_es6_template_strings_resolve_to_string_js___default()(indexHtml, {
        body: appString,
        title: 'TS/React Server-side Rendering ON',
        initialState: JSON.stringify(store.getState())
    });
    res.send(data);
};
server.use(ReactServerMiddleware);
server.use('/', __WEBPACK_IMPORTED_MODULE_0_express__["static"]('public'));
server.listen(8080);
console.log('React Server Rendering ON : Listening on 8080');


/***/ })
/******/ ]);