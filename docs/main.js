(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/lRH":
/*!****************************************************!*\
  !*** ./src/service/preloading-strategy.service.ts ***!
  \****************************************************/
/*! exports provided: PreloadingStrategyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadingStrategyService", function() { return PreloadingStrategyService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * 预加载策略
 */
class PreloadingStrategyService {
    constructor() {
        // 需要预加载的模块
        this.preloadedModules = [];
    }
    preload(route, load) {
        if (route.data && route.data.preload) {
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }
    }
}
PreloadingStrategyService.ɵfac = function PreloadingStrategyService_Factory(t) { return new (t || PreloadingStrategyService)(); };
PreloadingStrategyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PreloadingStrategyService, factory: PreloadingStrategyService.ɵfac });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rxc/angular/ng-zorro-admin/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    systemName: 'admin',
    api: 'http://192.168.1.41:8080',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Hhmg":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



const icons = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["DashboardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["FormOutline"],
];
class IconsProviderModule {
}
IconsProviderModule.ɵfac = function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); };
IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [{ provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__["NZ_ICONS"], useValue: icons }], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__["NzIconModule"]], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__["NzIconModule"]] }); })();


/***/ }),

/***/ "NyIg":
/*!************************************!*\
  !*** ./src/service/nav.service.ts ***!
  \************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var _reuse_strategy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reuse-strategy.service */ "dmpr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class NavService {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.clearTo = false;
        this.history = [];
        this.disabledBack = true;
        this.disabledForward = true;
        this.subscriptions = [];
    }
    init() {
        if (this.subscriptions.length > 0) {
            this.destroy();
        }
        else {
            this.subscriptions = [
                this.router.events
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((x) => x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]))
                    .subscribe((x) => {
                    const nav = x;
                    if (this.clearTo) {
                        _reuse_strategy_service__WEBPACK_IMPORTED_MODULE_0__["ReuseStrategyService"].deleteRouteSnapshot(nav.url);
                        this.clearTo = false;
                    }
                }),
                this.router.events
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((x) => x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
                    .subscribe((x) => {
                    const nav = x;
                    if (nav.url === nav.urlAfterRedirects) {
                        this.history.unshift(nav);
                        this.first = lodash__WEBPACK_IMPORTED_MODULE_3__["first"](this.history);
                        this.last = lodash__WEBPACK_IMPORTED_MODULE_3__["last"](this.history);
                        this.now = nav;
                    }
                }),
            ];
        }
    }
    destroy() {
        this.history = [];
        this.disabledBack = true;
        this.disabledForward = true;
    }
    back(clearTo) {
        this.removeThis();
        this.clearTo = clearTo;
        const first = lodash__WEBPACK_IMPORTED_MODULE_3__["first"](this.history);
        const urlSplit = lodash__WEBPACK_IMPORTED_MODULE_3__["split"](first.url, '/');
        if (urlSplit.length >= 3) {
            const url = lodash__WEBPACK_IMPORTED_MODULE_3__["join"](lodash__WEBPACK_IMPORTED_MODULE_3__["take"](urlSplit, 3), '/');
            const his = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.history, (x) => x.id !== first.id && x.url.indexOf(url) === 0 && x.url !== first.url);
            if (his) {
                this.router.navigateByUrl(his.url).then(() => {
                    lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.history, (x) => x.id > his.id);
                });
            }
            else {
                const i = urlSplit.length === 5 ? 2 : 1;
                const aurl = lodash__WEBPACK_IMPORTED_MODULE_3__["join"](lodash__WEBPACK_IMPORTED_MODULE_3__["take"](urlSplit, urlSplit.length - i), '/');
                this.backTo(aurl, first.url);
            }
            return false;
        }
        window.history.back();
        return true;
    }
    backTo(url, nowUrl) {
        this.router.navigateByUrl(url).then(() => {
            const fst = lodash__WEBPACK_IMPORTED_MODULE_3__["first"](this.history);
            if (fst.urlAfterRedirects === nowUrl) {
                const urlSplit = lodash__WEBPACK_IMPORTED_MODULE_3__["split"](url, '/');
                this.backTo(lodash__WEBPACK_IMPORTED_MODULE_3__["join"](lodash__WEBPACK_IMPORTED_MODULE_3__["take"](urlSplit, urlSplit.length - 1), '/'), nowUrl);
            }
        });
    }
    removeThis() {
        const url = this.location.path();
        _reuse_strategy_service__WEBPACK_IMPORTED_MODULE_0__["ReuseStrategyService"].deleteRouteSnapshot(url);
    }
    getUrl(path) {
        const result = {
            path: '',
            param: {},
        };
        if (path.indexOf(';') > -1) {
            const spt = path.split(';');
            result.path = spt[0];
            for (let i = 1; i < spt.length; i++) {
                const st = spt[i].split('=');
                result.param[st[0]] = st[1];
            }
        }
        else {
            result.path = path;
        }
        return result;
    }
}
NavService.ɵfac = function NavService_Factory(t) { return new (t || NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
NavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NavService, factory: NavService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OwDo":
/*!***********************************!*\
  !*** ./src/service/auth.guard.ts ***!
  \***********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "u6mN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuard {
    constructor(auth, router, injector) {
        this.auth = auth;
        this.router = router;
        this.injector = injector;
    }
    get message() {
        return this.injector.get(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_0__["NzMessageService"]);
    }
    canActivate(route, state) {
        return this.checkLogin(state.url);
    }
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    checkLogin(currentUrl) {
        if (this.auth.isLogged) {
            return true;
        }
        this.auth.redirectUrl = currentUrl;
        this.router.navigate([`/passport/login`]);
        return false;
    }
    checkLoad(route) {
        if (route.path === src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].systemName || this.checkMenu(`${route.path}`)) {
            return true;
        }
        this.message.error('你没有当前页面的访问权限');
        return false;
    }
    checkMenu(path) {
        var _a;
        const menus = (_a = this.auth.user.permissions) === null || _a === void 0 ? void 0 : _a.menus;
        for (const key in menus) {
            if (Object.prototype.hasOwnProperty.call(menus, key)) {
                const ms = menus[key];
                const result = this.findMenu(ms, path);
                if (result) {
                    return true;
                }
            }
        }
        return false;
    }
    findMenu(menus, path) {
        let result = false;
        if (!menus) {
            return result;
        }
        for (let i = 0; i < menus.length; i++) {
            const m = menus[i];
            if (m.path === path) {
                result = true;
                break;
            }
            if (m.children) {
                const menu = this.findMenu(m.children, path);
                if (menu) {
                    result = true;
                    break;
                }
            }
        }
        return result;
    }
    canLoad(route, segments) {
        return this.checkLogin(route.path) && this.checkLoad(route);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PGYl":
/*!***************************************!*\
  !*** ./src/service/system.service.ts ***!
  \***************************************/
/*! exports provided: SystemService, Menu, User, Token */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.service */ "evl9");
/* harmony import */ var _nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav.service */ "NyIg");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.service */ "Z4aq");









