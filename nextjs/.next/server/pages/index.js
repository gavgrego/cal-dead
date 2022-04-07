(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 258:
/***/ ((module) => {

// Exports
module.exports = {
	"calendar": "styles_calendar__GO3h2"
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

/***/ 277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-big-calendar"
const external_react_big_calendar_namespaceObject = require("react-big-calendar");
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: external "date-fns/locale/en-US"
const en_US_namespaceObject = require("date-fns/locale/en-US");
var en_US_default = /*#__PURE__*/__webpack_require__.n(en_US_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/calendar/styles.module.scss
var styles_module = __webpack_require__(258);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/calendar/index.tsx







const locales = {
    "en-US": (en_US_default())
};
const localizer = (0,external_react_big_calendar_namespaceObject.dateFnsLocalizer)({
    format: external_date_fns_namespaceObject.format,
    parse: external_date_fns_namespaceObject.parse,
    startOfWeek: external_date_fns_namespaceObject.startOfWeek,
    getDay: external_date_fns_namespaceObject.getDay,
    locales
});
const Calendar = ({ events  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    console.log(events);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (styles_module_default()).calendar,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_big_calendar_namespaceObject.Calendar, {
            localizer: localizer,
            events: events,
            startAccessor: "start",
            endAccessor: "end",
            showAllEvents: true,
            style: {
                height: 650
            },
            onSelectEvent: (event)=>router.push(`/events/${event.id}`)
        })
    }));
};
/* harmony default export */ const calendar = (Calendar);

// EXTERNAL MODULE: ./hooks/useFetchApi.ts
var useFetchApi = __webpack_require__(43);
;// CONCATENATED MODULE: ./pages/index.tsx



const Home = ({ events  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-4 grid-flow-col gap-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-span-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx(calendar, {
                    events: events
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-span-1"
            })
        ]
    }));
};
const getStaticProps = async ()=>{
    const eventsRes = await (0,useFetchApi/* default */.Z)("api/events");
    // implement graphql
    eventsRes.data.forEach((event)=>{
        event.id = event.id;
        event.start = new Date(event.attributes.start).toJSON();
        event.end = new Date(event.attributes.end).toJSON();
        event.title = event.attributes.name;
    });
    return {
        props: {
            events: eventsRes.data
        }
    };
};
/* harmony default export */ const pages = (Home);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(277));
module.exports = __webpack_exports__;

})();