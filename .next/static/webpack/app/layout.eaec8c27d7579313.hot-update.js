"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"46e85e22728a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzlmMDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0NmU4NWUyMjcyOGFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/ui/Navbar.tsx":
/*!**************************************!*\
  !*** ./app/components/ui/Navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_AddSharp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/AddSharp */ \"(app-pages-browser)/./node_modules/@mui/icons-material/AddSharp.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [close, setClose] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const NavLinks = [\n        {\n            id: 1,\n            name: \"Home\",\n            path: \"/\"\n        },\n        {\n            id: 2,\n            name: \"About\",\n            path: \"/about\"\n        },\n        {\n            id: 3,\n            name: \"Services\",\n            path: \"/services\"\n        },\n        {\n            id: 4,\n            name: \"Projects\",\n            path: \"/projects\"\n        },\n        {\n            id: 4,\n            name: \"Contact\",\n            path: \"/contact\"\n        }\n    ];\n    const handleMenu = ()=>{\n        setClose((prev)=>prev = !prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-6 right-6 p-2 border border-[#333333] rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-[12px] h-7 \".concat(close ? \"w-6\" : \"w-full\", \" flex items-center gap-2 overflow-hidden\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddSharp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"\".concat(close ? \"rotate-0\" : \"rotate-45\"),\n                            onClick: handleMenu\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        NavLinks.map((n)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: n.path,\n                                children: n.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"hidden cst-md:flex  flex-col fixed top-56 left-10\",\n                children: NavLinks.map((n, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hover:translate-x-2 duration-1000 transition-all ease-in-out\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: \"cursor-none  \".concat(path == n.path ? \"text-white font-medium\" : \"text-[#666666]\"),\n                            href: n.path,\n                            children: n.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"cThkKWiseX+vIs547TQjexoBUts=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3VpL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTZCO0FBQ2lCO0FBQ2I7QUFDdUI7QUFFeEQsTUFBTUksU0FBUzs7SUFDYixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTUssT0FBT04sNERBQVdBO0lBQ3hCLE1BQU1PLFdBQVc7UUFDZjtZQUFFQyxJQUFJO1lBQUdDLE1BQU07WUFBUUgsTUFBTTtRQUFJO1FBQ2pDO1lBQUVFLElBQUk7WUFBR0MsTUFBTTtZQUFTSCxNQUFNO1FBQVM7UUFDdkM7WUFBRUUsSUFBSTtZQUFHQyxNQUFNO1lBQVlILE1BQU07UUFBWTtRQUM3QztZQUFFRSxJQUFJO1lBQUdDLE1BQU07WUFBWUgsTUFBTTtRQUFZO1FBQzdDO1lBQUVFLElBQUk7WUFBR0MsTUFBTTtZQUFXSCxNQUFNO1FBQVc7S0FDNUM7SUFFRCxNQUFNSSxhQUFhO1FBQ2pCTCxTQUFTLENBQUNNLE9BQVVBLE9BQU8sQ0FBQ0E7SUFDOUI7SUFDQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQ0NDLFdBQVcsbUJBRVYsT0FEQ1YsUUFBUSxRQUFRLFVBQ2pCOztzQ0FFRCw4REFBQ0Ysb0VBQVlBOzRCQUNYWSxXQUFXLEdBQW9DLE9BQWpDVixRQUFRLGFBQWE7NEJBQ25DVyxTQUFTTDs7Ozs7O3dCQUVWSCxTQUFTUyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ2IsOERBQUNsQixpREFBSUE7Z0NBQUNtQixNQUFNRCxFQUFFWCxJQUFJOzBDQUFHVyxFQUFFUixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJakMsOERBQUNVO2dCQUFHTCxXQUFVOzBCQUNYUCxTQUFTUyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0csa0JBQ2hCLDhEQUFDQzt3QkFFQ1AsV0FBVTtrQ0FFViw0RUFBQ2YsaURBQUlBOzRCQUNIZSxXQUFXLGdCQUVWLE9BRENSLFFBQVFXLEVBQUVYLElBQUksR0FBRywyQkFBMkI7NEJBRTlDWSxNQUFNRCxFQUFFWCxJQUFJO3NDQUVYVyxFQUFFUixJQUFJOzs7Ozs7dUJBVEpXOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JqQjtHQWxETWpCOztRQUVTSCx3REFBV0E7OztLQUZwQkc7QUFvRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvdWkvTmF2YmFyLnRzeD9kNjBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZFNoYXJwSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BZGRTaGFycFwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjbG9zZSwgc2V0Q2xvc2VdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgcGF0aCA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgY29uc3QgTmF2TGlua3MgPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIkhvbWVcIiwgcGF0aDogXCIvXCIgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiQWJvdXRcIiwgcGF0aDogXCIvYWJvdXRcIiB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogXCJTZXJ2aWNlc1wiLCBwYXRoOiBcIi9zZXJ2aWNlc1wiIH0sXHJcbiAgICB7IGlkOiA0LCBuYW1lOiBcIlByb2plY3RzXCIsIHBhdGg6IFwiL3Byb2plY3RzXCIgfSxcclxuICAgIHsgaWQ6IDQsIG5hbWU6IFwiQ29udGFjdFwiLCBwYXRoOiBcIi9jb250YWN0XCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0Q2xvc2UoKHByZXYpID0+IChwcmV2ID0gIXByZXYpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC02IHJpZ2h0LTYgcC0yIGJvcmRlciBib3JkZXItWyMzMzMzMzNdIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVsxMnB4XSBoLTcgJHtcclxuICAgICAgICAgICAgY2xvc2UgPyBcInctNlwiIDogXCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgfSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBvdmVyZmxvdy1oaWRkZW5gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBZGRTaGFycEljb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbG9zZSA/IFwicm90YXRlLTBcIiA6IFwicm90YXRlLTQ1XCJ9YH1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVudX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7TmF2TGlua3MubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e24ucGF0aH0+e24ubmFtZX08L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gY3N0LW1kOmZsZXggIGZsZXgtY29sIGZpeGVkIHRvcC01NiBsZWZ0LTEwXCI+XHJcbiAgICAgICAge05hdkxpbmtzLm1hcCgobiwgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dHJhbnNsYXRlLXgtMiBkdXJhdGlvbi0xMDAwIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3Itbm9uZSAgJHtcclxuICAgICAgICAgICAgICAgIHBhdGggPT0gbi5wYXRoID8gXCJ0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtXCIgOiBcInRleHQtWyM2NjY2NjZdXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBocmVmPXtuLnBhdGh9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bi5uYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VQYXRobmFtZSIsInVzZVN0YXRlIiwiQWRkU2hhcnBJY29uIiwiTmF2YmFyIiwiY2xvc2UiLCJzZXRDbG9zZSIsInBhdGgiLCJOYXZMaW5rcyIsImlkIiwibmFtZSIsImhhbmRsZU1lbnUiLCJwcmV2IiwibmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsIm1hcCIsIm4iLCJocmVmIiwidWwiLCJpIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ui/Navbar.tsx\n"));

/***/ })

});