class SystemService {
    constructor(utils, router, nav, menu, activatedRoute) {
        this.utils = utils;
        this.router = router;
        this.nav = nav;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.key = 'System';
        // 默认主页
        this.homePage = {
            level: 1,
            title: '主页',
            icon: 'home',
            path: 'home',
            open: true,
            selected: false,
            disabled: false,
        };
        // 菜单变更事件
        this.menuChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.menus = [];
        this.removeSession();
        menu.change$.subscribe((menus) => {
            this.menus = menus;
        });
        // 路由事件
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((route) => route.outlet === 'primary'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((route) => route.data))
            .subscribe((event) => {
            this.setTabs();
        });
    }
    /**
     * 菜单变更事件的观察对象
     */
    get menu$() {
        return this.menuChange.asObservable();
    }
    /**
     * 获取session
     */
    get session() {
        if (!this.currentSession) {
            this.currentSession = Object.assign({
                activatedPage: 'home',
                tabPages: [this.homePage],
            }, this.utils.getSession(this.key));
            this.utils.setSession(this.key, this.currentSession);
        }
        return this.currentSession;
    }
    /**
     * 设置session值
     */
    set session(value) {
        this.currentSession = Object.assign(this.currentSession
            ? this.currentSession
            : {
                activatedPage: 'home',
                tabPages: [this.homePage],
            }, value);
        this.utils.setSession(this.key, this.currentSession);
    }
    /**
     * 移除当前会话存储
     */
    removeSession() {
        this.utils.removeSession(this.key);
    }
    /**
     * 标签页处理
     */
    setTabs() {
        const url = this.nav.getUrl(this.router.url);
        const routers = url.path.split('/');
        if (routers.length > 2) {
            const path = routers[2];
            const subPage = routers.length > 3 ? lodash__WEBPACK_IMPORTED_MODULE_3__["drop"](routers, 3).join('/') : undefined;
            const param = url.param;
            const menu = this.findMenu(this.menus, path);
            if (menu) {
                const tabPages = this.session.tabPages;
                const tab = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](tabPages, (x) => x.path === menu.path);
                if (tab) {
                    tab.subPage = subPage;
                    tab.param = param;
                }
                else {
                    menu.subPage = subPage;
                    menu.param = param;
                    tabPages.push(menu);
                }
                this.session = {
                    activatedPage: path,
                    subPage,
                    param,
                    tabPages,
                };
                this.session.tabPages = [...this.session.tabPages];
                this.menuChange.next({
                    tabPages: this.session.tabPages,
                    current: path,
                });
            }
        }
    }
    findMenu(menus, path) {
        let menu = null;
        if (!menus) {
            return null;
        }
        for (let i = 0; i < menus.length; i++) {
            const m = menus[i];
            if (m.path === path) {
                menu = m;
                break;
            }
            if (m.children) {
                menu = this.findMenu(m.children, path);
                if (menu) {
                    break;
                }
            }
        }
        return menu;
    }
}
SystemService.ɵfac = function SystemService_Factory(t) { return new (t || SystemService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_nav_service__WEBPACK_IMPORTED_MODULE_6__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_menu_service__WEBPACK_IMPORTED_MODULE_7__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
SystemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SystemService, factory: SystemService.ɵfac, providedIn: 'root' });
/**
 * 菜单数据
 */
