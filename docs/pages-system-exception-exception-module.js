(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-system-exception-exception-module"],{

/***/ "D34n":
/*!********************************************************************!*\
  !*** ./src/app/pages/system/exception/exception-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ExceptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionRoutingModule", function() { return ExceptionRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _no_auth_no_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-auth/no-auth.component */ "w5+g");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "vuC6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
        data: {
            animation: '404',
            breadcrumb: '404',
        },
    },
    {
        path: 'no-auth',
        component: _no_auth_no_auth_component__WEBPACK_IMPORTED_MODULE_1__["NoAuthComponent"],
        data: {
            animation: 'no-auth',
            breadcrumb: '没有权限',
        },
    },
];
class ExceptionRoutingModule {
}
ExceptionRoutingModule.ɵfac = function ExceptionRoutingModule_Factory(t) { return new (t || ExceptionRoutingModule)(); };
ExceptionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ExceptionRoutingModule });
ExceptionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExceptionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Q/hl":
/*!************************************************************!*\
  !*** ./src/app/pages/system/exception/exception.module.ts ***!
  \************************************************************/
/*! exports provided: ExceptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionModule", function() { return ExceptionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _exception_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exception-routing.module */ "D34n");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "vuC6");
/* harmony import */ var _no_auth_no_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-auth/no-auth.component */ "w5+g");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ExceptionModule {
}
ExceptionModule.ɵfac = function ExceptionModule_Factory(t) { return new (t || ExceptionModule)(); };
ExceptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ExceptionModule });
ExceptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
            _exception_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExceptionRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExceptionModule, { declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
        _no_auth_no_auth_component__WEBPACK_IMPORTED_MODULE_3__["NoAuthComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
        _exception_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExceptionRoutingModule"]] }); })();


/***/ }),

