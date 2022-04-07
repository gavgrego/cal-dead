(() => {
var exports = {};
exports.id = 32;
exports.ids = [32];
exports.modules = {

/***/ 335:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "styles_sidebar__QLwjG"
};


/***/ }),

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = "http://localhost:1337";
const UseFetchApi = async (path, params = null)=>{
    let url;
    if (params !== null) {
        url = `${baseUrl}/${path}/${params}`;
    } else {
        url = `${baseUrl}/${path}`;
    }
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UseFetchApi);


/***/ }),

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useFetchApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(335);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);





const Event = ({ event  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                span: 3,
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sidebar),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            position: "relative"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            layout: "responsive",
                            width: 100,
                            height: 100,
                            objectFit: "contain",
                            objectPosition: "relative",
                            src: `${"http://localhost:1337"}${event.attributes.Image.data.attributes.url}`
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                        width: "600",
                        height: "350",
                        loading: "eager",
                        style: {
                            border: 0
                        },
                        src: `https://www.google.com/maps/embed/v1/place?key=AIzaSyBwrcWGY7goOo274Qh2dtJgrEh-L3gxaqA&zoom=10&q=/${event.attributes.Address}`
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                span: 9,
                children: event.attributes.Content
            })
        ]
    }));
};
const getStaticPaths = async ()=>{
    const { data  } = await (0,_hooks_useFetchApi__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("api/events");
    const paths = data.map((event)=>({
            params: {
                id: event.id.toString()
            }
        })
    );
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const { data  } = await (0,_hooks_useFetchApi__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(`api/events/${params === null || params === void 0 ? void 0 : params.id}?populate=Image`);
    return {
        props: {
            event: data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Event);


/***/ }),

/***/ 247:
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(99)));
module.exports = __webpack_exports__;

})();