class Menu {
    constructor() {
        this.icon = '';
    }
}
class User {
    constructor() {
        // 账户ID
        this.account = '';
        // 姓名
        this.name = '';
        // token
        this.token = new Token();
        // 权限
        this.permissions = { actions: [], menus: {} };
    }
}
class Token {
    constructor() {
        // 认证ID
        this.token = '';
        // 过期时间
        this.expireTime = 0;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/theme.service */ "qi3M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(theme) {
        this.theme = theme;
        this.isCollapsed = false;
    }
    change() {
        // this.theme.changeTheme();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "TzWn":
/*!**********************************!*\
  !*** ./src/app/routes/routes.ts ***!
  \**********************************/
/*! exports provided: shareRoutes, mainRoutes, fullRoutes, layoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareRoutes", function() { return shareRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainRoutes", function() { return mainRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullRoutes", function() { return fullRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutRoutes", function() { return layoutRoutes; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_service_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/auth.guard */ "OwDo");


// 公共路由
const shareRoutes = [
    // 异常模块
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-system-exception-exception-module */ "pages-system-exception-exception-module").then(__webpack_require__.bind(null, /*! ../pages/system/exception/exception.module */ "Q/hl")).then((x) => x.ExceptionModule),
        data: {
            animation: 'exception',
            breadcrumb: '异常',
        },
    },
];
// 顶级路由，指向框架页
const mainRoutes = [
    // 如果路由为空就指向 index
    { path: '', redirectTo: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].systemName}`, pathMatch: 'full' },
    // index
    {
        path: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].systemName}`,
        loadChildren: () => Promise.all(/*! import() | layout-default-default-module */[__webpack_require__.e("default~layout-default-default-module~layout-full-full-module~pages-home-home-module~pages-login-login-module"), __webpack_require__.e("default~layout-default-default-module~layout-full-full-module~pages-login-login-module"), __webpack_require__.e("layout-default-default-module")]).then(__webpack_require__.bind(null, /*! ../../layout/default/default.module */ "81N8")).then((x) => x.DefaultModule),
        canActivateChild: [src_service_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        canLoad: [src_service_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    // index
    {
        path: `passport`,
        loadChildren: () => Promise.all(/*! import() | layout-full-full-module */[__webpack_require__.e("default~layout-default-default-module~layout-full-full-module~pages-home-home-module~pages-login-login-module"), __webpack_require__.e("default~layout-default-default-module~layout-full-full-module~pages-login-login-module"), __webpack_require__.e("default~layout-full-full-module~pages-home-home-module~pages-login-login-module"), __webpack_require__.e("default~layout-full-full-module~pages-login-login-module"), __webpack_require__.e("layout-full-full-module")]).then(__webpack_require__.bind(null, /*! ../../layout/full/full.module */ "+CXr")).then((x) => x.FullModule),
    },
    ...shareRoutes,
];
const fullRoutes = [
    // 登录页
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("default~layout-default-default-module~layout-full-full-module~pages-home-home-module~pages-login-login-module"), __webpack_require__.e("default~layout-default-default-module~layout-full-full-module~pages-login-login-module"), __webpack_require__.e("default~layout-full-full-module~pages-home-home-module~pages-login-login-module"), __webpack_require__.e("default~layout-full-full-module~pages-login-login-module"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ../pages/login/login.module */ "F4UR")).then((x) => x.LoginModule),
    },
    ...shareRoutes,
];
// 框架页中对应的路由，指向具体的页面，框架页面中的路由都会带上顶级路由 index 如：/index/workplace
const layoutRoutes = [
    // 如果路由为空就指向配置的默认首页
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // 首页
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~layout-default-default-module~layout-full-full-module~pages-home-home-module~pages-login-login-module"), __webpack_require__.e("default~layout-full-full-module~pages-home-home-module~pages-login-login-module"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ../pages/home/home.module */ "99Un")).then((x) => x.HomeModule),
        canLoad: [src_service_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: {
            animation: 'home',
            breadcrumb: '主页',
        },
    },
    // 首页
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-welcome-welcome-module */ "pages-welcome-welcome-module").then(__webpack_require__.bind(null, /*! ../pages/welcome/welcome.module */ "TtBp")).then((x) => x.WelcomeModule),
        canLoad: [src_service_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: {
            animation: 'welcome',
            breadcrumb: '欢迎页面',
        },
    },
    // 首页
    {
        path: 'users',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-core-user-user-module */ "pages-core-user-user-module").then(__webpack_require__.bind(null, /*! ../pages/core/user/user.module */ "u1k/")).then((x) => x.UserModule),
        canLoad: [src_service_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: {
            animation: 'users',
            breadcrumb: '用户管理',
        },
    },
    // },
    // // 仪表盘
    // {
    //   path: 'dashboard',
    //   loadChildren: () => import('../main/dashboard/dashboard.module').then((x) => x.DashboardModule),
    //   canLoad: [AuthGuard],
    //   data: {
    //     animation: 'dashboard'
    //   }
    // },
    // // 用户管理
    // {
    //   path: 'users',
    //   loadChildren: () => import('../main/system/users/users.module').then((x) => x.UsersModule),
    //   canLoad: [AuthGuard],
    //   data: {
    //     animation: 'users'
    //   }
    // },
    // // 角色管理
    // {
    //   path: 'roles',
    //   loadChildren: () => import('../main/system/roles/roles.module').then((x) => x.RolesModule),
    //   canLoad: [AuthGuard],
    //   data: {
    //     animation: 'roles'
    //   }
    // },
    // // 组织管理
    // {
    //   path: 'organization',
    //   loadChildren: () => import('../main/system/organization/organization.module').then((x) => x.OrganizationModule),
    //   canLoad: [AuthGuard],
    //   data: {
    //     animation: 'organization'
    //   }
    // },
    // // 菜单管理
    // {
    //   path: 'menus',
    //   loadChildren: () => import('../main/system/menus/menus.module').then((x) => x.MenusModule),
    //   canLoad: [AuthGuard],
    //   data: {
    //     animation: 'menus'
    //   }
    // },
    // 示例功能
    // { path: 'examples', loadChildren: 'src/main/examples/example.module#ExampleModule', canLoad: [AuthGuard] },
    // // 工作型首页
    // { path: 'workplace', loadChildren: 'src/main/dashboard/workplace/workplace.module#WorkplaceModule', canLoad: [AuthGuard] },
    // // 数据型首页
    // { path: 'analysis', loadChildren: 'src/main/dashboard/analysis/analysis.module#AnalysisModule' },
    // // 账号管理
    // { path: 'account', loadChildren: 'src/main/system/account/account.module#AccountModule', canLoad: [AuthGuard] },
    // // 角色管理
    // { path: 'role', loadChildren: 'src/main/system/role/role.module#RoleModule', canLoad: [AuthGuard] },
    // // 菜单管理
    // { path: 'menu', loadChildren: 'src/main/system/menu/menu.module#MenuModule', canLoad: [AuthGuard] },
    // // 组织管理
    // { path: 'organization', loadChildren: 'src/main/system/organization/organization.module#OrganizationModule', canLoad: [AuthGuard] },
    // // 模块设计
    // { path: 'module', loadChildren: 'src/main/module/module.module#ModuleModule', canLoad: [AuthGuard] },
    ...shareRoutes,
];