/***/ "vuC6":
/*!*************************************************************************!*\
  !*** ./src/app/pages/system/exception/not-found/not-found.component.ts ***!
  \*************************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");






class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    back() {
        this.router.navigate([`/${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].systemName}/home`]);
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 6, vars: 0, consts: [[2, "text-align", "center"], ["src", "assets/illustrations/404.svg", "height", "300px"], ["nz-button", "", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u5F53\u524D\u9875\u9762\u4E0D\u5B58\u5728");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u8FD4\u56DE\u4E3B\u9875");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["html.default[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nhtml.default[_ngcontent-%COMP%]   .ant-menu-inline[_ngcontent-%COMP%] {\n  border-right: none;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-tabs[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-tabs-top[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%] {\n  margin: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-popover-inner-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #e6f7ff;\n  color: #1890ff;\n}\nhtml.default[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 2px solid #d9d9d9;\n  padding: 2px;\n}\nhtml.default[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 0.625rem;\n  \n  height: 0.625rem;\n}\nhtml.default[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  \n  border-radius: 0.125rem;\n  background: #ddd;\n}\nhtml.default[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  \n  border-radius: 0.125rem;\n  background: #eee;\n}\nhtml.default[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-resizer {\n  width: 0;\n  height: 0;\n}\nhtml.default[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  width: 0;\n  height: 0;\n}\nhtml.default   [_nghost-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 211px);\n  overflow: auto;\n}\nhtml.dark[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nhtml.dark[_ngcontent-%COMP%]   .ant-tabs-nav-list[_ngcontent-%COMP%] {\n  background-color: #141414;\n}\nhtml.dark[_ngcontent-%COMP%]   nz-breadcrumb[_ngcontent-%COMP%] {\n  background-color: #141414;\n}\nhtml.dark[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #111b26;\n  color: #177ddc;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 0.625rem;\n  \n  height: 0.625rem;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  \n  border-radius: 0.125rem;\n  background: #555;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  \n  border-radius: 0.125rem;\n  background: #111;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-resizer {\n  width: 0;\n  height: 0;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  width: 0;\n  height: 0;\n}\nhtml.dark   [_nghost-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 211px);\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZXMvbWl4aW4ubGVzcyIsIm5vdC1mb3VuZC5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZXMvYmFzZS5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy9kZWZhdWx0Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzL2RhcmsubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQ0RKLDRGQUE0RjtFQUM1Riw2Q0FBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLDZGQUE2RjtBQUMvRjtBREhNO0VFR0osa0JBQUE7QURHRjtBRE5NO0VFb0JKLGNBQUE7QURYRjtBRFRNO0VFd0JKLFNBQUE7QURaRjtBRFpNO0VFNEJKLFVBQUE7QURiRjtBRGZNO0VHT0oseUJBQUE7RUFDQSxjQUFBO0FGV0Y7QURuQk07RUdZSix5QkFBQTtFQUNBLFlBQUE7QUZVRjtBRHZCTTtFQ3lCSixVQUFVO0VFUFYsZUFBQTtFRlNBLGlCQUFpQjtFRVBqQixnQkFBQTtBRlNGO0FEN0JNO0VDK0JKLFdBQVc7RUVOWCx1QkFBQTtFQUVBLGdCQUFBO0FGT0Y7QURsQ007RUNvQ0osVUFBVTtFRUhWLHVCQUFBO0VBQ0EsZ0JBQUE7QUZLRjtBRHZDTTtFR3NDSixRQUFBO0VBQ0EsU0FBQTtBRklGO0FEM0NNO0VHMkNKLFFBQUE7RUFDQSxTQUFBO0FGR0Y7QUQvQ007RUNFRixXQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBZ0RKO0FEaERNO0VDa0RKLDRGQUE0RjtFQUM1Riw2Q0FBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLDZGQUE2RjtBQUMvRjtBRHRETTtFSUNKLHlCQUFBO0FId0RGO0FEekRNO0VJS0oseUJBQUE7QUh1REY7QUQ1RE07RUlTSix5QkFBQTtFQUNBLGNBQUE7QUhzREY7QURoRU07RUNrRUosVUFBVTtFR25EVixlQUFBO0VIcURBLGlCQUFpQjtFR25EakIsZ0JBQUE7QUhxREY7QUR0RU07RUN3RUosV0FBVztFR2xEWCx1QkFBQTtFQUVBLGdCQUFBO0FIbURGO0FEM0VNO0VDNkVKLFVBQVU7RUcvQ1YsdUJBQUE7RUFDQSxnQkFBQTtBSGlERjtBRGhGTTtFSW1DSixRQUFBO0VBQ0EsU0FBQTtBSGdERjtBRHBGTTtFSXdDSixRQUFBO0VBQ0EsU0FBQTtBSCtDRjtBRHhGTTtFQ0ZGLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUE2RkoiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoZW1lTWl4aW4oQHJ1bGVzKSB7XG4gICAgaHRtbCB7XG4gICAgICAmLmRlZmF1bHQge1xuICAgICAgICBAaW1wb3J0ICcuL2RlZmF1bHQubGVzcyc7XG4gICAgICAgIEBydWxlcygpO1xuICAgICAgfVxuICAgICAgJi5kYXJrIHtcbiAgICAgICAgQGltcG9ydCAnLi9kYXJrLmxlc3MnO1xuICAgICAgICBAcnVsZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwibWl4aW5cIjsgLy8g5ZCM5qC355qE77yM5LiN6ZyA6KaB5a6M5pW055qE55u45a+56Lev5b6EXG5cbi50aGVtZU1peGluKHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIxMXB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufSk7XG4iLCIvLyAuYW50LW1lbnUtdmVydGljYWwge1xuLy8gICBib3JkZXItcmlnaHQ6IG5vbmU7XG4vLyB9XG5cbi5hbnQtbWVudS1pbmxpbmUge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi8vIC5jYXJkLWNvbnRhaW5lciA+IC5hbnQtdGFicy1jYXJkIC5hbnQtdGFicy10YWIge1xuLy8gICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICAvLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gfVxuLy8gLmNhcmQtY29udGFpbmVyID4gLmFudC10YWJzLWNhcmQgLmFudC10YWJzLXRhYi1hY3RpdmUge1xuLy8gICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICAvLyAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbi8vICAgLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gfVxuXG4vLyAuY2FyZC1jb250YWluZXIgPiAuYW50LXRhYnMtbmF2IC5hbnQtdGFicy1uYXYtbGlzdCB7XG4vLyAgIGJvcmRlcjogbm9uZTtcbi8vIH1cbi5hbnQtdGFicyB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uYW50LXRhYnMtdG9wPi5hbnQtdGFicy1uYXYge1xuICBtYXJnaW46IDA7XG59XG5cbi5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogMFxufVxuXG5cblxuIiwiQGltcG9ydCAobXVsdGlwbGUpICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmctem9ycm8tYW50ZC9zdHlsZS90aGVtZXMvZGVmYXVsdC5sZXNzJztcbkBpbXBvcnQgJy4vYmFzZS5sZXNzJztcblxuQGxheW91dC1zaWRlci1iYWNrZ3JvdW5kOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbGF5b3V0LWhlYWRlci1iYWNrZ3JvdW5kOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG4vLyBCYXNlIGJhY2tncm91bmQgY29sb3IgZm9yIG1vc3QgY29tcG9uZW50c1xuLy8gQGNvbXBvbmVudC1iYWNrZ3JvdW5kOiAjZmZmO1xuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQHByaW1hcnktMTtcbiAgY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgQGJvcmRlci1jb2xvci1iYXNlO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvKua7muWKqOadoeaVtOS9k+agt+W8jyovXG4gIHdpZHRoOiAwLjYyNXJlbTtcbiAgLyrpq5jlrr3liIbliKvlr7nlupTmqKrnq5bmu5rliqjmnaHnmoTlsLrlr7gqL1xuICBoZWlnaHQ6IDAuNjI1cmVtO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgLyrmu5rliqjmnaHph4zpnaLlsI/mlrnlnZcqL1xuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcbiAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAvKua7muWKqOadoemHjOmdoui9qOmBkyovXG4gIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuOjotd2Via2l0LXJlc2l6ZXIge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG4iLCJAaW1wb3J0IChtdWx0aXBsZSkgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmctem9ycm8tYW50ZC9zdHlsZS90aGVtZXMvZGFyay5sZXNzXCI7XG5AaW1wb3J0IFwiLi9iYXNlLmxlc3NcIjtcblxuQGxheW91dC1zaWRlci1iYWNrZ3JvdW5kOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbGF5b3V0LWhlYWRlci1iYWNrZ3JvdW5kOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5cbi5hbnQtdGFicy1uYXYtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbn1cblxubnotYnJlYWRjcnVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBwcmltYXJ5LTE7XG4gIGNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8q5rua5Yqo5p2h5pW05L2T5qC35byPKi9cbiAgd2lkdGg6IDAuNjI1cmVtO1xuICAvKumrmOWuveWIhuWIq+WvueW6lOaoquerlua7muWKqOadoeeahOWwuuWvuCovXG4gIGhlaWdodDogMC42MjVyZW07XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAvKua7muWKqOadoemHjOmdouWwj+aWueWdlyovXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xuICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC8q5rua5Yqo5p2h6YeM6Z2i6L2o6YGTKi9cbiAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xuICBiYWNrZ3JvdW5kOiAjMTExO1xufVxuXG46Oi13ZWJraXQtcmVzaXplciB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn0iXX0= */"] });


