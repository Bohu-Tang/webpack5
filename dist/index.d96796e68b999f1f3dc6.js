"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function component() {
    const element = document.createElement('div');
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['这里是div里面的内容1']);

    const br = document.createElement('br');

    const btn = document.createElement('button');
    btn.innerHTML = '点击我a';

    element.appendChild(br);
    element.appendChild(btn)
    // 懒加载print文件，当点击时才去加载
    btn.onclick = e => __webpack_require__.e(/*! import() | print */ "print").then(__webpack_require__.bind(__webpack_require__, /*! ./print */ 569)).then(module => {
        const print = module.default;
        print()
    })

    return element;


}

document.body.appendChild(component())

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDk2Nzk2ZTY4Yjk5OWYxZjNkYzYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrREFBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEhBQWtEO0FBQ3pFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsn6L+Z6YeM5pivZGl26YeM6Z2i55qE5YaF5a65MSddKTtcclxuXHJcbiAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XHJcblxyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG4uaW5uZXJIVE1MID0gJ+eCueWHu+aIkWEnO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnIpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pXHJcbiAgICAvLyDmh5LliqDovb1wcmludOaWh+S7tu+8jOW9k+eCueWHu+aXtuaJjeWOu+WKoOi9vVxyXG4gICAgYnRuLm9uY2xpY2sgPSBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwcmludFwiICovICcuL3ByaW50JykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaW50ID0gbW9kdWxlLmRlZmF1bHQ7XHJcbiAgICAgICAgcHJpbnQoKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuXHJcblxyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==