/***/ }),

/***/ "W98g":
/*!******************************************!*\
  !*** ./src/service/api/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system.service */ "PGYl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LoginService {
    constructor(http) {
        this.http = http;
    }
    login(account, password) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((r) => {
            const u = new _system_service__WEBPACK_IMPORTED_MODULE_1__["User"]();
            u.account = 'test01';
            u.name = 'admin';
            const token = new _system_service__WEBPACK_IMPORTED_MODULE_1__["Token"]();
            token.token = 'xxxxxxxxxxxxxxxx';
            const now = new Date();
            token.expireTime = now.setMonth(now.getMonth() + 30);
            u.token = token;
            u.permissions = {
                actions: [],
                menus: {
                    dashboard: [
                        {
                            level: 1,
                            title: '主页',
                            icon: 'home',
                            path: 'home',
                            open: true,
                            selected: false,
                            disabled: false,
                        },
                        {
                            level: 1,
                            title: '仪表盘',
                            icon: 'dashboard',
                            path: 'dashboard',
                            open: false,
                            selected: false,
                            disabled: false,
                        },
                    ],
                    data: [
                        {
                            level: 1,
                            title: '系统管理',
                            icon: 'setting',
                            open: false,
                            selected: false,
                            disabled: false,
                            children: [
                                {
                                    level: 2,
                                    title: '用户管理',
                                    icon: 'user',
                                    path: 'users',
                                    selected: false,
                                    disabled: false,
                                },
                                {
                                    level: 2,
                                    title: '角色管理',
                                    icon: 'profile',
                                    path: 'role',
                                    selected: false,
                                    disabled: false,
                                },
                                {
                                    level: 2,
                                    title: '组织管理',
                                    icon: 'group',
                                    path: 'group',
                                    selected: false,
                                    disabled: false,
                                },
                            ],
                        },
                        {
                            level: 1,
                            title: '配置中心',
                            icon: 'setting',
                            open: false,
                            selected: false,
                            disabled: false,
                            children: [
                                {
                                    level: 2,
                                    title: '字典管理',
                                    icon: 'read',
                                    path: 'dictionary',
                                    selected: false,
                                    disabled: false,
                                },
                                {
                                    level: 2,
                                    title: '映射管理',
                                    icon: 'one-to-one',
                                    path: 'mapping',
                                    selected: false,
                                    disabled: false,
                                },
                            ],
                        },
                    ],
                    report: [
                        {
                            level: 1,
                            title: '人员报表',
                            icon: 'folder',
                            open: false,
                            path: 'user-report',
                            selected: false,
                            disabled: false,
                        },
                        {
                            level: 1,
                            title: '财务报表',
                            icon: 'folder',
                            open: false,
                            path: 'cai-report',
                            selected: false,
                            disabled: false,
                        },
                    ],
                    setting: [
                        {
                            level: 1,
                            title: '日程安排',
                            icon: 'calendar',
                            open: false,
                            path: 'calendar-setting',
                            selected: false,
                            disabled: false,
                        },
                        {
                            level: 1,
                            title: '邮件中心',
                            icon: 'mail',
                            open: false,
                            path: 'email-setting',
                            selected: false,
                            disabled: false,
                        },
                        {
                            level: 1,
                            title: '通知中心',
                            icon: 'bell',
                            open: false,
                            path: 'notify-setting',
                            selected: false,
                            disabled: false,
                        },
                    ],
                },
            };
            r.next(u);
            r.complete();
        });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Z4aq":
