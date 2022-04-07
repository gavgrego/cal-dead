/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/calendar/styles.module.scss":
/*!************************************************!*\
  !*** ./components/calendar/styles.module.scss ***!
  \************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"calendar\": \"styles_calendar__GO3h2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhbGVuZGFyL3N0eWxlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbC1kZWFkLy4vY29tcG9uZW50cy9jYWxlbmRhci9zdHlsZXMubW9kdWxlLnNjc3M/Mjg5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYWxlbmRhclwiOiBcInN0eWxlc19jYWxlbmRhcl9fR08zaDJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/calendar/styles.module.scss\n");

/***/ }),

/***/ "./components/calendar/index.tsx":
/*!***************************************!*\
  !*** ./components/calendar/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-big-calendar */ \"react-big-calendar\");\n/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale/en-US */ \"date-fns/locale/en-US\");\n/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/calendar/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst locales = {\n    \"en-US\": (date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_3___default())\n};\nconst localizer = (0,react_big_calendar__WEBPACK_IMPORTED_MODULE_1__.dateFnsLocalizer)({\n    format: date_fns__WEBPACK_IMPORTED_MODULE_2__.format,\n    parse: date_fns__WEBPACK_IMPORTED_MODULE_2__.parse,\n    startOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfWeek,\n    getDay: date_fns__WEBPACK_IMPORTED_MODULE_2__.getDay,\n    locales\n});\nconst Calendar = ({ events  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    console.log(events);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().calendar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_big_calendar__WEBPACK_IMPORTED_MODULE_1__.Calendar, {\n            localizer: localizer,\n            events: events,\n            startAccessor: \"start\",\n            endAccessor: \"end\",\n            showAllEvents: true,\n            style: {\n                height: 650\n            },\n            onSelectEvent: (event)=>router.push(`/events/${event.id}`)\n        }, void 0, false, {\n            fileName: \"/Users/gavin/Sites/cal-dead/client/components/calendar/index.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gavin/Sites/cal-dead/client/components/calendar/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calendar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQ2hCO0FBQ3JCO0FBQ0Q7QUFDRTtBQUNGO0FBRXZDLEtBQUssQ0FBQ1csT0FBTyxHQUFHLENBQUM7SUFDZixDQUFPLFFBQUVKLDhEQUFJO0FBQ2YsQ0FBQztBQUVELEtBQUssQ0FBQ0ssU0FBUyxHQUFHVixvRUFBZ0IsQ0FBQyxDQUFDO0lBQ2xDQyxNQUFNO0lBQ05DLEtBQUs7SUFDTEMsV0FBVztJQUNYQyxNQUFNO0lBQ05LLE9BQU87QUFDVCxDQUFDO0FBVUQsS0FBSyxDQUFDWCxRQUFRLElBQXFCLENBQUMsQ0FBQ2EsTUFBTSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ2pELEtBQUssQ0FBQ0MsTUFBTSxHQUFHSixzREFBUztJQUN4QkssT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU07SUFFbEIsTUFBTSw2RUFDSEksQ0FBRztRQUFDQyxTQUFTLEVBQUVULHFFQUFlOzhGQUM1QlIsd0RBQUc7WUFDRlcsU0FBUyxFQUFFQSxTQUFTO1lBQ3BCQyxNQUFNLEVBQUVBLE1BQU07WUFDZE8sYUFBYSxFQUFDLENBQU87WUFDckJDLFdBQVcsRUFBQyxDQUFLO1lBQ2pCQyxhQUFhLEVBQUUsSUFBSTtZQUNuQkMsS0FBSyxFQUFFLENBQUM7Z0JBQUNDLE1BQU0sRUFBRSxHQUFHO1lBQUMsQ0FBQztZQUN0QkMsYUFBYSxHQUFHQyxLQUFLLEdBQUtaLE1BQU0sQ0FBQ2EsSUFBSSxFQUFFLFFBQVEsRUFBRUQsS0FBSyxDQUFDRSxFQUFFOzs7Ozs7Ozs7OztBQUlqRSxDQUFDO0FBRUQsaUVBQWU1QixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWwtZGVhZC8uL2NvbXBvbmVudHMvY2FsZW5kYXIvaW5kZXgudHN4PzMxZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsZW5kYXIgYXMgQ2FsLCBkYXRlRm5zTG9jYWxpemVyLCBFdmVudCB9IGZyb20gXCJyZWFjdC1iaWctY2FsZW5kYXJcIjtcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2UsIHN0YXJ0T2ZXZWVrLCBnZXREYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBlblVTIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBsb2NhbGVzID0ge1xuICBcImVuLVVTXCI6IGVuVVMsXG59O1xuXG5jb25zdCBsb2NhbGl6ZXIgPSBkYXRlRm5zTG9jYWxpemVyKHtcbiAgZm9ybWF0LFxuICBwYXJzZSxcbiAgc3RhcnRPZldlZWssXG4gIGdldERheSxcbiAgbG9jYWxlcyxcbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgaWQ6IG51bWJlcjtcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgZXZlbnRzOiBURXZlbnRbXTtcbn07XG5cbmNvbnN0IENhbGVuZGFyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBldmVudHMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2coZXZlbnRzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJ9PlxuICAgICAgPENhbFxuICAgICAgICBsb2NhbGl6ZXI9e2xvY2FsaXplcn1cbiAgICAgICAgZXZlbnRzPXtldmVudHN9XG4gICAgICAgIHN0YXJ0QWNjZXNzb3I9XCJzdGFydFwiXG4gICAgICAgIGVuZEFjY2Vzc29yPVwiZW5kXCJcbiAgICAgICAgc2hvd0FsbEV2ZW50cz17dHJ1ZX1cbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA2NTAgfX1cbiAgICAgICAgb25TZWxlY3RFdmVudD17KGV2ZW50KSA9PiByb3V0ZXIucHVzaChgL2V2ZW50cy8ke2V2ZW50LmlkfWApfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyO1xuIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwiQ2FsIiwiZGF0ZUZuc0xvY2FsaXplciIsImZvcm1hdCIsInBhcnNlIiwic3RhcnRPZldlZWsiLCJnZXREYXkiLCJlblVTIiwiUmVhY3QiLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJsb2NhbGVzIiwibG9jYWxpemVyIiwiZXZlbnRzIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNhbGVuZGFyIiwic3RhcnRBY2Nlc3NvciIsImVuZEFjY2Vzc29yIiwic2hvd0FsbEV2ZW50cyIsInN0eWxlIiwiaGVpZ2h0Iiwib25TZWxlY3RFdmVudCIsImV2ZW50IiwicHVzaCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/calendar/index.tsx\n");

