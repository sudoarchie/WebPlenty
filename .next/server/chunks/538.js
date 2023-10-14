"use strict";
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 6393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hi: () => (/* binding */ api),
/* harmony export */   v2: () => (/* binding */ baseURL)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8976);

const baseURL = "https://api.ketakeesingh362bansdih.in/api";
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


/***/ }),

/***/ 2585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bjplogo.274d306e.jpg","height":80,"width":80,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKgRL//EAB4QAAEBCQAAAAAAAAAAAAAAABITAAMEERQVQVJy/9oACAEBAAE/AKiIVBJ9c1hzItuW/8QAHREAAQIHAAAAAAAAAAAAAAAAEQECAAMSEyIjYf/aAAgBAgEBPwBkq4dj20qMVB6sf//EAB0RAAEEAgMAAAAAAAAAAAAAAAMBAhESAAUTImH/2gAIAQMBAT8ADsCryWEF3dYs2Y8TP//Z","blurWidth":8,"blurHeight":8});

/***/ })

};
;