/*!*************************************!*\
  !*** ./src/service/menu.service.ts ***!
  \*************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MenuService {
    constructor() {
        this.menus = [
            {
                level: 1,
                title: '主页',
                icon: 'home',
                path: 'home',
                open: true,
                selected: false,
                disabled: false,
            },
            {
                level: 1,
                title: '仪表盘',
                icon: 'dashboard',
                path: 'dashboard',
                open: false,
                selected: false,
                disabled: false,
            },
        ];
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.defaultMenu);
    }
    get defaultMenu() {
        return this.menus;
    }
    get change$() {
        return this.change.asObservable();
    }
    setMenu(menus) {
        this.change.next(menus);
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/zh */ "Kd/A");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons-provider.module */ "Hhmg");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-loading-bar/router */ "F34d");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");


















Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6___default.a);
Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default.a);
const I18nProviders = [
    {
        provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"],
        useFactory: (localId) => {
            switch (localId) {
                case 'en':
                    return ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["en_US"];
                case 'zh':
                    return ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["zh_CN"];
                default:
                    return ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["en_US"];
            }
        },
        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]],
    },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [...I18nProviders], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_11__["IconsProviderModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuModule"],
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__["NzMessageModule"],
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_15__["LoadingBarRouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_11__["IconsProviderModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__["NzMessageModule"],
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_15__["LoadingBarRouterModule"]] }); })();


