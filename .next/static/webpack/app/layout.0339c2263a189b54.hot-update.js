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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"638b8bc796a1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzlmMDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2MzhiOGJjNzk2YTFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/ui/Navbar.tsx":
/*!**************************************!*\
  !*** ./app/components/ui/Navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_AddSharp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/AddSharp */ \"(app-pages-browser)/./node_modules/@mui/icons-material/AddSharp.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [close, setClose] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const NavLinks = [\n        {\n            id: 1,\n            name: \"Home\",\n            path: \"/\"\n        },\n        {\n            id: 2,\n            name: \"About\",\n            path: \"/about\"\n        },\n        {\n            id: 3,\n            name: \"Services\",\n            path: \"/services\"\n        },\n        {\n            id: 4,\n            name: \"Projects\",\n            path: \"/projects\"\n        },\n        {\n            id: 5,\n            name: \"Contact\",\n            path: \"/contact\"\n        }\n    ];\n    const handleMenu = ()=>{\n        setClose((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-6 right-6 p-2 border border-[#333333] rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"transition-width duration-500 h-7 \".concat(close ? \"w-7\" : \"w-72\", \" flex items-center gap-2 overflow-hidden\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: handleMenu,\n                            className: \" py-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddSharp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"transition-transform duration-500 \".concat(close ? \"rotate-0\" : \"rotate-45\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex \".concat(close ? \"hidden\" : \"flex\"),\n                            children: NavLinks.map((n)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: n.path,\n                                    className: \"text-white\",\n                                    children: n.name\n                                }, n.id, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"hidden md:flex flex-col fixed top-56 left-10\",\n                children: NavLinks.map((n, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hover:translate-x-2 duration-1000 transition-all ease-in-out\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: \"cursor-none \".concat(path === n.path ? \"text-white font-medium\" : \"text-[#666666]\"),\n                            href: n.path,\n                            children: n.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\portfolio\\\\app\\\\components\\\\ui\\\\Navbar.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"cThkKWiseX+vIs547TQjexoBUts=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3VpL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTZCO0FBQ2lCO0FBQ2I7QUFDdUI7QUFFeEQsTUFBTUksU0FBUzs7SUFDYixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTUssT0FBT04sNERBQVdBO0lBQ3hCLE1BQU1PLFdBQVc7UUFDZjtZQUFFQyxJQUFJO1lBQUdDLE1BQU07WUFBUUgsTUFBTTtRQUFJO1FBQ2pDO1lBQUVFLElBQUk7WUFBR0MsTUFBTTtZQUFTSCxNQUFNO1FBQVM7UUFDdkM7WUFBRUUsSUFBSTtZQUFHQyxNQUFNO1lBQVlILE1BQU07UUFBWTtRQUM3QztZQUFFRSxJQUFJO1lBQUdDLE1BQU07WUFBWUgsTUFBTTtRQUFZO1FBQzdDO1lBQUVFLElBQUk7WUFBR0MsTUFBTTtZQUFXSCxNQUFNO1FBQVc7S0FDNUM7SUFFRCxNQUFNSSxhQUFhO1FBQ2pCTCxTQUFTLENBQUNNLE9BQVMsQ0FBQ0E7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQ0NDLFdBQVcscUNBRVYsT0FEQ1YsUUFBUSxRQUFRLFFBQ2pCOztzQ0FFRCw4REFBQ1M7NEJBQUlFLFNBQVNMOzRCQUFZSSxXQUFVO3NDQUNsQyw0RUFBQ1osb0VBQVlBO2dDQUNYWSxXQUFXLHFDQUVWLE9BRENWLFFBQVEsYUFBYTs7Ozs7Ozs7Ozs7c0NBSTNCLDhEQUFDUzs0QkFBSUMsV0FBVyxRQUFrQyxPQUExQlYsUUFBUSxXQUFXO3NDQUN4Q0csU0FBU1MsR0FBRyxDQUFDLENBQUNDLGtCQUNiLDhEQUFDbEIsaURBQUlBO29DQUFZbUIsTUFBTUQsRUFBRVgsSUFBSTtvQ0FBRVEsV0FBVTs4Q0FDdENHLEVBQUVSLElBQUk7bUNBREVRLEVBQUVULEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPdkIsOERBQUNXO2dCQUFHTCxXQUFVOzBCQUNYUCxTQUFTUyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0csa0JBQ2hCLDhEQUFDQzt3QkFFQ1AsV0FBVTtrQ0FFViw0RUFBQ2YsaURBQUlBOzRCQUNIZSxXQUFXLGVBRVYsT0FEQ1IsU0FBU1csRUFBRVgsSUFBSSxHQUFHLDJCQUEyQjs0QkFFL0NZLE1BQU1ELEVBQUVYLElBQUk7c0NBRVhXLEVBQUVSLElBQUk7Ozs7Ozt1QkFUSlc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmpCO0dBMURNakI7O1FBRVNILHdEQUFXQTs7O0tBRnBCRztBQTRETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy91aS9OYXZiYXIudHN4P2Q2MGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkU2hhcnBJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFNoYXJwXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Nsb3NlLCBzZXRDbG9zZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKTtcclxuICBjb25zdCBOYXZMaW5rcyA9IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiSG9tZVwiLCBwYXRoOiBcIi9cIiB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogXCJBYm91dFwiLCBwYXRoOiBcIi9hYm91dFwiIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiBcIlNlcnZpY2VzXCIsIHBhdGg6IFwiL3NlcnZpY2VzXCIgfSxcclxuICAgIHsgaWQ6IDQsIG5hbWU6IFwiUHJvamVjdHNcIiwgcGF0aDogXCIvcHJvamVjdHNcIiB9LFxyXG4gICAgeyBpZDogNSwgbmFtZTogXCJDb250YWN0XCIsIHBhdGg6IFwiL2NvbnRhY3RcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRDbG9zZSgocHJldikgPT4gIXByZXYpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC02IHJpZ2h0LTYgcC0yIGJvcmRlciBib3JkZXItWyMzMzMzMzNdIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLXdpZHRoIGR1cmF0aW9uLTUwMCBoLTcgJHtcclxuICAgICAgICAgICAgY2xvc2UgPyBcInctN1wiIDogXCJ3LTcyXCJcclxuICAgICAgICAgIH0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgb3ZlcmZsb3ctaGlkZGVuYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZU1lbnV9IGNsYXNzTmFtZT1cIiBweS0yXCI+XHJcbiAgICAgICAgICAgIDxBZGRTaGFycEljb25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgJHtcclxuICAgICAgICAgICAgICAgIGNsb3NlID8gXCJyb3RhdGUtMFwiIDogXCJyb3RhdGUtNDVcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggJHtjbG9zZSA/IFwiaGlkZGVuXCIgOiBcImZsZXhcIn1gfT5cclxuICAgICAgICAgICAge05hdkxpbmtzLm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17bi5pZH0gaHJlZj17bi5wYXRofSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICB7bi5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBmbGV4LWNvbCBmaXhlZCB0b3AtNTYgbGVmdC0xMFwiPlxyXG4gICAgICAgIHtOYXZMaW5rcy5tYXAoKG4sIGkpID0+IChcclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRyYW5zbGF0ZS14LTIgZHVyYXRpb24tMTAwMCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLW5vbmUgJHtcclxuICAgICAgICAgICAgICAgIHBhdGggPT09IG4ucGF0aCA/IFwidGV4dC13aGl0ZSBmb250LW1lZGl1bVwiIDogXCJ0ZXh0LVsjNjY2NjY2XVwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgaHJlZj17bi5wYXRofVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge24ubmFtZX1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUGF0aG5hbWUiLCJ1c2VTdGF0ZSIsIkFkZFNoYXJwSWNvbiIsIk5hdmJhciIsImNsb3NlIiwic2V0Q2xvc2UiLCJwYXRoIiwiTmF2TGlua3MiLCJpZCIsIm5hbWUiLCJoYW5kbGVNZW51IiwicHJldiIsIm5hdiIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJtYXAiLCJuIiwiaHJlZiIsInVsIiwiaSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ui/Navbar.tsx\n"));

/***/ })

});