/***/ }),

/***/ "./hooks/useFetchApi.ts":
/*!******************************!*\
  !*** ./hooks/useFetchApi.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst baseUrl = \"http://localhost:1337\";\nconst useFetchApi = async (path, params = null)=>{\n    let url;\n    if (params !== null) {\n        url = `${baseUrl}/${path}/${params}`;\n    } else {\n        url = `${baseUrl}/${path}`;\n    }\n    const response = await fetch(`${url}`);\n    const data = await response.json();\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetchApi);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VGZXRjaEFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsS0FBSyxDQUFDQSxPQUFPLEdBQUcsQ0FBdUI7QUFFdkMsS0FBSyxDQUFDQyxXQUFXLFVBQVVDLElBQVksRUFBRUMsTUFBTSxHQUFHLElBQUksR0FBSyxDQUFDO0lBQzFELEdBQUcsQ0FBQ0MsR0FBRztJQUNQLEVBQUUsRUFBRUQsTUFBTSxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCQyxHQUFHLE1BQU1KLE9BQU8sQ0FBQyxDQUFDLEVBQUVFLElBQUksQ0FBQyxDQUFDLEVBQUVDLE1BQU07SUFDcEMsQ0FBQyxNQUFNLENBQUM7UUFDTkMsR0FBRyxNQUFNSixPQUFPLENBQUMsQ0FBQyxFQUFFRSxJQUFJO0lBQzFCLENBQUM7SUFFRCxLQUFLLENBQUNHLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssSUFBSUYsR0FBRztJQUNuQyxLQUFLLENBQUNHLElBQUksR0FBRyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csSUFBSTtJQUNoQyxNQUFNLENBQUNELElBQUk7QUFDYixDQUFDO0FBQ0QsaUVBQWVOLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbC1kZWFkLy4vaG9va3MvdXNlRmV0Y2hBcGkudHM/MGRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSwgVXNlUXVlcnlSZXN1bHQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG5cbmNvbnN0IHVzZUZldGNoQXBpID0gYXN5bmMgKHBhdGg6IHN0cmluZywgcGFyYW1zID0gbnVsbCkgPT4ge1xuICBsZXQgdXJsO1xuICBpZiAocGFyYW1zICE9PSBudWxsKSB7XG4gICAgdXJsID0gYCR7YmFzZVVybH0vJHtwYXRofS8ke3BhcmFtc31gO1xuICB9IGVsc2Uge1xuICAgIHVybCA9IGAke2Jhc2VVcmx9LyR7cGF0aH1gO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUZldGNoQXBpO1xuIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJ1c2VGZXRjaEFwaSIsInBhdGgiLCJwYXJhbXMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useFetchApi.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/calendar */ \"./components/calendar/index.tsx\");\n/* harmony import */ var _hooks_useFetchApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useFetchApi */ \"./hooks/useFetchApi.ts\");\n\n\n\nconst Home = ({ events  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-4 grid-flow-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_calendar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    events: events\n                }, void 0, false, {\n                    fileName: \"/Users/gavin/Sites/cal-dead/client/pages/index.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gavin/Sites/cal-dead/client/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-1\"\n            }, void 0, false, {\n                fileName: \"/Users/gavin/Sites/cal-dead/client/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gavin/Sites/cal-dead/client/pages/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined));\n};\nconst getStaticProps = async ()=>{\n    const eventsRes = await (0,_hooks_useFetchApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"api/events\");\n    // implement graphql\n    eventsRes.data.forEach((event)=>{\n        event.id = event.id;\n        event.start = new Date(event.attributes.start).toJSON();\n        event.end = new Date(event.attributes.end).toJSON();\n        event.title = event.attributes.name;\n    });\n    return {\n        props: {\n            events: eventsRes.data\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2QztBQUNDO0FBRTlDLEtBQUssQ0FBQ0UsSUFBSSxJQUFjLENBQUMsQ0FDdkJDLE1BQU0sRUFDd0MsQ0FBQyxHQUFLLENBQUM7SUFDckQsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBc0M7O3dGQUNsREQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVk7c0dBQ3hCTCw0REFBUTtvQkFBQ0csTUFBTSxFQUFFQSxNQUFNOzs7Ozs7Ozs7Ozt3RkFFekJDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFZOzs7Ozs7Ozs7Ozs7QUFNakMsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsY0FBYyxhQUErQixDQUFDO0lBQ3pELEtBQUssQ0FBQ0MsU0FBUyxHQUFHLEtBQUssQ0FBQ04sOERBQVcsQ0FBQyxDQUFZO0lBRWhELEVBQW9CO0lBQ3BCTSxTQUFTLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxFQUFFQyxLQUFVLEdBQUssQ0FBQztRQUN0Q0EsS0FBSyxDQUFDQyxFQUFFLEdBQUdELEtBQUssQ0FBQ0MsRUFBRTtRQUNuQkQsS0FBSyxDQUFDRSxLQUFLLEdBQUcsR0FBRyxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQ0ksVUFBVSxDQUFDRixLQUFLLEVBQUVHLE1BQU07UUFDckRMLEtBQUssQ0FBQ00sR0FBRyxHQUFHLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDSCxLQUFLLENBQUNJLFVBQVUsQ0FBQ0UsR0FBRyxFQUFFRCxNQUFNO1FBQ2pETCxLQUFLLENBQUNPLEtBQUssR0FBR1AsS0FBSyxDQUFDSSxVQUFVLENBQUNJLElBQUk7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ05DLEtBQUssRUFBRSxDQUFDO1lBQ05oQixNQUFNLEVBQUVJLFNBQVMsQ0FBQ0MsSUFBSTtRQUN4QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZU4sSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsLWRlYWQvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlLCBHZXRTdGF0aWNQcm9wcywgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuLi9jb21wb25lbnRzL2NhbGVuZGFyXCI7XG5pbXBvcnQgdXNlRmV0Y2hBcGkgZnJvbSBcIi4uL2hvb2tzL3VzZUZldGNoQXBpXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKHtcbiAgZXZlbnRzLFxufTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBncmlkLWZsb3ctY29sIGdhcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTNcIj5cbiAgICAgICAgPENhbGVuZGFyIGV2ZW50cz17ZXZlbnRzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgey8qIDxDYURhaWx5U2hvdyAvPiAqL31cbiAgICAgICAgey8qIDxPdGhlclNpdGVzIC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBldmVudHNSZXMgPSBhd2FpdCB1c2VGZXRjaEFwaShcImFwaS9ldmVudHNcIik7XG5cbiAgLy8gaW1wbGVtZW50IGdyYXBocWxcbiAgZXZlbnRzUmVzLmRhdGEuZm9yRWFjaCgoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LmlkID0gZXZlbnQuaWQ7XG4gICAgZXZlbnQuc3RhcnQgPSBuZXcgRGF0ZShldmVudC5hdHRyaWJ1dGVzLnN0YXJ0KS50b0pTT04oKTtcbiAgICBldmVudC5lbmQgPSBuZXcgRGF0ZShldmVudC5hdHRyaWJ1dGVzLmVuZCkudG9KU09OKCk7XG4gICAgZXZlbnQudGl0bGUgPSBldmVudC5hdHRyaWJ1dGVzLm5hbWU7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGV2ZW50czogZXZlbnRzUmVzLmRhdGEsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiQ2FsZW5kYXIiLCJ1c2VGZXRjaEFwaSIsIkhvbWUiLCJldmVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJnZXRTdGF0aWNQcm9wcyIsImV2ZW50c1JlcyIsImRhdGEiLCJmb3JFYWNoIiwiZXZlbnQiLCJpZCIsInN0YXJ0IiwiRGF0ZSIsImF0dHJpYnV0ZXMiLCJ0b0pTT04iLCJlbmQiLCJ0aXRsZSIsIm5hbWUiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ "date-fns/locale/en-US":
/*!****************************************!*\
  !*** external "date-fns/locale/en-US" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/locale/en-US");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-big-calendar":
/*!*************************************!*\
  !*** external "react-big-calendar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-big-calendar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();