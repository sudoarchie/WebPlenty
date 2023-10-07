"use strict";
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 6393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hi: () => (/* binding */ api),
/* harmony export */   v2: () => (/* binding */ baseURL)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8976);

// export const baseURL = "http://localhost:5000/api"; 
const baseURL = "http://3.108.17.52:5000/api";
const api = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});
function getTokenFromLocalStorage() {
    return localStorage.getItem("accessToken");
}
api.interceptors.request.use((config)=>{
    const token = getTokenFromLocalStorage();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (api)));


/***/ })

};
;