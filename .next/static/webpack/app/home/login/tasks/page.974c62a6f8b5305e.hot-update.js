"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/login/tasks/page",{

/***/ "(app-pages-browser)/./src/ProtectedRoute.jsx":
/*!********************************!*\
  !*** ./src/ProtectedRoute.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var _src_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/context/AuthContext */ \"(app-pages-browser)/./src/context/AuthContext.jsx\");\nvar _s = $RefreshSig$();\n\n // Importar useRouter\n\nconst ProtectedRoute = (param)=>{\n    let { children } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(); // Usar useRouter en lugar de redirect\n    const { loading, isAuthenticated, user } = (0,_src_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    console.log(\"Muestranos usuarios:\", loading, isAuthenticated);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!isAuthenticated || !user) {\n            if (router) {\n                router.push(\"/home/login\"); // Redirige a la página de inicio de sesión si el usuario no está autenticado\n            } else {\n                console.error(\"Error: Router is undefined\");\n            }\n        }\n    }, [\n        isAuthenticated,\n        user,\n        router\n    ]);\n    return children;\n};\n_s(ProtectedRoute, \"Aam6rrej7l1w564lBkZly5BsJmk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _src_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = ProtectedRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProtectedRoute);\nvar _c;\n$RefreshReg$(_c, \"ProtectedRoute\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Qcm90ZWN0ZWRSb3V0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtDO0FBQ00sQ0FBQyxxQkFBcUI7QUFDVDtBQUVyRCxNQUFNRyxpQkFBaUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ2xDLE1BQU1DLFNBQVNKLHNEQUFTQSxJQUFJLHNDQUFzQztJQUNsRSxNQUFNLEVBQUVLLE9BQU8sRUFBRUMsZUFBZSxFQUFFQyxJQUFJLEVBQUUsR0FBR04saUVBQU9BO0lBQ2xETyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCSixTQUFTQztJQUU3Q1AsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNPLG1CQUFtQixDQUFDQyxNQUFNO1lBQzdCLElBQUlILFFBQVE7Z0JBQ1ZBLE9BQU9NLElBQUksQ0FBQyxnQkFBZ0IsNkVBQTZFO1lBQzNHLE9BQU87Z0JBQ0xGLFFBQVFHLEtBQUssQ0FBQztZQUNoQjtRQUNGO0lBQ0YsR0FBRztRQUFDTDtRQUFpQkM7UUFBTUg7S0FBTztJQUVsQyxPQUFPRDtBQUNUO0dBaEJNRDs7UUFDV0Ysa0RBQVNBO1FBQ21CQyw2REFBT0E7OztLQUY5Q0M7QUFrQk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1Byb3RlY3RlZFJvdXRlLmpzeD8yN2IxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInOyAvLyBJbXBvcnRhciB1c2VSb3V0ZXJcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuXHJcbmNvbnN0IFByb3RlY3RlZFJvdXRlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAvLyBVc2FyIHVzZVJvdXRlciBlbiBsdWdhciBkZSByZWRpcmVjdFxyXG4gIGNvbnN0IHsgbG9hZGluZywgaXNBdXRoZW50aWNhdGVkLCB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc29sZS5sb2coXCJNdWVzdHJhbm9zIHVzdWFyaW9zOlwiLCBsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgfHwgIXVzZXIpIHtcclxuICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZS9sb2dpbicpOyAvLyBSZWRpcmlnZSBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGRlIHNlc2nDs24gc2kgZWwgdXN1YXJpbyBubyBlc3TDoSBhdXRlbnRpY2Fkb1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBSb3V0ZXIgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbaXNBdXRoZW50aWNhdGVkLCB1c2VyLCByb3V0ZXJdKTtcclxuXHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdGVjdGVkUm91dGU7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZUF1dGgiLCJQcm90ZWN0ZWRSb3V0ZSIsImNoaWxkcmVuIiwicm91dGVyIiwibG9hZGluZyIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/ProtectedRoute.jsx\n"));

/***/ })

});