/***/ }),

/***/ "dmpr":
/*!***********************************************!*\
  !*** ./src/service/reuse-strategy.service.ts ***!
  \***********************************************/
/*! exports provided: ReuseStrategyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuseStrategyService", function() { return ReuseStrategyService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 路由复用策略
 */
class ReuseStrategyService {
    /**
     * 删除复用的路由
     * @param name 路由名称
     */
    static deleteRouteSnapshot(name) {
        if (name) {
            const key = name.replace(/\//g, '_');
            lodash__WEBPACK_IMPORTED_MODULE_0__["remove"](ReuseStrategyService.storages, (x) => x.key.indexOf(key) === 0);
            ReuseStrategyService.waitDelete = key;
        }
        else {
            ReuseStrategyService.storages = [];
        }
    }
    /**
     * 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断
     *
     * @param route 路由镜像
     */
    shouldDetach(route) {
        return true;
    }
    /**
     * 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象
     *
     * @param route 路由镜像
     * @param handle handle
     */
    store(route, handle) {
        if (handle === null) {
            return;
        }
        if (ReuseStrategyService.waitDelete &&
            this.getRouteUrl(route).indexOf(ReuseStrategyService.waitDelete) === 0) {
            // 如果待删除是当前路由则不存储快照
            ReuseStrategyService.waitDelete = null;
            return;
        }
        this.add(this.getRouteUrl(route), handle);
    }
    /**
     * 若 path 在缓存中有的都认为允许还原路由
     *
     * @param route 路由镜像
     */
    shouldAttach(route) {
        return !!lodash__WEBPACK_IMPORTED_MODULE_0__["find"](ReuseStrategyService.storages, (x) => x.key === this.getRouteUrl(route));
    }
    /**
     * 从缓存中获取快照，若无则返回nul
     *
     * @param route 路由镜像
     */
    retrieve(route) {
        if (!route.routeConfig) {
            return null;
        }
        const stroage = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](ReuseStrategyService.storages, (x) => x.key === this.getRouteUrl(route));
        return stroage ? stroage.handle : null;
    }
    /**
     * 进入路由触发，判断是否同一路由
     * 解决不同的参数也会认为是同一个路由，导致会将之前的路由拿出来复用
     *
     * @param future 前一个路由
     * @param curr 当前路由
     */
    shouldReuseRoute(future, curr) {
        return (future.routeConfig === curr.routeConfig &&
            JSON.stringify(future.params) === JSON.stringify(curr.params));
    }
    /**
     * 解决不同的主路由会存在相同名称的子路由
     * @param route 路由
     * @returns url
     */
    getRouteUrl(route) {
        const url = route._routerState.url.replace(/\//g, '_');
        // if (!route.routeConfig.loadChildren) {
        //     url += `${route.routeConfig.component.toString().split('(')[0].split(' ')[1]}`
        // }
        // + '_' + (route.routeConfig.loadChildren || route.routeConfig.component.toString().split('(')[0].split(' ')[1]);
        return url;
    }
    add(key, handle) {
        lodash__WEBPACK_IMPORTED_MODULE_0__["remove"](ReuseStrategyService.storages, (x) => x.key === key);
        ReuseStrategyService.storages = [
            ...ReuseStrategyService.storages,
            { key, handle },
        ];
    }
}
// 存储的复用路由
ReuseStrategyService.storages = [];


/***/ }),