/***/ }),

/***/ "w5+g":
/*!*********************************************************************!*\
  !*** ./src/app/pages/system/exception/no-auth/no-auth.component.ts ***!
  \*********************************************************************/
/*! exports provided: NoAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthComponent", function() { return NoAuthComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");






class NoAuthComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    back() {
        this.router.navigate([`/${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].systemName}/home`]);
    }
}
NoAuthComponent.ɵfac = function NoAuthComponent_Factory(t) { return new (t || NoAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NoAuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NoAuthComponent, selectors: [["app-no-auth"]], decls: 6, vars: 0, consts: [[2, "text-align", "center"], ["src", "assets/illustrations/noauth.svg", "height", "300px"], ["nz-button", "", 3, "click"]], template: function NoAuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u4F60\u6CA1\u6709\u6743\u9650\u8BBF\u95EE\u8BE5\u9875\u9762");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoAuthComponent_Template_button_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u8FD4\u56DE\u4E3B\u9875");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["html.default[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nhtml.default[_ngcontent-%COMP%]   .ant-menu-inline[_ngcontent-%COMP%] {\n  border-right: none;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-tabs[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-tabs-top[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%] {\n  margin: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-popover-inner-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #e6f7ff;\n  color: #1890ff;\n}\nhtml.default[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 2px solid #d9d9d9;\n  padding: 2px;\n}\nhtml.default[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 0.625rem;\n  \n  height: 0.625rem;\n}\nhtml.default[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  \n  border-radius: 0.125rem;\n  background: #ddd;\n}\nhtml.default[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  \n  border-radius: 0.125rem;\n  background: #eee;\n}\nhtml.default[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-resizer {\n  width: 0;\n  height: 0;\n}\nhtml.default[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  width: 0;\n  height: 0;\n}\nhtml.default   [_nghost-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 211px);\n  overflow: auto;\n}\nhtml.dark[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nhtml.dark[_ngcontent-%COMP%]   .ant-tabs-nav-list[_ngcontent-%COMP%] {\n  background-color: #141414;\n}\nhtml.dark[_ngcontent-%COMP%]   nz-breadcrumb[_ngcontent-%COMP%] {\n  background-color: #141414;\n}\nhtml.dark[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #111b26;\n  color: #177ddc;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 0.625rem;\n  \n  height: 0.625rem;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  \n  border-radius: 0.125rem;\n  background: #555;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  \n  border-radius: 0.125rem;\n  background: #111;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-resizer {\n  width: 0;\n  height: 0;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  width: 0;\n  height: 0;\n}\nhtml.dark   [_nghost-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 211px);\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZXMvbWl4aW4ubGVzcyIsIm5vLWF1dGguY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzL2Jhc2UubGVzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZXMvZGVmYXVsdC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy9kYXJrLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07RUNESiw0RkFBNEY7RUFDNUYsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0Qiw2RkFBNkY7QUFDL0Y7QURITTtFRUdKLGtCQUFBO0FER0Y7QUROTTtFRW9CSixjQUFBO0FEWEY7QURUTTtFRXdCSixTQUFBO0FEWkY7QURaTTtFRTRCSixVQUFBO0FEYkY7QURmTTtFR09KLHlCQUFBO0VBQ0EsY0FBQTtBRldGO0FEbkJNO0VHWUoseUJBQUE7RUFDQSxZQUFBO0FGVUY7QUR2Qk07RUN5QkosVUFBVTtFRVBWLGVBQUE7RUZTQSxpQkFBaUI7RUVQakIsZ0JBQUE7QUZTRjtBRDdCTTtFQytCSixXQUFXO0VFTlgsdUJBQUE7RUFFQSxnQkFBQTtBRk9GO0FEbENNO0VDb0NKLFVBQVU7RUVIVix1QkFBQTtFQUNBLGdCQUFBO0FGS0Y7QUR2Q007RUdzQ0osUUFBQTtFQUNBLFNBQUE7QUZJRjtBRDNDTTtFRzJDSixRQUFBO0VBQ0EsU0FBQTtBRkdGO0FEL0NNO0VDRUYsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQWdESjtBRGhETTtFQ2tESiw0RkFBNEY7RUFDNUYsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0Qiw2RkFBNkY7QUFDL0Y7QUR0RE07RUlDSix5QkFBQTtBSHdERjtBRHpETTtFSUtKLHlCQUFBO0FIdURGO0FENURNO0VJU0oseUJBQUE7RUFDQSxjQUFBO0FIc0RGO0FEaEVNO0VDa0VKLFVBQVU7RUduRFYsZUFBQTtFSHFEQSxpQkFBaUI7RUduRGpCLGdCQUFBO0FIcURGO0FEdEVNO0VDd0VKLFdBQVc7RUdsRFgsdUJBQUE7RUFFQSxnQkFBQTtBSG1ERjtBRDNFTTtFQzZFSixVQUFVO0VHL0NWLHVCQUFBO0VBQ0EsZ0JBQUE7QUhpREY7QURoRk07RUltQ0osUUFBQTtFQUNBLFNBQUE7QUhnREY7QURwRk07RUl3Q0osUUFBQTtFQUNBLFNBQUE7QUgrQ0Y7QUR4Rk07RUNGRixXQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBNkZKIiwiZmlsZSI6Im5vLWF1dGguY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWVNaXhpbihAcnVsZXMpIHtcbiAgICBodG1sIHtcbiAgICAgICYuZGVmYXVsdCB7XG4gICAgICAgIEBpbXBvcnQgJy4vZGVmYXVsdC5sZXNzJztcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgICB9XG4gICAgICAmLmRhcmsge1xuICAgICAgICBAaW1wb3J0ICcuL2RhcmsubGVzcyc7XG4gICAgICAgIEBydWxlcygpO1xuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCJtaXhpblwiOyAvLyDlkIzmoLfnmoTvvIzkuI3pnIDopoHlrozmlbTnmoTnm7jlr7not6/lvoRcblxuLnRoZW1lTWl4aW4oe1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjExcHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59KTtcbiIsIi8vIC5hbnQtbWVudS12ZXJ0aWNhbCB7XG4vLyAgIGJvcmRlci1yaWdodDogbm9uZTtcbi8vIH1cblxuLmFudC1tZW51LWlubGluZSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLy8gLmNhcmQtY29udGFpbmVyID4gLmFudC10YWJzLWNhcmQgLmFudC10YWJzLXRhYiB7XG4vLyAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIC8vICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyB9XG4vLyAuY2FyZC1jb250YWluZXIgPiAuYW50LXRhYnMtY2FyZCAuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4vLyAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIC8vICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuLy8gICAvLyAgIGJhY2tncm91bmQ6ICNmZmY7XG4vLyB9XG5cbi8vIC5jYXJkLWNvbnRhaW5lciA+IC5hbnQtdGFicy1uYXYgLmFudC10YWJzLW5hdi1saXN0IHtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gfVxuLmFudC10YWJzIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5hbnQtdGFicy10b3A+LmFudC10YWJzLW5hdiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFudC1wb3BvdmVyLWlubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwXG59XG5cblxuXG4iLCJAaW1wb3J0IChtdWx0aXBsZSkgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZy16b3Jyby1hbnRkL3N0eWxlL3RoZW1lcy9kZWZhdWx0Lmxlc3MnO1xuQGltcG9ydCAnLi9iYXNlLmxlc3MnO1xuXG5AbGF5b3V0LXNpZGVyLWJhY2tncm91bmQ6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBsYXlvdXQtaGVhZGVyLWJhY2tncm91bmQ6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbi8vIEJhc2UgYmFja2dyb3VuZCBjb2xvciBmb3IgbW9zdCBjb21wb25lbnRzXG4vLyBAY29tcG9uZW50LWJhY2tncm91bmQ6ICNmZmY7XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHJpbWFyeS0xO1xuICBjb2xvcjogQHByaW1hcnktY29sb3I7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBAYm9yZGVyLWNvbG9yLWJhc2U7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8q5rua5Yqo5p2h5pW05L2T5qC35byPKi9cbiAgd2lkdGg6IDAuNjI1cmVtO1xuICAvKumrmOWuveWIhuWIq+WvueW6lOaoquerlua7muWKqOadoeeahOWwuuWvuCovXG4gIGhlaWdodDogMC42MjVyZW07XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAvKua7muWKqOadoemHjOmdouWwj+aWueWdlyovXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xuICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC8q5rua5Yqo5p2h6YeM6Z2i6L2o6YGTKi9cbiAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG46Oi13ZWJraXQtcmVzaXplciB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbiIsIkBpbXBvcnQgKG11bHRpcGxlKSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZy16b3Jyby1hbnRkL3N0eWxlL3RoZW1lcy9kYXJrLmxlc3NcIjtcbkBpbXBvcnQgXCIuL2Jhc2UubGVzc1wiO1xuXG5AbGF5b3V0LXNpZGVyLWJhY2tncm91bmQ6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBsYXlvdXQtaGVhZGVyLWJhY2tncm91bmQ6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcblxuLmFudC10YWJzLW5hdi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xufVxuXG5uei1icmVhZGNydW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQHByaW1hcnktMTtcbiAgY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLyrmu5rliqjmnaHmlbTkvZPmoLflvI8qL1xuICB3aWR0aDogMC42MjVyZW07XG4gIC8q6auY5a695YiG5Yir5a+55bqU5qiq56uW5rua5Yqo5p2h55qE5bC65a+4Ki9cbiAgaGVpZ2h0OiAwLjYyNXJlbTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIC8q5rua5Yqo5p2h6YeM6Z2i5bCP5pa55Z2XKi9cbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLyrmu5rliqjmnaHph4zpnaLovajpgZMqL1xuICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gIGJhY2tncm91bmQ6ICMxMTE7XG59XG5cbjo6LXdlYmtpdC1yZXNpemVyIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=pages-system-exception-exception-module.js.map