/***/ "evl9":
/*!**************************************!*\
  !*** ./src/service/utils.service.ts ***!
  \**************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UtilsService {
    constructor() { }
    /**
     * 获取本地值
     *
     * @param  key 关键字
     */
    getLocal(key) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    /**
     * 设置本地值
     *
     * @param  key 关键字
     * @param  value 值
     */
    setLocal(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * 获取当前会话的值
     *
     * @param  key 关键字
     * @returns 值
     */
    getSession(key) {
        return JSON.parse(sessionStorage.getItem(key) || 'null') || null;
    }
    /**
     * 设置当前会话值
     *
     * @param  key 关键字
     * @param  value 值
     */
    setSession(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * 移除本地值
     *
     * @param  key 关键字
     */
    removeLocal(key) {
        localStorage.removeItem(key);
    }
    /**
     * 移除当前会话
     *
     * @param  key 关键字
     */
    removeSession(key) {
        sessionStorage.removeItem(key);
    }
    /**
     * 设置表单中只定key的值
     * @param form 表单
     * @param key 键
     * @param value 值
     */
    setFormValue(form, key, value) {
        const formValue = {};
        formValue[key] = value;
        form.patchValue(formValue);
    }
    /**
     * 初始化值替换
     * @param from 前
     * @param to 后
     */
    mapToObject(from, to) {
        for (const key in from) {
            if (typeof to[key] === 'undefined') {
                to[key] = from[key];
            }
        }
    }
    /**
     * 生成guid
     */
    guid() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() +
            S4() +
            '-' +
            S4() +
            '-' +
            S4() +
            '-' +
            S4() +
            '-' +
            S4() +
            S4() +
            S4());
    }
    /**
     * 替换值
     * @param str 需要做替换处理的字符串
     * @param obj 替换的对象 key-value
     * @param prop 对象属性模块， 默认 '$[prop]'
     */
    replace(str, obj, tpl = '$[prop]') {
        if (str && obj) {
            for (const key in obj) {
                const replaceStr = tpl.replace('prop', key);
                str = str.replace(replaceStr, obj[key]);
            }
            return str;
        }
        return str;
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qi3M":
/*!**************************************!*\
  !*** ./src/service/theme.service.ts ***!
  \**************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ThemeService {
    constructor() {
        this.themeList = [
            { label: '默认', name: 'default', icon: 'bulb', isDark: false },
            { label: '暗黑', name: 'dark', icon: 'bulb', isDark: true },
        ];
        this.defaultTheme = {
            label: '默认',
            name: 'default',
            icon: 'bulb',
            isDark: false,
        };
        this.currentTheme = 'default';
        this.theme = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.defaultTheme);
        const theme = localStorage.getItem('THEME');
        if (theme) {
            this.changeTheme(theme, true);
        }
        else {
            this.changeTheme('default', true);
        }
    }
    get themes() {
        return this.themeList;
    }
    get theme$() {
        return this.theme.asObservable();
    }
    changeTheme(theme, isFirst = false) {
        const th = this.themeList.find((t) => t.name === theme);
        if (th) {
            this.currentTheme = th.name;
            localStorage.setItem('THEME', th.name);
            this.theme.next(th);
            this.loadTheme(isFirst);
            return;
        }
        this.currentTheme = this.defaultTheme.name;
        localStorage.setItem('THEME', this.defaultTheme.name);
        this.theme.next(this.defaultTheme);
        this.loadTheme(isFirst);
    }
    /**
     * 加载主题
     * @param firstLoad 是否是第一次加载
     * @returns 返回
     */
    loadTheme(firstLoad = true) {
        const theme = this.currentTheme;
        if (firstLoad) {
            document.documentElement.classList.add(theme);
        }
        this.loadCss(`${theme}.css`, theme).then((e) => {
            if (!firstLoad) {
                document.documentElement.classList.add(theme);
            }
            // 删除除了当前主题的所有主题
            const themes = this.themeList.filter((t) => t.name !== this.currentTheme);
            themes.forEach((t) => {
                this.removeUnusedTheme(t.name);
            });
        });
    }
    /**
     * loadCss 加载css样式
     * @param href 样式主题名称
     * @param id link的ID
     * @returns 可观察的加载结果
     */
    loadCss(href, id) {
        return new Promise((resolve, reject) => {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = href;
            style.id = id;
            style.onload = resolve;
            style.onerror = reject;
            document.head.append(style);
        });
    }
    /**
     * 删除没有使用的主题
     * @param theme 主题类型
     */
    removeUnusedTheme(theme) {
        document.documentElement.classList.remove(theme);
        const removedThemeStyle = document.getElementById(theme);
        if (removedThemeStyle) {
            document.head.removeChild(removedThemeStyle);
        }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "u6mN":
/*!*************************************!*\
  !*** ./src/service/auth.service.ts ***!
  \*************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system.service */ "PGYl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/login.service */ "W98g");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.service */ "evl9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(loginService, utils, router) {
        this.loginService = loginService;
        this.utils = utils;
        this.router = router;
        this.isLogged = false;
        this.redirectUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].systemName}/home`;
        this.u = new _system_service__WEBPACK_IMPORTED_MODULE_1__["User"]();
        if (this.user.account && this.user.token) {
            const now = new Date().getTime();
            if (this.user.token.token && this.user.token.expireTime > now) {
                this.isLogged = true;
            }
        }
    }
    get user() {
        if (!this.u.account) {
            const u = this.utils.getSession('user');
            this.u = Object.assign(new _system_service__WEBPACK_IMPORTED_MODULE_1__["User"](), u);
            this.user = this.u;
        }
        return this.u;
    }
    set user(u) {
        this.utils.setSession('user', u);
        this.u = u;
    }
    removeSession() {
        this.utils.removeSession('user');
    }
    login(account, password) {
        this.removeSession();
        return new Promise((resolve, reject) => {
            this.loginService.login(account, password).subscribe((u) => {
                if (u) {
                    this.user = Object.assign({}, u);
                    this.isLogged = true;
                    resolve(u);
                }
            }, (e) => {
                reject(e);
            }, () => {
                resolve(new _system_service__WEBPACK_IMPORTED_MODULE_1__["User"]());
            });
        });
    }
    logout() {
        this.removeSession();
        this.user = new _system_service__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.router.navigate([`/passport/login`]);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/routes */ "TzWn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_service_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/preloading-strategy.service */ "/lRH");
/* harmony import */ var src_service_reuse_strategy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/service/reuse-strategy.service */ "dmpr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        src_service_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_2__["PreloadingStrategyService"],
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteReuseStrategy"], useClass: src_service_reuse_strategy_service__WEBPACK_IMPORTED_MODULE_3__["ReuseStrategyService"] },
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_routes_routes__WEBPACK_IMPORTED_MODULE_0__["mainRoutes"], {
                enableTracing: false,
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
                preloadingStrategy: src_service_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_2__["PreloadingStrategyService"],
                relativeLinkResolution: 'legacy',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map