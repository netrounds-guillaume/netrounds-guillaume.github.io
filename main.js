(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-navigation.ts":
/*!***********************************!*\
  !*** ./src/app/app-navigation.ts ***!
  \***********************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
var navigation = [
    {
        text: 'Home',
        path: '/home',
        icon: 'home'
    },
    {
        text: 'Examples',
        icon: 'folder',
        items: [
            {
                text: 'Profile',
                path: '/profile'
            },
            {
                text: 'Display Data',
                path: '/display-data'
            }
        ]
    },
    {
        text: 'Dashboard',
        path: 'pages/dashboard',
        icon: 'chart'
    }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_display_data_display_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/display-data/display-data.component */ "./src/app/pages/display-data/display-data.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");












var routes = [
    {
        path: 'pages/dashboard',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]]
    },
    {
        path: 'display-data',
        component: _pages_display_data_display_data_component__WEBPACK_IMPORTED_MODULE_7__["DisplayDataComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]]
    },
    {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]]
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]]
    },
    {
        path: 'login-form',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_10__["LoginFormComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]]
    },
    {
        path: '**',
        redirectTo: 'home',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormModule"],
                angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["GridsterModule"],
                _shared_components__WEBPACK_IMPORTED_MODULE_10__["DashboardWidgetModule"]
            ],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], _pages_display_data_display_data_component__WEBPACK_IMPORTED_MODULE_7__["DisplayDataComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isAutorized(); else notAuthorized\">\n    <app-side-nav-outer-toolbar title=\"{{appInfo.title}}\">\n        <router-outlet></router-outlet>\n        <app-footer>\n            Copyright © 2011-2018 Developer Express Inc.\n            <br/>\n            All trademarks or registered trademarks are property of their respective owners.\n        </app-footer>\n    </app-side-nav-outer-toolbar>\n</ng-container>\n\n<ng-template #notAuthorized>\n    <app-single-card>\n        <router-outlet></router-outlet>\n    </app-single-card>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: #f2f2f2;\n  display: flex;\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQXdDO0VBQ3hDLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAaW1wb3J0IFwiLi4vdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYmFzZS5zY3NzXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFzZS1iZywgNS4wMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, screen, appInfo) {
        this.authService = authService;
        this.screen = screen;
        this.appInfo = appInfo;
    }
    Object.defineProperty(AppComponent.prototype, "getClass", {
        get: function () {
            var _this = this;
            return Object.keys(this.screen.sizes).filter(function (cl) { return _this.screen.sizes[cl]; }).join(' ');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isAutorized = function () {
        return this.authService.isLoggedIn;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent.prototype, "getClass", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["ScreenService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["AppInfoService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts */ "./src/app/layouts/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _layouts__WEBPACK_IMPORTED_MODULE_5__["SideNavOuterToolbarModule"],
                _layouts__WEBPACK_IMPORTED_MODULE_5__["SideNavInnerToolbarModule"],
                _layouts__WEBPACK_IMPORTED_MODULE_5__["SingleCardModule"],
                _shared_components__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _shared_components__WEBPACK_IMPORTED_MODULE_6__["LoginFormModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _shared_services__WEBPACK_IMPORTED_MODULE_7__["ScreenService"], _shared_services__WEBPACK_IMPORTED_MODULE_7__["AppInfoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/index.ts":
/*!**********************************!*\
  !*** ./src/app/layouts/index.ts ***!
  \**********************************/
/*! exports provided: SideNavOuterToolbarComponent, SideNavOuterToolbarModule, SideNavInnerToolbarComponent, SideNavInnerToolbarModule, SingleCardComponent, SingleCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav-outer-toolbar/side-nav-outer-toolbar.component */ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarComponent", function() { return _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["SideNavOuterToolbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarModule", function() { return _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["SideNavOuterToolbarModule"]; });

/* harmony import */ var _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav-inner-toolbar/side-nav-inner-toolbar.component */ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarComponent", function() { return _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavInnerToolbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarModule", function() { return _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavInnerToolbarModule"]; });

/* harmony import */ var _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-card/single-card.component */ "./src/app/layouts/single-card/single-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCardComponent", function() { return _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__["SingleCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCardModule", function() { return _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__["SingleCardModule"]; });






/***/ }),

/***/ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-drawer\n    class=\"drawer\"\n    position=\"before\"\n    [closeOnOutsideClick]=\"shaderEnabled\"\n    [openedStateMode]=\"menuMode\"\n    [revealMode]=\"menuRevealMode\"\n    [minSize]=\"minMenuSize\"\n    [shading]=\"shaderEnabled\"\n    [(opened)]=\"menuOpened\">\n\n    <app-side-navigation-menu\n        [items]=\"menuItems\"\n        [compactMode]=\"!menuOpened\"\n        [selectedItem]=\"selectedRoute\"\n        class=\"dx-swatch-additional\"\n        *dxTemplate=\"let dataMenu of 'panel'\"\n        (selectedItemChanged)=\"navigationChanged($event)\"\n        (openMenu)=\"navigationClick()\">\n            <dx-toolbar id=\"navigation-header\">\n                <dxi-item\n                    *ngIf=\"minMenuSize !== 0\"\n                    location=\"before\"\n                    cssClass=\"menu-button\"\n                    widget=\"dxButton\"\n                    [options]=\"{\n                        icon: 'menu',\n                        stylingMode: 'text',\n                        onClick: toggleMenu\n                    }\">\n                </dxi-item>\n                <dxi-item\n                    location=\"before\"\n                    cssClass=\"header-title\"\n                    [text]=\"title\">\n                </dxi-item>\n            </dx-toolbar>\n    </app-side-navigation-menu>\n\n    <div class=\"container\">\n        <app-header\n            [menuToggleEnabled]=\"minMenuSize === 0\"\n            (menuToggle)=\"menuOpened = !menuOpened;\">\n        </app-header>\n\n        <dx-scroll-view class=\"layout-body full-height-scrollable\">\n            <div class=\"content\">\n                <ng-content></ng-content>\n            </div>\n\n            <div class=\"content-block\">\n                <ng-content select=\"app-footer\"></ng-content>\n            </div>\n        </dx-scroll-view>\n    </div>\n</dx-drawer>\n"

/***/ }),

/***/ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.container {\n  height: 100%;\n  flex-direction: column;\n  display: flex; }\n\n.layout-body {\n  flex: 1;\n  min-height: 0; }\n\n.content {\n  flex-grow: 1; }\n\n#navigation-header {\n  background-color: #03A9F4;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n#navigation-header ::ng-deep .menu-button .dx-icon {\n    color: #fff; }\n\n:host-context(.screen-x-small) #navigation-header {\n    padding-left: 20px; }\n\n:host-context(.dx-theme-generic) #navigation-header {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvbGF5b3V0cy9zaWRlLW5hdi1pbm5lci10b29sYmFyL3NpZGUtbmF2LWlubmVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ndWlsbGF1bWUvU291cmNlL3BvYy9uY2MzLWRhc2hib2FyZC1wb2MvZGV2ZXh0cmVtZV9ncmlkc3Rlci9zcmMvdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYWRkaXRpb25hbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxPQUFPO0VBQ1AsYUFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBRUUseUJDakJtQjtFRGtCbkIsd0VBQXdFLEVBQUE7O0FBSDFFO0lBTUksV0N4QmtCLEVBQUE7O0FEMkJwQjtJQUNFLGtCQUFrQixFQUFBOztBQUdwQjtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2lkZS1uYXYtaW5uZXItdG9vbGJhci9zaWRlLW5hdi1pbm5lci10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxheW91dC1ib2R5IHtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbiNuYXZpZ2F0aW9uLWhlYWRlciB7XG4gIEBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5hZGRpdGlvbmFsLnNjc3NcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtYWNjZW50O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG5cbiAgOjpuZy1kZWVwIC5tZW51LWJ1dHRvbiAuZHgtaWNvbiB7XG4gICAgY29sb3I6ICRiYXNlLXRleHQtY29sb3I7XG4gIH1cblxuICA6aG9zdC1jb250ZXh0KC5zY3JlZW4teC1zbWFsbCkgJiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG4gICAgXG4gIDpob3N0LWNvbnRleHQoLmR4LXRoZW1lLWdlbmVyaWMpICYge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG59XG4iLCIkYmFzZS1iZzogIzM2MzY0MDtcbiRiYXNlLXRleHQtY29sb3I6ICNmZmY7XG4kYmFzZS1ib3JkZXItY29sb3I6ICM1MTUxNTk7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4kYmFzZS1hY2NlbnQ6ICMwM0E5RjQ7XG4iXX0= */"

/***/ }),

/***/ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideNavInnerToolbarComponent, SideNavInnerToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarComponent", function() { return SideNavInnerToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarModule", function() { return SideNavInnerToolbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ "./node_modules/devextreme-angular/ui/drawer.js");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "./node_modules/devextreme-angular/ui/scroll-view.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ "./node_modules/devextreme-angular/ui/toolbar.js");
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app-navigation */ "./src/app/app-navigation.ts");










var SideNavInnerToolbarComponent = /** @class */ (function () {
    function SideNavInnerToolbarComponent(screen, router) {
        var _this = this;
        this.screen = screen;
        this.router = router;
        this.menuItems = _app_navigation__WEBPACK_IMPORTED_MODULE_9__["navigation"];
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
        this.toggleMenu = function (e) {
            _this.menuOpened = !_this.menuOpened;
            e.event.stopPropagation();
        };
    }
    SideNavInnerToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]) {
                _this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(function () { return _this.updateDrawer(); });
        this.updateDrawer();
    };
    SideNavInnerToolbarComponent.prototype.updateDrawer = function () {
        var isXSmall = this.screen.sizes['screen-x-small'];
        var isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    };
    Object.defineProperty(SideNavInnerToolbarComponent.prototype, "hideMenuAfterNavigation", {
        get: function () {
            return this.menuMode === 'overlap' || this.temporaryMenuOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideNavInnerToolbarComponent.prototype, "showMenuAfterClick", {
        get: function () {
            return !this.menuOpened;
        },
        enumerable: true,
        configurable: true
    });
    SideNavInnerToolbarComponent.prototype.navigationChanged = function (event) {
        var path = event.itemData.path;
        var pointerEvent = event.event;
        if (path && this.menuOpened) {
            if (event.node.selected) {
                pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent.preventDefault();
        }
    };
    SideNavInnerToolbarComponent.prototype.navigationClick = function () {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SideNavInnerToolbarComponent.prototype, "title", void 0);
    SideNavInnerToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-side-nav-inner-toolbar',
            template: __webpack_require__(/*! ./side-nav-inner-toolbar.component.html */ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./side-nav-inner-toolbar.component.scss */ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_7__["ScreenService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], SideNavInnerToolbarComponent);
    return SideNavInnerToolbarComponent;
}());

var SideNavInnerToolbarModule = /** @class */ (function () {
    function SideNavInnerToolbarModule() {
    }
    SideNavInnerToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_shared_components__WEBPACK_IMPORTED_MODULE_6__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_3__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_5__["DxToolbarModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_4__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [SideNavInnerToolbarComponent],
            declarations: [SideNavInnerToolbarComponent]
        })
    ], SideNavInnerToolbarModule);
    return SideNavInnerToolbarModule;
}());



/***/ }),

/***/ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\n    class=\"layout-header\"\n    [menuToggleEnabled]=\"true\"\n    (menuToggle)=\"menuOpened = !menuOpened;\"\n    [title]=\"title\">\n</app-header>\n\n<dx-drawer\n    class=\"layout-body\"\n    position=\"before\"\n    [closeOnOutsideClick]=\"shaderEnabled\"\n    [openedStateMode]=\"menuMode\"\n    [revealMode]=\"menuRevealMode\"\n    [minSize]=\"minMenuSize\"\n    [shading]=\"shaderEnabled\"\n    [(opened)]=\"menuOpened\">\n\n    <app-side-navigation-menu\n        [items]=\"menuItems\"\n        [compactMode]=\"!menuOpened\"\n        [selectedItem]=\"selectedRoute\"\n        class=\"dx-swatch-additional\"\n        *dxTemplate=\"let dataMenu of 'panel'\"\n        (selectedItemChanged)=\"navigationChanged($event)\"\n        (openMenu)=\"navigationClick()\">\n    </app-side-navigation-menu>\n\n    <dx-scroll-view class=\"full-height-scrollable\">\n        <div class=\"content\">\n            <ng-content></ng-content>\n        </div>\n\n        <div class=\"content-block\">\n            <ng-content select=\"app-footer\"></ng-content>\n        </div>\n    </dx-scroll-view>\n</dx-drawer>\n"

/***/ }),

/***/ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-direction: column;\n  display: flex;\n  height: 100%;\n  width: 100%; }\n\n.layout-header {\n  z-index: 1501; }\n\n.layout-body {\n  flex: 1;\n  min-height: 0; }\n\n.content {\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvbGF5b3V0cy9zaWRlLW5hdi1vdXRlci10b29sYmFyL3NpZGUtbmF2LW91dGVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxPQUFPO0VBQ1AsYUFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9zaWRlLW5hdi1vdXRlci10b29sYmFyL3NpZGUtbmF2LW91dGVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYXlvdXQtaGVhZGVyIHtcbiAgei1pbmRleDogMTUwMTtcbn1cblxuLmxheW91dC1ib2R5IHtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideNavOuterToolbarComponent, SideNavOuterToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarComponent", function() { return SideNavOuterToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarModule", function() { return SideNavOuterToolbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ "./node_modules/devextreme-angular/ui/drawer.js");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "./node_modules/devextreme-angular/ui/scroll-view.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app-navigation */ "./src/app/app-navigation.ts");









var SideNavOuterToolbarComponent = /** @class */ (function () {
    function SideNavOuterToolbarComponent(screen, router) {
        this.screen = screen;
        this.router = router;
        this.menuItems = _app_navigation__WEBPACK_IMPORTED_MODULE_8__["navigation"];
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
    }
    SideNavOuterToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]) {
                _this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(function () { return _this.updateDrawer(); });
        this.updateDrawer();
    };
    SideNavOuterToolbarComponent.prototype.updateDrawer = function () {
        var isXSmall = this.screen.sizes['screen-x-small'];
        var isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    };
    Object.defineProperty(SideNavOuterToolbarComponent.prototype, "hideMenuAfterNavigation", {
        get: function () {
            return this.menuMode === 'overlap' || this.temporaryMenuOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideNavOuterToolbarComponent.prototype, "showMenuAfterClick", {
        get: function () {
            return !this.menuOpened;
        },
        enumerable: true,
        configurable: true
    });
    SideNavOuterToolbarComponent.prototype.navigationChanged = function (event) {
        var path = event.itemData.path;
        var pointerEvent = event.event;
        if (path && this.menuOpened) {
            if (event.node.selected) {
                pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent.preventDefault();
        }
    };
    SideNavOuterToolbarComponent.prototype.navigationClick = function () {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SideNavOuterToolbarComponent.prototype, "title", void 0);
    SideNavOuterToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-side-nav-outer-toolbar',
            template: __webpack_require__(/*! ./side-nav-outer-toolbar.component.html */ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./side-nav-outer-toolbar.component.scss */ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_6__["ScreenService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SideNavOuterToolbarComponent);
    return SideNavOuterToolbarComponent;
}());

var SideNavOuterToolbarModule = /** @class */ (function () {
    function SideNavOuterToolbarModule() {
    }
    SideNavOuterToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_shared_components__WEBPACK_IMPORTED_MODULE_5__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_3__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_4__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [SideNavOuterToolbarComponent],
            declarations: [SideNavOuterToolbarComponent]
        })
    ], SideNavOuterToolbarModule);
    return SideNavOuterToolbarModule;
}());



/***/ }),

/***/ "./src/app/layouts/single-card/single-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-scroll-view height=\"100%\" class=\"full-height-scrollable\">\n    <div class=\"dx-card\">\n        <ng-content></ng-content>\n    </div>\n</dx-scroll-view>\n"

/***/ }),

/***/ "./src/app/layouts/single-card/single-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%; }\n\n.dx-card {\n  width: 330px;\n  margin: auto auto;\n  padding: 40px; }\n\n:host-context(.screen-x-small) .dx-card {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0;\n    border: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvbGF5b3V0cy9zaW5nbGUtY2FyZC9zaW5nbGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUFFYjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9zaW5nbGUtY2FyZC9zaW5nbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmR4LWNhcmQge1xuICB3aWR0aDogMzMwcHg7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBwYWRkaW5nOiA0MHB4O1xuXG4gIDpob3N0LWNvbnRleHQoLnNjcmVlbi14LXNtYWxsKSAmIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gIH0gIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layouts/single-card/single-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.ts ***!
  \**************************************************************/
/*! exports provided: SingleCardComponent, SingleCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCardComponent", function() { return SingleCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCardModule", function() { return SingleCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "./node_modules/devextreme-angular/ui/scroll-view.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__);




var SingleCardComponent = /** @class */ (function () {
    function SingleCardComponent() {
    }
    SingleCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-single-card',
            template: __webpack_require__(/*! ./single-card.component.html */ "./src/app/layouts/single-card/single-card.component.html"),
            styles: [__webpack_require__(/*! ./single-card.component.scss */ "./src/app/layouts/single-card/single-card.component.scss")]
        })
    ], SingleCardComponent);
    return SingleCardComponent;
}());

var SingleCardModule = /** @class */ (function () {
    function SingleCardModule() {
    }
    SingleCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"]],
            exports: [SingleCardComponent],
            declarations: [SingleCardComponent]
        })
    ], SingleCardModule);
    return SingleCardModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\">dashboard</h2>\n<div class=\"dx-card content-block responsive-paddings\">\n  <gridster\n    [options]=\"options\"\n  >\n    <gridster-item\n      [item]=\"item.options\"\n      *ngFor=\"let item of items; index as i\"\n    >\n      <app-dashboard-widget\n        [widget]=\"item\"\n        [dataSource]=\"countriesInfo\"\n        [series]=\"energySources\"\n        [monitors]=\"monitors\"\n        [tasks]=\"tasks\"\n        >\n      </app-dashboard-widget>\n    </gridster-item>\n  </gridster>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid {\n  background: none; }\n  .grid .top-bar {\n    left: 0;\n    right: 0;\n    position: absolute; }\n  .grid .top-bar .drag {\n      height: 40px;\n      position: absolute;\n      width: 100%; }\n  .grid .top-bar .drag.drag-handler {\n        cursor: move; }\n  .grid .top-bar .drag.drag-handler:hover {\n          background-color: #e0e0e0; }\n  .grid .top-bar .title {\n      margin: 0 0 0 8px;\n      z-index: 1; }\n  .grid .top-bar .controls {\n      color: #e0e0e0; }\n  .grid .panel-content {\n    position: absolute;\n    bottom: 16px;\n    left: 8px;\n    right: 8px;\n    top: 48px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQVFJLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCLEVBQUE7RUFWdEI7TUFhTSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQWZqQjtRQWtCUSxZQUFZLEVBQUE7RUFsQnBCO1VBcUJVLHlCQ3JCaUIsRUFBQTtFREEzQjtNQTJCTSxpQkFBaUI7TUFDakIsVUFBVSxFQUFBO0VBNUJoQjtNQWdDTSxjQ2hDcUIsRUFBQTtFREEzQjtJQXNDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzcyc7XG5cbi5ncmlkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcblxuICAvLyAuaXRlbSB7XG4gIC8vICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigxKTtcbiAgLy8gfVxuXG4gIC50b3AtYmFyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIC5kcmFnIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAmLmRyYWctaGFuZGxlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1ib3JkZXItY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICBjb2xvcjogJGJhc2UtYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG5cbiAgLnBhbmVsLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE2cHg7XG4gICAgbGVmdDogOHB4O1xuICAgIHJpZ2h0OiA4cHg7XG4gICAgdG9wOiA0OHB4O1xuICB9XG5cbn1cbiIsIiRiYXNlLWJnOiAjZmZmO1xuJGJhc2UtdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiRiYXNlLWJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiRiYXNlLWFjY2VudDogIzAzQTlGNDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service) {
        // this.dashboard = [{
        //     x: 0,
        //     y: 0,
        //     rows: 1,
        //     cols: 1
        //   }];
        this.countriesInfo = service.getCountriesInfo();
        this.energySources = service.getEnergySources();
        this.monitors = service.getEmployees();
        this.tasks = service.getTasks();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.options = {
        //   // itemResizeCallback: this.gridsterItemChange,
        //   // itemChangeCallback: this.gridsterItemChange,
        //   pushItems: true,
        //   margin: 5,
        //   displayGrid: DisplayGrid.None,
        //   // minCols: 2,
        //   // maxCols: 10,
        //   // minRows: 1,
        //   setGridSize: true,
        //   gridType: GridType.ScrollVertical,
        //   resizable: {
        //       enabled: true
        //   },
        //   draggable: {
        //       enabled: true
        //   },
        this.options = {
            compactType: angular_gridster2__WEBPACK_IMPORTED_MODULE_2__["CompactType"].CompactUp,
            displayGrid: angular_gridster2__WEBPACK_IMPORTED_MODULE_2__["DisplayGrid"].None,
            draggable: {
                ignoreContent: true,
                enabled: true,
            },
            setGridSize: true,
            fixedRowHeight: 100,
            gridType: angular_gridster2__WEBPACK_IMPORTED_MODULE_2__["GridType"].ScrollVertical,
            margin: 8,
            maxCols: 8,
            maxRows: 24,
            minCols: 1,
            pushItems: true,
            pushResizeItems: true,
            resizable: { enabled: true },
        };
        // itemResizeCallback: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => {
        // update DB with new size
        // send the update to widgets
        // this.resizeEvent.emit({item, itemComponent});
        // }
        // gridType: GridType.ScrollVertical,
        // compactType: CompactType.None,
        // pushItems: true,
        // draggable: {
        //   enabled: true
        // },
        // resizable: {
        //   enabled: true
        // }
        // };
        this.items = [
            {
                locked: false,
                options: {
                    cols: 3,
                    rows: 3,
                    x: 0,
                    y: 0,
                },
                title: 'Error Second',
                type: 'es',
            },
            {
                locked: false,
                options: {
                    cols: 5,
                    maxItemRows: 2,
                    minItemCols: 2,
                    minItemRows: 2,
                    rows: 2,
                    x: 0,
                    y: 3,
                },
                title: 'Trend',
                type: 'line',
            }
        ];
    };
    // gridsterItemChange = (gridsterItem: GridsterItem) => {
    //   this.charts.forEach(chart => {
    //
    //     const p = chart.instance.element().parentElement;
    //     const size = {
    //       width: p.clientWidth,
    //       height: p.clientHeight,
    //     };
    //
    //     chart.instance.option('size', size);
    //   });
    // }
    DashboardComponent.prototype.changedOptions = function () {
        this.options.api.optionsChanged();
    };
    DashboardComponent.prototype.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    DashboardComponent.prototype.addItem = function () {
        this.items.push({});
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            providers: [src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["Service"]],
            preserveWhitespaces: true,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["Service"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/display-data/display-data.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/display-data/display-data.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\">Display Data</h2>\n\n<dx-data-grid class=\"dx-card wide-card\"\n    [dataSource]=\"dataSource\"\n    [showBorders]=\"false\"\n    [focusedRowEnabled]=\"true\"\n    [focusedRowIndex]=\"0\"\n    [columnAutoWidth]=\"true\"\n    [columnHidingEnabled]=\"true\">\n\n    <dxo-paging [pageSize]=\"10\"></dxo-paging>\n    <dxo-pager [showPageSizeSelector]=\"true\" [showInfo]=\"true\"></dxo-pager>\n    <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n\n    <dxi-column\n        dataField=\"Task_ID\"\n        [width]=\"90\"\n        [hidingPriority]=\"2\">\n    </dxi-column>\n    <dxi-column\n        dataField=\"Task_Subject\"\n        [width]=\"190\"\n        caption=\"Subject\"\n        [hidingPriority]=\"8\">\n    </dxi-column>\n    <dxi-column\n        dataField=\"Task_Status\"\n        caption=\"Status\"\n        [hidingPriority]=\"6\">\n    </dxi-column>\n    <dxi-column\n        dataField=\"Task_Priority\"\n        caption=\"Priority\"\n        [hidingPriority]=\"5\">\n        <dxo-lookup\n            [dataSource]=\"priority\"\n            valueExpr=\"value\"\n            displayExpr=\"name\">\n        </dxo-lookup>\n    </dxi-column>\n    <dxi-column\n        dataField=\"ResponsibleEmployee.Employee_Full_Name\"\n        caption=\"Assigned To\"\n        [allowSorting]=\"false\"\n        [hidingPriority]=\"7\">\n    </dxi-column>\n    <dxi-column\n        dataField=\"Task_Start_Date\"\n        caption=\"Start Date\"\n        dataType=\"date\"\n        [hidingPriority]=\"3\">\n    </dxi-column>\n    <dxi-column\n        dataField=\"Task_Due_Date\"\n        caption=\"Due Date\"\n        dataType=\"date\"\n        [hidingPriority]=\"4\">\n    </dxi-column>\n    <dxi-column\n        dataField=\"Task_Priority\"\n        caption=\"Priority\"\n        [hidingPriority]=\"1\">\n    </dxi-column>\n    <dxi-column\n        dataField=\"Task_Completion\"\n        caption=\"Completion\"\n        [hidingPriority]=\"0\">\n    </dxi-column>\n</dx-data-grid>\n"

/***/ }),

/***/ "./src/app/pages/display-data/display-data.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/display-data/display-data.component.ts ***!
  \**************************************************************/
/*! exports provided: DisplayDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDataComponent", function() { return DisplayDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/data/odata/store */ "./node_modules/devextreme/data/odata/store.js");
/* harmony import */ var devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_2__);



var DisplayDataComponent = /** @class */ (function () {
    function DisplayDataComponent() {
        this.dataSource = {
            store: {
                type: 'odata',
                key: 'Task_ID',
                url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
            },
            expand: 'ResponsibleEmployee',
            select: [
                'Task_ID',
                'Task_Subject',
                'Task_Start_Date',
                'Task_Due_Date',
                'Task_Status',
                'Task_Priority',
                'Task_Completion',
                'ResponsibleEmployee/Employee_Full_Name'
            ]
        };
        this.priority = [
            { name: 'High', value: 4 },
            { name: 'Urgent', value: 3 },
            { name: 'Normal', value: 2 },
            { name: 'Low', value: 1 }
        ];
    }
    DisplayDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./display-data.component.html */ "./src/app/pages/display-data/display-data.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DisplayDataComponent);
    return DisplayDataComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\">Home</h2>\n<div class=\"content-block\">\n    <div class=\"dx-card responsive-paddings\">\n        <div class=\"logos-container\">\n            <svg class=\"devextreme-logo\" viewBox=\"0 0 200 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M21.269 16.6304C21.269 21.9331 20.1851 25.9907 18.0171 28.8032C15.8638 31.6011 12.7583 33 8.70068 33H0.834473V0.875977H9.42578C13.1611 0.875977 16.0688 2.26025 18.1489 5.02881C20.229 7.78271 21.269 11.6499 21.269 16.6304ZM15.1387 16.8062C15.1387 9.62842 13.1611 6.03955 9.20605 6.03955H6.81104V27.7705H8.74463C10.9272 27.7705 12.5386 26.8623 13.5786 25.0459C14.6187 23.2148 15.1387 20.4683 15.1387 16.8062ZM33.7504 33.4395C30.6889 33.4395 28.2719 32.3555 26.4994 30.1875C24.7416 28.0049 23.8627 24.9214 23.8627 20.937C23.8627 16.894 24.661 13.7373 26.2577 11.4668C27.8544 9.19629 30.081 8.06104 32.9374 8.06104C35.6034 8.06104 37.7055 9.03516 39.2436 10.9834C40.7816 12.917 41.5507 15.6343 41.5507 19.1353V22.2554H29.7953C29.8393 24.438 30.286 26.064 31.1356 27.1333C31.9853 28.188 33.1571 28.7153 34.6513 28.7153C36.5556 28.7153 38.5038 28.1221 40.496 26.9355V31.7476C38.621 32.8755 36.3725 33.4395 33.7504 33.4395ZM32.8935 12.5654C32.0585 12.5654 31.37 13.0122 30.828 13.9058C30.286 14.7847 29.9711 16.1543 29.8832 18.0146H35.8158C35.7865 16.2275 35.5155 14.8726 35.0028 13.9497C34.4901 13.0269 33.787 12.5654 32.8935 12.5654ZM48.429 33L42.035 8.52246H48.0994L51.2195 22.6948C51.3514 23.354 51.5052 24.3208 51.681 25.5952C51.8714 26.855 51.9886 27.7632 52.0325 28.3198H52.1204C52.1351 27.8804 52.1937 27.2505 52.2962 26.4302C52.4134 25.6099 52.5306 24.8555 52.6478 24.167C52.7649 23.4785 53.8929 18.2637 56.0315 8.52246H62.096L55.68 33H48.429ZM78.5324 33H64.0524V0.875977H78.5324V6.03955H70.029V13.686H77.9172V18.8716H70.029V27.7705H78.5324V33ZM86.1798 20.4976L80.0714 8.52246H86.1358L89.3878 15.9932L92.398 8.52246H98.4186L92.2662 20.4976L98.6822 33H92.5738L89.1021 25.1777L85.8722 33H79.7857L86.1798 20.4976ZM109.12 28.4956C109.94 28.4956 110.827 28.2905 111.779 27.8804V32.4507C110.827 33.1099 109.398 33.4395 107.494 33.4395C105.37 33.4395 103.795 32.8096 102.77 31.5498C101.745 30.2754 101.232 28.3711 101.232 25.8369V13.1587H98.8589V10.5439L101.913 8.43457L103.407 3.24902H107.143V8.52246H111.581V13.1587H107.143V26.0347C107.143 27.6753 107.802 28.4956 109.12 28.4956ZM124.744 8.06104C125.461 8.06104 126.164 8.1709 126.853 8.39062L126.172 14.0596C125.762 13.9131 125.227 13.8398 124.568 13.8398C123.147 13.8398 122.056 14.4038 121.294 15.5317C120.532 16.645 120.151 18.271 120.151 20.4097V33H114.307V8.52246H119.119L119.778 12.3457H119.975C120.62 10.8076 121.323 9.70898 122.085 9.0498C122.847 8.39062 123.733 8.06104 124.744 8.06104ZM137.598 33.4395C134.537 33.4395 132.12 32.3555 130.347 30.1875C128.59 28.0049 127.711 24.9214 127.711 20.937C127.711 16.894 128.509 13.7373 130.106 11.4668C131.702 9.19629 133.929 8.06104 136.785 8.06104C139.451 8.06104 141.554 9.03516 143.092 10.9834C144.63 12.917 145.399 15.6343 145.399 19.1353V22.2554H133.643C133.687 24.438 134.134 26.064 134.984 27.1333C135.833 28.188 137.005 28.7153 138.499 28.7153C140.404 28.7153 142.352 28.1221 144.344 26.9355V31.7476C142.469 32.8755 140.221 33.4395 137.598 33.4395ZM136.742 12.5654C135.907 12.5654 135.218 13.0122 134.676 13.9058C134.134 14.7847 133.819 16.1543 133.731 18.0146H139.664C139.635 16.2275 139.364 14.8726 138.851 13.9497C138.338 13.0269 137.635 12.5654 136.742 12.5654ZM172.668 33V18.4102C172.668 14.8213 171.781 13.0269 170.009 13.0269C168.72 13.0269 167.797 13.6714 167.24 14.9604C166.684 16.2349 166.405 18.2856 166.405 21.1128V33H160.517V18.4102C160.517 14.8213 159.616 13.0269 157.814 13.0269C156.554 13.0269 155.639 13.6641 155.068 14.9385C154.496 16.2129 154.211 18.3149 154.211 21.2446V33H148.366V8.52246H153.002L153.705 11.6646H154.079C154.665 10.4194 155.463 9.51123 156.474 8.93994C157.499 8.354 158.591 8.06104 159.748 8.06104C162.736 8.06104 164.728 9.47461 165.724 12.3018H165.944C167.189 9.47461 169.189 8.06104 171.943 8.06104C174.111 8.06104 175.751 8.82275 176.864 10.3462C177.992 11.8696 178.556 14.0962 178.556 17.0259V33H172.668ZM191.433 33.4395C188.372 33.4395 185.955 32.3555 184.182 30.1875C182.424 28.0049 181.546 24.9214 181.546 20.937C181.546 16.894 182.344 13.7373 183.941 11.4668C185.537 9.19629 187.764 8.06104 190.62 8.06104C193.286 8.06104 195.388 9.03516 196.926 10.9834C198.464 12.917 199.233 15.6343 199.233 19.1353V22.2554H187.478C187.522 24.438 187.969 26.064 188.818 27.1333C189.668 28.188 190.84 28.7153 192.334 28.7153C194.238 28.7153 196.187 28.1221 198.179 26.9355V31.7476C196.304 32.8755 194.055 33.4395 191.433 33.4395ZM190.576 12.5654C189.741 12.5654 189.053 13.0122 188.511 13.9058C187.969 14.7847 187.654 16.1543 187.566 18.0146H193.499C193.469 16.2275 193.198 14.8726 192.686 13.9497C192.173 13.0269 191.47 12.5654 190.576 12.5654Z\" fill=\"#F05B41\"/>\n            </svg>\n            <svg class =\"plus\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M21.6309 13.3433H13.1714V21.8027H8.73291V13.3433H0.229492V8.88281H8.73291V0.379395H13.1714V8.88281H21.6309V13.3433Z\" fill=\"#BCBCBC\"/>\n            </svg>\n            <svg class=\"angular-logo\" viewBox=\"0 0 512 139\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"#B52E31\"><path d=\"M150.6 102.8v-63h8.1l38.5 50.7V39.8h7.7v63h-8.1l-38.5-51.2v51.2h-7.7zM267.6 100.3c-5.1 1.9-10.6 2.9-16.4 2.9-22.8 0-34.2-10.9-34.2-32.8 0-20.7 11-31.1 33-31.1 6.3 0 12.2.9 17.6 2.6v7c-5.4-2.1-11-3.1-16.7-3.1-17.2 0-25.8 8.2-25.8 24.4 0 17.5 8.5 26.2 25.4 26.2 2.7 0 5.7-.4 9-1.1V74.2h8.1v26.1zM280.6 78.5V39.8h8.1v38.7c0 12.1 6 18.2 18.1 18.2 12 0 18.1-6.1 18.1-18.2V39.8h8.1v38.7c0 16.5-8.7 24.8-26.2 24.8s-26.2-8.3-26.2-24.8zM355.6 39.8v56.4h33v6.6h-41.1v-63h8.1zM400.3 102.8h-8.5l31.3-71.3 31.3 71.3h-9L437.3 83h-20.8l2.2-6.6h15.9l-11.8-28.5-22.5 54.9zM463.1 102.8v-63H490c12 0 18 5 18 15.1 0 8.2-5.9 14.3-17.6 18.2l21.6 29.7h-10.7l-20-28.3v-5.3c12-1.9 18.1-6.5 18.1-13.9 0-5.8-3.3-8.7-10-8.7h-18v56.2h-8.3z\"/></g><path d=\"M0 23L64.5 0l66.2 22.6-10.7 85.3-55.5 30.7-54.6-30.3L0 23z\" fill=\"#E23237\"/><path d=\"M130.7 22.6L64.5 0v138.6l55.5-30.7 10.7-85.3z\" fill=\"#B52E31\"/><path d=\"M64.6 16.2l-40.2 89.4 15-.3 8.1-20.2H83.4l8.8 20.4 14.3.3-41.9-89.6zm.1 28.7l13.6 28.4H52.8l11.9-28.4z\" fill=\"#FFF\"/></g>\n            </svg>\n        </div>\n\n        <p>Welcome to <b>Dashboard Ncc3</b>!</p><p>The application is built with:</p>\n        <ul>\n            <li><a href=\"https://cli.angular.io/\">Angular CLI</a></li>\n            <li><a href=\"https://github.com/devexpress/devextreme-cli\">DevExtreme CLI</a></li>\n            <li><a href=\"https://github.com/devexpress/devextreme-angular\">DevExtreme-Angular</a> components</li>\n        </ul>\n\n        <p>The application layouts are implemented using the <a href=\"https://js.devexpress.com/Documentation/\">Drawer</a> component. Several component examples are also available in the <b>Examples</b> section. For complete information on DevExtreme, check our <a href=\"https://js.devexpress.com/Documentation/\">documentation</a> and <a href=\"https://js.devexpress.com/Demos/WidgetsGallery/\">demos</a>.</p>\n        <p>You can do the following to create a custom application using this template as a base point:</p>\n\n        <ul>\n            <li><b>Add new views</b></li>\n            <li><b>Switch themes</b></li>\n            <li><b>Customize themes</b></li>\n            <li><b>Apply the additional theme to custom elements</b></li>\n            <li><b>Use theme colors in custom elements</b></li>\n            <li><b>Switch the layout</b></li>\n        </ul>\n\n        <p>Please, read README in <a href=\"https://github.com/DevExpress/devextreme-angular-template/blob/master/README.md\">devextreme-angular-template</a> GitHub repository for more information.</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logos-container {\n  margin: 20px 0 40px 0;\n  text-align: center; }\n  .logos-container svg {\n    display: inline-block; }\n  .devextreme-logo {\n  width: 200px;\n  height: 34px;\n  margin-bottom: 13px; }\n  .angular-logo {\n  width: 220px;\n  height: 62px; }\n  .plus {\n  margin: 15px 10px;\n  width: 22px;\n  height: 22px; }\n  :host-context(.screen-x-small) .logos-container svg {\n  width: 100%;\n  display: block; }\n  :host-context(.screen-x-small) .logos-container svg.plus {\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBO0VBRnBCO0lBSUkscUJBQXFCLEVBQUE7RUFJekI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQixFQUFBO0VBR3JCO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTtFQUdkO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFHZDtFQUVJLFdBQVc7RUFDWCxjQUFjLEVBQUE7RUFIbEI7SUFLTSxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3MtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IDAgNDBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHN2ZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG5cbi5kZXZleHRyZW1lLWxvZ28ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cblxuLmFuZ3VsYXItbG9nbyB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiA2MnB4O1xufVxuXG4ucGx1cyB7XG4gIG1hcmdpbjogMTVweCAxMHB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5zY3JlZW4teC1zbWFsbCkgLmxvZ29zLWNvbnRhaW5lciB7XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgJi5wbHVzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\">Profile</h2>\n\n<div class=\"content-block dx-card responsive-paddings\">\n    <div class=\"form-avatar\">\n        <img src=\"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/{{employee.Picture}}\"/>\n    </div>\n    <span>{{employee.Notes}}</span>\n</div>\n\n<div class=\"content-block dx-card responsive-paddings\">\n    <dx-form id=\"form\"\n        [formData]=\"employee\"\n        labelLocation=\"top\"\n        [minColWidth]=\"233\"\n        colCount=\"auto\">\n    </dx-form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-avatar {\n  float: left;\n  height: 120px;\n  width: 120px;\n  margin-right: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: #fff;\n  overflow: hidden; }\n  .form-avatar img {\n    height: 120px;\n    display: block;\n    margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7RUFWbEI7SUFhSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWF2YXRhciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.employee = {
            ID: 7,
            FirstName: 'Sandra',
            LastName: 'Johnson',
            Prefix: 'Mrs.',
            Position: 'Controller',
            Picture: 'images/employees/06.png',
            BirthDate: new Date('1974/11/15'),
            HireDate: new Date('2005/05/11'),
            /* tslint:disable-next-line:max-line-length */
            Notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if yo`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
            Address: '4600 N Virginia Rd.'
        };
    }
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/dashboard-widget/dashboard-widget.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/dashboard-widget/dashboard-widget.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (resized)=\"handleResize($event)\" class=\"widget-container\">\n<dx-toolbar>\n    <dxi-item\n        widget=\"dxButton\"\n        location=\"after\"\n        [options]=\"{\n            icon: 'refresh'\n        }\">\n    </dxi-item>\n    <dxi-item\n        widget=\"dxButton\"\n        location=\"after\"\n        [options]=\"{\n            icon: 'preferences'\n        }\">\n    </dxi-item>\n    <dxi-item\n        widget=\"dxButton\"\n        location=\"after\"\n        [options]=\"{\n            text: 'Add',\n            icon: 'add'\n        }\",\n        locateInMenu=\"always\">\n    </dxi-item>\n    <dxi-item\n        widget=\"dxButton\"\n        location=\"after\"\n        [options]=\"{\n            text: 'Remove',\n            icon: 'trash'\n        }\",\n        locateInMenu=\"always\">\n    </dxi-item>\n    <dxi-item\n        text=\"Products\"\n        location=\"center\">\n    </dxi-item>\n</dx-toolbar>\n<dx-chart\n  *ngIf=\"widget.type === 'line'\"\n  class=\"gridster-item-content\"\n  palette=\"Soft Pastel\"\n  [dataSource]=\"dataSource\">\n  <dxo-zoom-and-pan\n    argumentAxis=\"both\"\n    >\n  </dxo-zoom-and-pan>\n  <dxi-series\n    *ngFor=\"let serie of series\"\n    [valueField]=\"serie.value\"\n    [name]=\"serie.name\">\n  </dxi-series>\n  <dxo-common-series-settings #seriesSettings\n    argumentField=\"timestamp\"\n    type=\"area\">\n  </dxo-common-series-settings>\n  <dxo-argument-axis\n    discreteAxisDivisionMode=\"crossLabels\"\n    [valueMarginsEnabled]=\"false\"\n    [visualRange]=\"{startValue:90, endValue:100}\">\n    <dxo-grid [visible]=\"true\"></dxo-grid>\n  </dxo-argument-axis>\n  <dxo-scroll-bar [visible]=\"true\"></dxo-scroll-bar>\n  <dxo-legend\n    verticalAlignment=\"bottom\"\n    horizontalAlignment=\"center\"\n    itemTextPosition=\"right\">\n  </dxo-legend>\n  <dxo-title\n    horizontalAlignment=\"center\"\n    text=\"Top 5 test agents by response time\">\n    <dxo-subtitle text=\"(Subtitle)\">\n    </dxo-subtitle>\n  </dxo-title>\n  <dxo-tooltip\n    [enabled]=\"true\"\n    [customizeTooltip]=\"customizeTooltip\">\n  </dxo-tooltip>\n</dx-chart>\n<dx-data-grid\n    *ngIf=\"widget.type === 'es'\"\n    class=\"gridster-item-content\"\n    [dataSource]=\"monitors\"\n    [masterDetail]=\"{ enabled: true, template: 'detail' }\"\n    keyExpr=\"id\"\n    [showColumnLines]=\"false\"\n    [showBorders]=\"true\">\n\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\n\n    <dxi-column dataField=\"name\" caption=\"Name\"></dxi-column>\n    <dxi-column dataField=\"tags\" caption=\"Tags\" [width]=\"120\" [allowSorting]=\"false\"></dxi-column>\n    <dxi-column dataField=\"es\" caption=\"Custom header template\" [allowSorting]=\"false\" cellTemplate=\"esBarCellTemplate\"></dxi-column>\n    <dxi-column dataField=\"sla\" [width]=\"60\" caption=\"SLA\"></dxi-column>\n    <dxi-column type=\"buttons\" caption=\"Share\" [width]=\"60\">\n      <dxi-button\n        hint=\"Share\"\n        icon=\"message\"\n        [visible]=\"true\"\n        [onClick]=\"null\">\n      </dxi-button>\n    </dxi-column>\n\n    <div *dxTemplate=\"let monitor of 'detail'\">\n        <div class=\"master-detail-caption\">{{monitor.data.name + \"'s tasks:\"}}</div>\n        <dx-data-grid\n            [dataSource]=\"getTasks(monitor.key)\"\n            [showBorders]=\"true\"\n            [columnAutoWidth]=\"true\">\n                <dxi-column dataField=\"Subject\"></dxi-column>\n                <dxi-column dataField=\"StartDate\" dataType=\"date\"></dxi-column>\n                <dxi-column dataField=\"DueDate\" dataType=\"date\"></dxi-column>\n                <dxi-column dataField=\"Priority\"></dxi-column>\n                <dxi-column dataType=\"boolean\" caption=\"Completed\" [calculateCellValue]=\"completedValue\"></dxi-column>\n        </dx-data-grid>\n    </div>\n    <div *dxTemplate=\"let monitor of 'esBarCellTemplate'\">\n      <div>\n          <img [src]=\"getEsBarImage(monitor)\"/>\n      </div>\n  </div>\n</dx-data-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/dashboard-widget/dashboard-widget.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/dashboard-widget/dashboard-widget.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".widget-container {\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGFzaGJvYXJkLXdpZGdldC9kYXNoYm9hcmQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Rhc2hib2FyZC13aWRnZXQvZGFzaGJvYXJkLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/dashboard-widget/dashboard-widget.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/dashboard-widget/dashboard-widget.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DashboardWidgetComponent, DashboardWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardWidgetComponent", function() { return DashboardWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardWidgetModule", function() { return DashboardWidgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/fesm5/angular-resize-event.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








var DashboardWidgetComponent = /** @class */ (function () {
    function DashboardWidgetComponent() {
        this.tasksDataSourceStorage = [];
        this.handleResize = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["throttle"])(this.handleResize, 10).bind(this);
    }
    DashboardWidgetComponent.prototype.handleResize = function (event) {
        console.log(event);
        if (!this.chart) {
            return;
        }
        // this.chart.instance.option('size', {height: event.newHeight, width: event.newWidth});
        this.chart.instance.render();
    };
    DashboardWidgetComponent.prototype.customizeTooltip = function (arg) {
        return {
            text: arg.valueText
        };
    };
    DashboardWidgetComponent.prototype.completedValue = function (rowData) {
        return rowData.Status === 'Completed';
    };
    DashboardWidgetComponent.prototype.getTasks = function (key) {
        var item = this.tasksDataSourceStorage.find(function (i) { return i.key === key; });
        if (!item) {
            item = {
                key: key,
                dataSourceInstance: new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_6___default.a({
                    store: new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_5___default.a({
                        data: this.tasks,
                        key: 'id'
                    }),
                    filter: ['monitor_id', '=', key]
                })
            };
            this.tasksDataSourceStorage.push(item);
        }
        return item.dataSourceInstance;
    };
    DashboardWidgetComponent.prototype.getEsBarImage = function (monitor) {
        return 'data:image/png;base64,' + monitor.data.esbar.image_base64;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxChartComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxChartComponent"])
    ], DashboardWidgetComponent.prototype, "chart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardWidgetComponent.prototype, "dataSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardWidgetComponent.prototype, "monitors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardWidgetComponent.prototype, "tasks", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardWidgetComponent.prototype, "series", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardWidgetComponent.prototype, "widget", void 0);
    DashboardWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard-widget',
            template: __webpack_require__(/*! ./dashboard-widget.component.html */ "./src/app/shared/components/dashboard-widget/dashboard-widget.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dashboard-widget.component.scss */ "./src/app/shared/components/dashboard-widget/dashboard-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardWidgetComponent);
    return DashboardWidgetComponent;
}());

var DashboardWidgetModule = /** @class */ (function () {
    function DashboardWidgetModule() {
    }
    DashboardWidgetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxChartModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridModule"],
                angular_resize_event__WEBPACK_IMPORTED_MODULE_3__["AngularResizedEventModule"]
            ],
            declarations: [DashboardWidgetComponent],
            exports: [DashboardWidgetComponent]
        })
    ], DashboardWidgetModule);
    return DashboardWidgetModule;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  color: rgba(0, 0, 0, 0.609);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 20px;\n  padding-bottom: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFjO0VBQ2QsMkJDSG1DO0VESW5DLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogcmdiYSgkYmFzZS10ZXh0LWNvbG9yLCBhbHBoYSgkYmFzZS10ZXh0LWNvbG9yKSAqIDAuNyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cbiIsIiRiYXNlLWJnOiAjZmZmO1xuJGJhc2UtdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiRiYXNlLWJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiRiYXNlLWFjY2VudDogIzAzQTlGNDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent, FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: "\n    <footer><ng-content></ng-content></footer>\n  ",
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());

var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [FooterComponent],
            exports: [FooterComponent]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <dx-toolbar class=\"header-toolbar\">\n        <dxi-item\n            *ngIf=\"menuToggleEnabled\"\n            location=\"before\"\n            widget=\"dxButton\"\n            cssClass=\"menu-button\"\n            [options]=\"{\n                icon: 'menu',\n                stylingMode: 'text',\n                onClick: toggleMenu\n            }\">\n        </dxi-item>\n        <dxi-item\n            location=\"before\"\n            cssClass=\"header-title\"\n            *ngIf=\"title\"\n            [text]=\"title\">\n        </dxi-item>\n        <dxi-item\n            location=\"after\"\n            locateInMenu=\"auto\"\n            menuItemTemplate=\"menuItem\">\n            <div *dxTemplate=\"let data of 'item'\">\n                <dx-button\n                    class=\"user-button authorization\"\n                    width=\"170px\"\n                    height=\"100%\"\n                    stylingMode=\"text\">\n                    <div *dxTemplate=\"let data of 'content'\">\n                        <app-user-panel [menuItems]=\"userMenuItems\" menuMode=\"context\"></app-user-panel>\n                    </div>\n                </dx-button>\n            </div>\n        </dxi-item>\n        <div *dxTemplate=\"let data of 'menuItem'\">\n            <app-user-panel [menuItems]=\"userMenuItems\" menuMode=\"list\"></app-user-panel>\n        </div>\n    </dx-toolbar>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  line-height: 1.5; }\n  .content h2 {\n    font-size: 30px;\n    margin-top: 20px;\n    margin-bottom: 20px; }\n  .content-block {\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-top: 20px; }\n  .screen-x-small .content-block {\n    margin-left: 20px;\n    margin-right: 20px; }\n  .responsive-paddings {\n  padding: 20px; }\n  .screen-large .responsive-paddings {\n    padding: 40px; }\n  .dx-card.wide-card {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-right: 0;\n  border-left: 0; }\n  .full-height-scrollable > div > div > .dx-scrollable-content {\n  height: 100%; }\n  .full-height-scrollable > div > div > .dx-scrollable-content > .dx-scrollview-content {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%; }\n  :host {\n  flex: 0 0 auto;\n  z-index: 1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  :host ::ng-deep .dx-toolbar .dx-toolbar-item.menu-button > .dx-toolbar-item-content .dx-icon {\n    color: #03A9F4; }\n  ::ng-deep .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n  padding: 0 40px; }\n  :host-context(.screen-x-small) ::ng-deep .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n    padding: 0 20px; }\n  ::ng-deep .dx-toolbar .dx-toolbar-item.menu-button {\n  width: 60px;\n  text-align: center;\n  padding: 0; }\n  ::ng-deep .header-title .dx-item-content {\n  padding: 0;\n  margin: 0; }\n  :host-context(.dx-theme-generic) .dx-toolbar {\n  padding: 10px 0; }\n  :host-context(.dx-theme-generic) .user-button > .dx-button-content {\n  padding: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9keC1zdHlsZXMuc2NzcyIsIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUFJdkI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBRWhCO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBSXRCO0VBQ0UsYUFBYSxFQUFBO0VBRWI7SUFDRSxhQUFhLEVBQUE7RUFJakI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYyxFQUFBO0VBR2hCO0VBQ0UsWUFBWSxFQUFBO0VBRGQ7SUFJSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQixFQUFBO0VDeENwQjtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysd0VBQXdFLEVBQUE7RUFIMUU7SUFNSSxjQ0xpQixFQUFBO0VEU3JCO0VBQ0UsZUFBZSxFQUFBO0VBRWY7SUFDRSxlQUFlLEVBQUE7RUFJbkI7RUFDRSxXRHlCeUI7RUN4QnpCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7RUFHWjtFQUNFLFVBQVU7RUFDVixTQUFTLEVBQUE7RUFHWDtFQUVJLGVBQWUsRUFBQTtFQUZuQjtFQU1JLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cblxuLmNvbnRlbnQtYmxvY2sge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIC5zY3JlZW4teC1zbWFsbCAmIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLnJlc3BvbnNpdmUtcGFkZGluZ3Mge1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIC5zY3JlZW4tbGFyZ2UgJiB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxufVxuXG4uZHgtY2FyZC53aWRlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4uZnVsbC1oZWlnaHQtc2Nyb2xsYWJsZSA+IGRpdiA+IGRpdiA+LmR4LXNjcm9sbGFibGUtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcblxuICAmID4gLmR4LXNjcm9sbHZpZXctY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuJHNpZGUtcGFuZWwtbWluLXdpZHRoOiA2MHB4O1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2R4LXN0eWxlcy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcblxuICA6Om5nLWRlZXAgLmR4LXRvb2xiYXIgLmR4LXRvb2xiYXItaXRlbS5tZW51LWJ1dHRvbj4uZHgtdG9vbGJhci1pdGVtLWNvbnRlbnQgLmR4LWljb24ge1xuICAgIGNvbG9yOiAkYmFzZS1hY2NlbnQ7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5keC10b29sYmFyLmhlYWRlci10b29sYmFyIC5keC10b29sYmFyLWl0ZW1zLWNvbnRhaW5lciAuZHgtdG9vbGJhci1hZnRlciB7XG4gIHBhZGRpbmc6IDAgNDBweDtcblxuICA6aG9zdC1jb250ZXh0KC5zY3JlZW4teC1zbWFsbCkgJiB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAuZHgtdG9vbGJhciAuZHgtdG9vbGJhci1pdGVtLm1lbnUtYnV0dG9uIHtcbiAgd2lkdGg6ICRzaWRlLXBhbmVsLW1pbi13aWR0aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG46Om5nLWRlZXAgLmhlYWRlci10aXRsZSAuZHgtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG46aG9zdC1jb250ZXh0KC5keC10aGVtZS1nZW5lcmljKSB7XG4gIC5keC10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cblxuICAudXNlci1idXR0b24+LmR4LWJ1dHRvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cbn1cbiIsIiRiYXNlLWJnOiAjZmZmO1xuJGJhc2UtdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiRiYXNlLWJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiRiYXNlLWFjY2VudDogIzAzQTlGNDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent, HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/button */ "./node_modules/devextreme-angular/ui/button.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ "./node_modules/devextreme-angular/ui/toolbar.js");
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-panel/user-panel.component */ "./src/app/shared/components/user-panel/user-panel.component.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.menuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.menuToggleEnabled = false;
        this.userMenuItems = [{
                text: 'Profile',
                icon: 'user'
            }, {
                text: 'Logout',
                icon: 'runner',
                onClick: function () {
                    _this.authService.logOut();
                }
            }];
        this.toggleMenu = function () {
            _this.menuToggle.emit();
        };
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "menuToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "menuToggleEnabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"],
                _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__["UserPanelModule"],
                devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"]
            ],
            declarations: [HeaderComponent],
            exports: [HeaderComponent]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: FooterComponent, FooterModule, HeaderComponent, HeaderModule, LoginFormComponent, LoginFormModule, SideNavigationMenuComponent, SideNavigationMenuModule, UserPanelComponent, UserPanelModule, DashboardWidgetComponent, DashboardWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterModule"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"]; });

/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/shared/components/login-form/login-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormModule"]; });

/* harmony import */ var _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-navigation-menu/side-navigation-menu.component */ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuComponent", function() { return _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideNavigationMenuComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuModule", function() { return _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideNavigationMenuModule"]; });

/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "./src/app/shared/components/user-panel/user-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__["UserPanelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__["UserPanelModule"]; });

/* harmony import */ var _dashboard_widget_dashboard_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-widget/dashboard-widget.component */ "./src/app/shared/components/dashboard-widget/dashboard-widget.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardWidgetComponent", function() { return _dashboard_widget_dashboard_widget_component__WEBPACK_IMPORTED_MODULE_5__["DashboardWidgetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardWidgetModule", function() { return _dashboard_widget_dashboard_widget_component__WEBPACK_IMPORTED_MODULE_5__["DashboardWidgetModule"]; });









/***/ }),

/***/ "./src/app/shared/components/login-form/login-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-validation-group>\n    <div class=\"login-header\">\n        <div class=\"title\">{{appInfo.title}}</div>\n        <div>Sign In to your account</div>\n    </div>\n    <div class=\"dx-field\">\n        <dx-text-box [(value)]=\"login\" placeholder=\"Login\" width=\"100%\">\n            <dx-validator>\n                <dxi-validation-rule type=\"required\" message=\"Login is required\"></dxi-validation-rule>\n            </dx-validator>\n        </dx-text-box>\n    </div>\n    <div class=\"dx-field\">\n        <dx-text-box mode=\"password\" [(value)]=\"password\" placeholder=\"Password\" width=\"100%\">\n            <dx-validator>\n                <dxi-validation-rule type=\"required\" message=\"Password is required\"></dxi-validation-rule>\n            </dx-validator>\n        </dx-text-box>\n    </div>\n    <div class=\"dx-field\">\n        <dx-check-box [value]=\"false\" text=\"Remember me\"></dx-check-box>\n    </div>\n    <div class=\"dx-field\">\n        <dx-button type=\"default\" text=\"Login\" (onClick)=\"onLoginClick($event)\" width=\"100%\"></dx-button>\n    </div>\n    <div class=\"dx-field\">\n        <a routerLink=\"/recovery\">Forgot password ?</a>\n    </div>\n    <div class=\"dx-field\">\n        <dx-button type=\"normal\" text=\"Create an account\" width=\"100%\"></dx-button>\n    </div>\n</dx-validation-group>\n"

/***/ }),

/***/ "./src/app/shared/components/login-form/login-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-header {\n  text-align: center;\n  margin-bottom: 40px; }\n  .login-header .title {\n    color: #03A9F4;\n    font-weight: bold;\n    font-size: 30px;\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZ3VpbGxhdW1lL1NvdXJjZS9wb2MvbmNjMy1kYXNoYm9hcmQtcG9jL2RldmV4dHJlbWVfZ3JpZHN0ZXIvc3JjL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtFQUZyQjtJQUtJLGNDSGlCO0lESWpCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xuXG4ubG9naW4taGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIC50aXRsZSB7XG4gICAgY29sb3I6ICRiYXNlLWFjY2VudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCIkYmFzZS1iZzogI2ZmZjtcbiRiYXNlLXRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4kYmFzZS1ib3JkZXItY29sb3I6ICNlMGUwZTA7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4kYmFzZS1hY2NlbnQ6ICMwM0E5RjQ7XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/login-form/login-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginFormComponent, LoginFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return LoginFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/button */ "./node_modules/devextreme-angular/ui/button.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/check-box */ "./node_modules/devextreme-angular/ui/check-box.js");
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/text-box */ "./node_modules/devextreme-angular/ui/text-box.js");
/* harmony import */ var devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/validation-group */ "./node_modules/devextreme-angular/ui/validation-group.js");
/* harmony import */ var devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/validator */ "./node_modules/devextreme-angular/ui/validator.js");
/* harmony import */ var devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services */ "./src/app/shared/services/index.ts");










var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, appInfo) {
        this.authService = authService;
        this.appInfo = appInfo;
        this.login = '';
        this.password = '';
    }
    LoginFormComponent.prototype.onLoginClick = function (args) {
        if (!args.validationGroup.validate().isValid) {
            return;
        }
        this.authService.logIn(this.login, this.password);
        args.validationGroup.reset();
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/shared/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/shared/components/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services__WEBPACK_IMPORTED_MODULE_9__["AppInfoService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());

var LoginFormModule = /** @class */ (function () {
    function LoginFormModule() {
    }
    LoginFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_4__["DxButtonModule"],
                devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_5__["DxCheckBoxModule"],
                devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_6__["DxTextBoxModule"],
                devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_8__["DxValidatorModule"],
                devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_7__["DxValidationGroupModule"]
            ],
            declarations: [LoginFormComponent],
            exports: [LoginFormComponent]
        })
    ], LoginFormModule);
    return LoginFormModule;
}());



/***/ }),

/***/ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n\n<div class=\"menu-container\">\n    <dx-tree-view\n        expandEvent=\"click\"\n        width=\"100%\"\n        [items]=\"items\"\n        (onInitialized)=\"onMenuInitialized($event)\"\n        (onItemClick)=\"onItemClick($event)\"\n        (onContentReady)=\"updateSelection($event)\"\n        (onSelectionChanged)=\"updateSelection($event)\"\n        [selectByClick]=\"true\"\n        selectionMode=\"single\"\n        keyExpr=\"path\">\n    </dx-tree-view>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  line-height: 1.5; }\n  .content h2 {\n    font-size: 30px;\n    margin-top: 20px;\n    margin-bottom: 20px; }\n  .content-block {\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-top: 20px; }\n  .screen-x-small .content-block {\n    margin-left: 20px;\n    margin-right: 20px; }\n  .responsive-paddings {\n  padding: 20px; }\n  .screen-large .responsive-paddings {\n    padding: 40px; }\n  .dx-card.wide-card {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-right: 0;\n  border-left: 0; }\n  .full-height-scrollable > div > div > .dx-scrollable-content {\n  height: 100%; }\n  .full-height-scrollable > div > div > .dx-scrollable-content > .dx-scrollview-content {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%; }\n  :host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  height: 100%;\n  width: 250px !important; }\n  :host .menu-container {\n    display: flex;\n    flex: 1; }\n  :host .menu-container ::ng-deep .dx-treeview {\n      white-space: nowrap; }\n  :host .menu-container ::ng-deep .dx-treeview .dx-treeview-item {\n        padding-left: 0;\n        padding-right: 0; }\n  :host .menu-container ::ng-deep .dx-treeview .dx-treeview-item .dx-icon {\n          width: 60px !important;\n          margin: 0 !important; }\n  :host .menu-container ::ng-deep .dx-treeview .dx-treeview-node {\n        padding: 0 0 !important; }\n  :host .menu-container ::ng-deep .dx-treeview .dx-treeview-toggle-item-visibility {\n        right: 10px;\n        left: auto; }\n  :host .menu-container ::ng-deep .dx-treeview .dx-rtl .dx-treeview-toggle-item-visibility {\n        left: 10px;\n        right: auto; }\n  :host .menu-container ::ng-deep .dx-treeview .dx-treeview-node[aria-level='1'] {\n        font-weight: bold;\n        border-bottom: 1px solid #515159; }\n  :host .menu-container ::ng-deep .dx-treeview .dx-treeview-node[aria-level='2'] .dx-treeview-item-content {\n        font-weight: normal;\n        padding: 0 60px; }\n  :host .menu-container ::ng-deep .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected:not(.dx-state-focused) > .dx-treeview-item {\n      background: transparent; }\n  :host .menu-container ::ng-deep .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected > .dx-treeview-item * {\n      color: #03A9F4; }\n  :host .menu-container ::ng-deep .dx-treeview .dx-treeview-node-container .dx-treeview-node:not(.dx-state-focused) > .dx-treeview-item.dx-state-hover {\n      background-color: #3f3f4b; }\n  :host .menu-container :host-context(.dx-theme-generic) ::ng-deep.dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected.dx-state-focused > .dx-treeview-item * {\n      color: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9keC1zdHlsZXMuc2NzcyIsIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZS1uYXZpZ2F0aW9uLW1lbnUvc2lkZS1uYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ndWlsbGF1bWUvU291cmNlL3BvYy9uY2MzLWRhc2hib2FyZC1wb2MvZGV2ZXh0cmVtZV9ncmlkc3Rlci9zcmMvdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYWRkaXRpb25hbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7RUFEbEI7SUFJSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtFQUVoQjtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQUl0QjtFQUNFLGFBQWEsRUFBQTtFQUViO0lBQ0UsYUFBYSxFQUFBO0VBSWpCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWMsRUFBQTtFQUdoQjtFQUNFLFlBQVksRUFBQTtFQURkO0lBSUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0IsRUFBQTtFQ3hDcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCLEVBQUE7RUFMekI7SUFRSSxhQUFhO0lBQ2IsT0FBTyxFQUFBO0VBVFg7TUFhTSxtQkFBbUIsRUFBQTtFQWJ6QjtRQWtCUSxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7RUFuQnhCO1VBc0JVLHNCQUF1QztVQUN2QyxvQkFBb0IsRUFBQTtFQXZCOUI7UUE4QlEsdUJBQXVCLEVBQUE7RUE5Qi9CO1FBa0NRLFdBQVc7UUFDWCxVQUFVLEVBQUE7RUFuQ2xCO1FBdUNRLFVBQVU7UUFDVixXQUFXLEVBQUE7RUF4Q25CO1FBK0NVLGlCQUFpQjtRQUNqQixnQ0NqRGlCLEVBQUE7RURDM0I7UUFvRFUsbUJBQW1CO1FBQ25CLGVEVGlCLEVBQUE7RUM1QzNCO01BZ0VZLHVCQUF1QixFQUFBO0VBaEVuQztNQW9FWSxjQ25FUyxFQUFBO0VERHJCO01Bd0VZLHlCQUF5QyxFQUFBO0VBeEVyRDtNQWdGUSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlLW5hdmlnYXRpb24tbWVudS9zaWRlLW5hdmlnYXRpb24tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuXG4uY29udGVudC1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgLnNjcmVlbi14LXNtYWxsICYge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuXG4ucmVzcG9uc2l2ZS1wYWRkaW5ncyB7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgLnNjcmVlbi1sYXJnZSAmIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICB9XG59XG5cbi5keC1jYXJkLndpZGUtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG5cbi5mdWxsLWhlaWdodC1zY3JvbGxhYmxlID4gZGl2ID4gZGl2ID4uZHgtc2Nyb2xsYWJsZS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICYgPiAuZHgtc2Nyb2xsdmlldy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4kc2lkZS1wYW5lbC1taW4td2lkdGg6IDYwcHg7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vZHgtc3R5bGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5hZGRpdGlvbmFsLnNjc3NcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuXG4gIC5tZW51LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuXG4gICAgOjpuZy1kZWVwIC5keC10cmVldmlldyB7XG4gICAgICAvLyAjIyBMb25nIHRleHQgcG9zaXRpb25pbmdcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAvLyAjI1xuXG4gICAgICAvLyAjIyBJY29uIHdpZHRoIGN1c3RvbWl6YXRpb25cbiAgICAgIC5keC10cmVldmlldy1pdGVtIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuXG4gICAgICAgIC5keC1pY29uIHtcbiAgICAgICAgICB3aWR0aDogJHNpZGUtcGFuZWwtbWluLXdpZHRoICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vICMjXG4gICAgICBcbiAgICAgIC8vICMjIEFycm93IGN1c3RvbWl6YXRpb25cbiAgICAgIC5keC10cmVldmlldy1ub2RlIHtcbiAgICAgICAgcGFkZGluZzogMCAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5keC10cmVldmlldy10b2dnbGUtaXRlbS12aXNpYmlsaXR5IHtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5keC1ydGwgLmR4LXRyZWV2aWV3LXRvZ2dsZS1pdGVtLXZpc2liaWxpdHkge1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgIH1cbiAgICAgIC8vICMjXG5cbiAgICAgIC8vICMjIEl0ZW0gbGV2ZWxzIGN1c3RvbWl6YXRpb25cbiAgICAgIC5keC10cmVldmlldy1ub2RlIHtcbiAgICAgICAgJlthcmlhLWxldmVsPScxJ10ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYmFzZS1ib3JkZXItY29sb3I7XG4gICAgICAgIH1cbiAgXG4gICAgICAgICZbYXJpYS1sZXZlbD0nMiddIC5keC10cmVldmlldy1pdGVtLWNvbnRlbnQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgcGFkZGluZzogMCAkc2lkZS1wYW5lbC1taW4td2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vICMjXG4gICAgfVxuXG4gICAgLy8gIyMgU2VsZWN0ZWQgJiBGb2N1Y2VkIGl0ZW1zIGN1c3RvbWl6YXRpb25cbiAgICA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IHtcbiAgICAgIC5keC10cmVldmlldy1ub2RlLWNvbnRhaW5lciB7XG4gICAgICAgIC5keC10cmVldmlldy1ub2RlIHtcbiAgICAgICAgICAmLmR4LXN0YXRlLXNlbGVjdGVkOm5vdCguZHgtc3RhdGUtZm9jdXNlZCk+IC5keC10cmVldmlldy1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZHgtc3RhdGUtc2VsZWN0ZWQgPiAuZHgtdHJlZXZpZXctaXRlbSAqIHtcbiAgICAgICAgICAgIGNvbG9yOiAkYmFzZS1hY2NlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpub3QoLmR4LXN0YXRlLWZvY3VzZWQpPi5keC10cmVldmlldy1pdGVtLmR4LXN0YXRlLWhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJhc2UtYmcsIDQuMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIDpob3N0LWNvbnRleHQoLmR4LXRoZW1lLWdlbmVyaWMpIDo6bmctZGVlcC5keC10cmVldmlldyB7XG4gICAgICAuZHgtdHJlZXZpZXctbm9kZS1jb250YWluZXIgLmR4LXRyZWV2aWV3LW5vZGUuZHgtc3RhdGUtc2VsZWN0ZWQuZHgtc3RhdGUtZm9jdXNlZCA+IC5keC10cmVldmlldy1pdGVtICoge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gIyNcbiAgfVxufVxuIiwiJGJhc2UtYmc6ICMzNjM2NDA7XG4kYmFzZS10ZXh0LWNvbG9yOiAjZmZmO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjNTE1MTU5O1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuJGJhc2UtYWNjZW50OiAjMDNBOUY0O1xuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SideNavigationMenuComponent, SideNavigationMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuComponent", function() { return SideNavigationMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuModule", function() { return SideNavigationMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ "./node_modules/devextreme-angular/ui/tree-view.js");
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/events */ "./node_modules/devextreme/events.js");
/* harmony import */ var devextreme_events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_events__WEBPACK_IMPORTED_MODULE_3__);




var SideNavigationMenuComponent = /** @class */ (function () {
    function SideNavigationMenuComponent(elementRef) {
        this.elementRef = elementRef;
        this.selectedItemChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isCompactMode = false;
    }
    Object.defineProperty(SideNavigationMenuComponent.prototype, "selectedItem", {
        set: function (value) {
            if (this.menu.instance) {
                this.menu.instance.selectItem(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideNavigationMenuComponent.prototype, "compactMode", {
        get: function () {
            return this.isCompactMode;
        },
        set: function (val) {
            this.isCompactMode = val;
            if (val && this.menu.instance) {
                this.menu.instance.collapseAll();
            }
        },
        enumerable: true,
        configurable: true
    });
    SideNavigationMenuComponent.prototype.updateSelection = function (event) {
        var nodeClass = 'dx-treeview-node';
        var selectedClass = 'dx-state-selected';
        var leafNodeClass = 'dx-treeview-node-is-leaf';
        var element = event.element;
        var rootNodes = element.querySelectorAll("." + nodeClass + ":not(." + leafNodeClass + ")");
        Array.from(rootNodes).forEach(function (node) {
            node.classList.remove(selectedClass);
        });
        var selectedNode = element.querySelector("." + nodeClass + "." + selectedClass);
        while (selectedNode && selectedNode.parentElement) {
            if (selectedNode.classList.contains(nodeClass)) {
                selectedNode.classList.add(selectedClass);
            }
            selectedNode = selectedNode.parentElement;
        }
    };
    SideNavigationMenuComponent.prototype.onItemClick = function (event) {
        this.selectedItemChanged.emit(event);
    };
    SideNavigationMenuComponent.prototype.onMenuInitialized = function (event) {
        event.component.option('deferRendering', false);
    };
    SideNavigationMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        devextreme_events__WEBPACK_IMPORTED_MODULE_3__["on"](this.elementRef.nativeElement, 'dxclick', function (e) {
            _this.openMenu.next(e);
        });
    };
    SideNavigationMenuComponent.prototype.ngOnDestroy = function () {
        devextreme_events__WEBPACK_IMPORTED_MODULE_3__["off"](this.elementRef.nativeElement, 'dxclick');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__["DxTreeViewComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__["DxTreeViewComponent"])
    ], SideNavigationMenuComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SideNavigationMenuComponent.prototype, "selectedItemChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SideNavigationMenuComponent.prototype, "openMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SideNavigationMenuComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SideNavigationMenuComponent.prototype, "selectedItem", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SideNavigationMenuComponent.prototype, "compactMode", null);
    SideNavigationMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-navigation-menu',
            template: __webpack_require__(/*! ./side-navigation-menu.component.html */ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-navigation-menu.component.scss */ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SideNavigationMenuComponent);
    return SideNavigationMenuComponent;
}());

var SideNavigationMenuModule = /** @class */ (function () {
    function SideNavigationMenuModule() {
    }
    SideNavigationMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__["DxTreeViewModule"]],
            declarations: [SideNavigationMenuComponent],
            exports: [SideNavigationMenuComponent]
        })
    ], SideNavigationMenuModule);
    return SideNavigationMenuModule;
}());



/***/ }),

/***/ "./src/app/shared/components/user-panel/user-panel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-panel\">\n    <div class=\"user-info\">\n        <div class=\"image-container\">\n            <div class=\"user-image\"></div>\n        </div>\n        <div class=\"user-name\">Sandra Johnson</div>\n    </div>\n    <dx-context-menu\n        *ngIf=\"menuMode === 'context'\"\n        [items]=\"menuItems\"\n        target=\".user-button\"\n        showEvent=\"dxclick\"\n        width=\"170px\"\n        [position]=\"{ my: 'top center', at: 'bottom center' }\"\n        cssClass=\"user-menu\">\n    </dx-context-menu>\n    <dx-list\n        *ngIf=\"menuMode === 'list'\"\n        class=\"dx-toolbar-menu-action\"\n        [items]=\"menuItems\">\n    </dx-list>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/user-panel/user-panel.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-info {\n  display: flex;\n  align-items: center; }\n  :host-context(.dx-toolbar-menu-section) .user-info {\n    padding: 10px 6px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  .user-info .image-container {\n    overflow: hidden;\n    border-radius: 50%;\n    height: 30px;\n    width: 30px;\n    margin: 0 4px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15); }\n  .user-info .image-container .user-image {\n      width: 100%;\n      height: 100%;\n      background: url(\"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png\") no-repeat #fff;\n      background-size: cover; }\n  .user-info .user-name {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.87);\n    margin: 0 9px; }\n  .user-panel ::ng-deep .dx-list-item .dx-icon {\n  vertical-align: middle;\n  color: rgba(0, 0, 0, 0.87);\n  margin-right: 16px; }\n  .user-panel ::ng-deep .dx-rtl .dx-list-item .dx-icon {\n  margin-right: 0;\n  margin-left: 16px; }\n  ::ng-deep .dx-context-menu.user-menu.dx-rtl .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-left: 16px; }\n  ::ng-deep .dx-context-menu.user-menu .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-right: 16px; }\n  ::ng-deep .dx-context-menu.user-menu .dx-menu-item .dx-menu-item-content {\n  padding: 3px 15px 4px; }\n  ::ng-deep .dx-theme-generic .user-menu .dx-menu-item-content .dx-menu-item-text {\n  padding-left: 4px;\n  padding-right: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Tb3VyY2UvcG9jL25jYzMtZGFzaGJvYXJkLXBvYy9kZXZleHRyZW1lX2dyaWRzdGVyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1wYW5lbC91c2VyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZ3VpbGxhdW1lL1NvdXJjZS9wb2MvbmNjMy1kYXNoYm9hcmQtcG9jL2RldmV4dHJlbWVfZ3JpZHN0ZXIvc3JjL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUVuQjtJQUNFLGlCQUFpQjtJQUNqQiwyQ0FBMkMsRUFBQTtFQU4vQztJQVVJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHlDQUFzQyxFQUFBO0VBaEIxQztNQW1CTSxXQUFXO01BQ1gsWUFBWTtNQUNaLGdIQUFnSDtNQUNoSCxzQkFBc0IsRUFBQTtFQXRCNUI7SUEyQkksZUFBZTtJQUNmLDBCQzdCaUM7SUQ4QmpDLGFBQWEsRUFBQTtFQUlqQjtFQUVJLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsa0JBQWtCLEVBQUE7RUFKdEI7RUFPSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7RUFJckI7RUFHTSxpQkFBaUIsRUFBQTtFQUh2QjtFQU9JLGtCQUFrQixFQUFBO0VBUHRCO0VBVU0scUJBQXFCLEVBQUE7RUFJM0I7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2VyLXBhbmVsL3VzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYmFzZS5zY3NzXCI7XG5cbi51c2VyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIDpob3N0LWNvbnRleHQoLmR4LXRvb2xiYXItbWVudS1zZWN0aW9uKSAmIHtcbiAgICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbjogMCA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTUpO1xuXG4gICAgLnVzZXItaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2pzLmRldmV4cHJlc3MuY29tL0RlbW9zL1dpZGdldHNHYWxsZXJ5L0pTRGVtb3MvaW1hZ2VzL2VtcGxveWVlcy8wNi5wbmdcIikgbm8tcmVwZWF0ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcbiAgICBtYXJnaW46IDAgOXB4O1xuICB9XG59XG5cbi51c2VyLXBhbmVsIDo6bmctZGVlcCB7XG4gIC5keC1saXN0LWl0ZW0gLmR4LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG4gIC5keC1ydGwgLmR4LWxpc3QtaXRlbSAuZHgtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAuZHgtY29udGV4dC1tZW51LnVzZXItbWVudSB7XG4gICYuZHgtcnRsIHtcbiAgICAuZHgtc3VibWVudSAuZHgtbWVudS1pdGVtcy1jb250YWluZXIgLmR4LWljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuICB9XG4gIC5keC1zdWJtZW51IC5keC1tZW51LWl0ZW1zLWNvbnRhaW5lciAuZHgtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG4gIC5keC1tZW51LWl0ZW0gLmR4LW1lbnUtaXRlbS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDNweCAxNXB4IDRweDtcbiAgfVxufVxuXG46Om5nLWRlZXAgLmR4LXRoZW1lLWdlbmVyaWMgLnVzZXItbWVudSAuZHgtbWVudS1pdGVtLWNvbnRlbnQgLmR4LW1lbnUtaXRlbS10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbiIsIiRiYXNlLWJnOiAjZmZmO1xuJGJhc2UtdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiRiYXNlLWJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiRiYXNlLWFjY2VudDogIzAzQTlGNDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/user-panel/user-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserPanelComponent, UserPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return UserPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/context-menu */ "./node_modules/devextreme-angular/ui/context-menu.js");
/* harmony import */ var devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/list */ "./node_modules/devextreme-angular/ui/list.js");
/* harmony import */ var devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_4__);





var UserPanelComponent = /** @class */ (function () {
    function UserPanelComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserPanelComponent.prototype, "menuItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserPanelComponent.prototype, "menuMode", void 0);
    UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-panel',
            template: __webpack_require__(/*! ./user-panel.component.html */ "./src/app/shared/components/user-panel/user-panel.component.html"),
            styles: [__webpack_require__(/*! ./user-panel.component.scss */ "./src/app/shared/components/user-panel/user-panel.component.scss")]
        })
    ], UserPanelComponent);
    return UserPanelComponent;
}());

var UserPanelModule = /** @class */ (function () {
    function UserPanelModule() {
    }
    UserPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_4__["DxListModule"],
                devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__["DxContextMenuModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [UserPanelComponent],
            exports: [UserPanelComponent]
        })
    ], UserPanelModule);
    return UserPanelModule;
}());



/***/ }),

/***/ "./src/app/shared/services/app-info.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/app-info.service.ts ***!
  \*****************************************************/
/*! exports provided: AppInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoService", function() { return AppInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppInfoService = /** @class */ (function () {
    function AppInfoService() {
    }
    Object.defineProperty(AppInfoService.prototype, "title", {
        get: function () {
            return 'Dashboard Ncc3';
        },
        enumerable: true,
        configurable: true
    });
    AppInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AppInfoService);
    return AppInfoService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService, AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.loggedIn = true;
    }
    AuthService.prototype.logIn = function (login, passord) {
        this.loggedIn = true;
        this.router.navigate(['/']);
    };
    AuthService.prototype.logOut = function () {
        this.loggedIn = false;
        this.router.navigate(['/login-form']);
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());

var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route) {
        var isLoggedIn = this.authService.isLoggedIn;
        var isLoginForm = route.routeConfig.path === 'login-form';
        if (isLoggedIn && isLoginForm) {
            this.router.navigate(['/']);
            return false;
        }
        if (!isLoggedIn && !isLoginForm) {
            this.router.navigate(['/login-form']);
        }
        return isLoggedIn || isLoginForm;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], AuthService])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: CountryInfo, EnergyDescription, Task, Monitor, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryInfo", function() { return CountryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyDescription", function() { return EnergyDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monitor", function() { return Monitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CountryInfo = /** @class */ (function () {
    function CountryInfo() {
    }
    return CountryInfo;
}());

var EnergyDescription = /** @class */ (function () {
    function EnergyDescription() {
    }
    return EnergyDescription;
}());

var energySources = [
    { value: 'test_agent_1', name: 'Test Agent 1' },
    { value: 'test_agent_2', name: 'Test Agent 2' },
    { value: 'test_agent_3', name: 'Test Agent 3' },
    { value: 'test_agent_4', name: 'Test Agent 4' },
    { value: 'test_agent_5', name: 'Test Agent 5' }
];
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());

var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    return Monitor;
}());

var monitors = [{
        description: 'Service chain provisioned in Lule\u00e5, Sweden lab on ESXi',
        created: 1545144928,
        creator: {
            id: 9,
            email: 'jonas.krogell@netrounds.com'
        },
        shared_from: [],
        id: 16501,
        shared_to: false,
        running: true,
        monitoring_logs: [],
        tags: [],
        sla: ['sla_bad_thumb', 0.0],
        esbar: {
            graph_width: 360,
            value_min: 0.0,
            image_width: 360,
            graph_left: 0,
            known_total: 1200.0,
            image_height: 10,
            es_total: 1200.0,
            graph_top: 0,
            graph_start: 1553852821,
            graph_end: 1553853721,
            value_max: 1.0,
            graph_height: 10,
            image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAQ0lEQVRoge3UMRHAMBDAsKb8QT207N08Jb2TEHjyeoC7zczphK/3dADwP8YBZMYBZMYBZMYBZMYBZMYBZMYBZMYBZBugZgJU71C+yQAAAABJRU5ErkJggg=='
        },
        name: 'Service Chain Hourly Test (VMware ESX)'
    }, {
        description: 'Service chain provisioned in Lule\u00e5, Sweden lab on ESXi',
        created: 1545142870,
        creator: {
            id: 9,
            email: 'jonas.krogell@netrounds.com'
        },
        shared_from: [],
        id: 16495,
        shared_to: false,
        running: true,
        monitoring_logs: [{
                name: 'VNF1+2+3',
                logrecords: [{
                        message: 'sweden-esx-ta-1:eth2 (IPv4) (server) <- sweden-esx-ta-1:eth1 (IPv4) (client): Sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853655,
                        end_time: 1553853715
                    }
                ]
            }, {
                name: 'VNF3 Firewall',
                logrecords: [{
                        message: 'sweden-esx-ta-1:eth2 (IPv4) (server) <- sweden-esx-ta-1:eth3 (IPv4) (client): Sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853659,
                        end_time: 1553853717
                    }
                ]
            }, {
                name: 'VNF2 IPS',
                logrecords: [{
                        message: 'sweden-esx-ta-1:eth3 (IPv4) (server) <- sweden-esx-ta-1:eth4 (IPv4) (client): Sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853630,
                        end_time: 1553853692
                    }
                ]
            }, {
                name: 'VNF1 Router',
                logrecords: [{
                        message: 'sweden-esx-ta-1:eth4 (IPv4) (server) <- sweden-esx-ta-1:eth1 (IPv4) (client): Sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853632,
                        end_time: 1553853695
                    }
                ]
            }, {
                name: 'TWAMP - Local Endpoint',
                logrecords: [{
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852072,
                        end_time: null
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853625,
                        end_time: 1553853626
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853627,
                        end_time: 1553853628
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853642,
                        end_time: 1553853643
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853645,
                        end_time: 1553853646
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853651,
                        end_time: 1553853652
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853653,
                        end_time: 1553853654
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853657,
                        end_time: 1553853658
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853659,
                        end_time: 1553853660
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853661,
                        end_time: 1553853662
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853669,
                        end_time: 1553853670
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853675,
                        end_time: 1553853677
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853675,
                        end_time: 1553853674
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853678,
                        end_time: 1553853679
                    }, {
                        message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853680,
                        end_time: 1553853681
                    }
                ]
            }, {
                name: 'TWAMP - Gateway',
                logrecords: [{
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853624,
                        end_time: 1553853625
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853626,
                        end_time: 1553853627
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853636,
                        end_time: 1553853637
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853640,
                        end_time: 1553853642
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853644,
                        end_time: 1553853645
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853652,
                        end_time: 1553853653
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853655,
                        end_time: 1553853657
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853658,
                        end_time: 1553853659
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853660,
                        end_time: 1553853661
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853666,
                        end_time: 1553853667
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853668,
                        end_time: 1553853669
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853674,
                        end_time: 1553853673
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853674,
                        end_time: 1553853676
                    }, {
                        message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
                        level: 'warning',
                        start_time: 1553853677,
                        end_time: 1553853680
                    }
                ]
            }
        ],
        tags: [],
        sla: ['sla_bad_thumb', 89.44],
        esbar: {
            graph_width: 360,
            value_min: 0.0,
            image_width: 360,
            graph_left: 0,
            known_total: 900.0,
            image_height: 10,
            es_total: 98.0,
            graph_top: 0,
            graph_start: 1553852821,
            graph_end: 1553853721,
            value_max: 1.0,
            graph_height: 10,
            image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAVUlEQVRoge3UsQ3AIAxFQZzFwugwGXTpv5BocldRIFMYvRprNH7grf6d62COD3PHyb5WeH+mO53tCZ8AEA4gJxxATDiAmHAAMeEAYsIBxIQDiAkHENte7ApUK+pGvwAAAABJRU5ErkJggg=='
        },
        name: 'Service Chain Monitor per VNF (VMware ESX)'
    }, {
        description: 'Management over WiFi\nLocation: Lulea HQ',
        created: 1542190250,
        creator: {
            id: 1,
            email: 'admin@netrounds.com'
        },
        shared_from: [],
        id: 6991,
        shared_to: false,
        running: true,
        monitoring_logs: [{
                name: 'Wi-Fi Logger',
                logrecords: [{
                        message: 'BSSID: 7a:8a:20:4a:ca:cc (channel 44)',
                        level: 'info',
                        start_time: 1551868150,
                        end_time: null
                    }
                ]
            }, {
                name: 'AWS 10 pps',
                logrecords: [{
                        message: 'Different NTP servers are configured for the Test Agents',
                        level: 'warning',
                        start_time: 1550830105,
                        end_time: null
                    }
                ]
            }
        ],
        tags: [{
                color: '#e01b3b',
                identifier: 'Vp',
                name: 'vpn',
                id: 2
            }
        ],
        sla: ['sla_bad_thumb', 93.1],
        esbar: {
            graph_width: 360,
            value_min: 0.0,
            image_width: 360,
            graph_left: 0,
            known_total: 880.0,
            image_height: 10,
            es_total: 87.0,
            graph_top: 0,
            graph_start: 1553852821,
            graph_end: 1553853721,
            value_max: 1.0,
            graph_height: 10,
            image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAiklEQVRoge3UQQ6DIBAFUOjFytHxZHbX0BQbfqS791bEjAOO+ms/e/nyrO29PmYFP2racP2c3vkp7f8P6V7pfEa7nuWq/9VeV/V1WI/v684578xztOsMu3q2hZmvzHDXt73SJ/0fR0ef9yylPMJWAIIDyAkOICY4gJjgAGKCA4gJDiAmOICY4ABiL/IdNlR96il7AAAAAElFTkSuQmCC'
        },
        name: 'Office WiFi monitoring'
    }, {
        description: 'Service chain provisioned in AWS us-east-1',
        created: 1541606616,
        creator: {
            id: 9,
            email: 'jonas.krogell@netrounds.com'
        },
        shared_from: [],
        id: 5160,
        shared_to: false,
        running: true,
        monitoring_logs: [{
                name: 'TWAMP - Local Endpoint',
                logrecords: [{
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852895,
                        end_time: 1553852896
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852921,
                        end_time: 1553852922
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852926,
                        end_time: 1553852927
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852930,
                        end_time: 1553852931
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852945,
                        end_time: 1553852946
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852951,
                        end_time: 1553852952
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852957,
                        end_time: 1553852958
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852961,
                        end_time: 1553852964
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852965,
                        end_time: 1553852966
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852967,
                        end_time: 1553852968
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852969,
                        end_time: 1553852970
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852971,
                        end_time: 1553852973
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852974,
                        end_time: 1553852979
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852980,
                        end_time: 1553852983
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852991,
                        end_time: 1553852998
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852991,
                        end_time: 1553852990
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553852999,
                        end_time: 1553853000
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553853021,
                        end_time: 1553853020
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553853021,
                        end_time: 1553853027
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553853030,
                        end_time: 1553853032
                    }, {
                        message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
                        level: 'warning',
                        start_time: 1553853035,
                        end_time: 1553853036
                    }
                ]
            }
        ],
        tags: [{
                color: '#e01b3b',
                identifier: 'Vp',
                name: 'vpn',
                id: 2
            }, {
                color: '#db465f',
                identifier: 'Se',
                name: 'service_chain',
                id: 7
            }
        ],
        sla: ['sla_bad_thumb', 93.3],
        esbar: {
            graph_width: 360,
            value_min: 0.0,
            image_width: 360,
            graph_left: 0,
            known_total: 890.0,
            image_height: 10,
            es_total: 62.0,
            graph_top: 0,
            graph_start: 1553852821,
            graph_end: 1553853721,
            value_max: 1.0,
            graph_height: 10,
            image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAWUlEQVRoge3UMQqAMBBFQdeL6dGTk8VOtPODiOhMtYGFFAmv2mgTP7DUus91YX8c5u6TPO5179VPp/n+C4CvEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHENsALDsLVHe0AuIAAAAASUVORK5CYII='
        },
        name: 'Service Chain Monitor per VNF (AWS)'
    }, {
        description: 'Monitoring between office locations',
        created: 1541091034,
        creator: {
            id: 9,
            email: 'jonas.krogell@netrounds.com'
        },
        shared_from: [],
        id: 4192,
        shared_to: false,
        running: true,
        monitoring_logs: [],
        tags: [{
                color: '#e01b3b',
                identifier: 'Vp',
                name: 'vpn',
                id: 2
            }
        ],
        sla: ['sla_bad_thumb', 99.09],
        esbar: {
            graph_width: 360,
            value_min: 0.0,
            image_width: 360,
            graph_left: 0,
            known_total: 890.0,
            image_height: 10,
            es_total: 15.0,
            graph_top: 0,
            graph_start: 1553852821,
            graph_end: 1553853721,
            value_max: 1.0,
            graph_height: 10,
            image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAaElEQVRoge3UQQqAIAAEwOpj+XR7Wd2ibi4VGsycFERXwZ3rXqdhrHM5x1tDsHT91/s8OffqrQy97jWClrv/5X3KJWe3D7vdZkufEMCfKQ4gpjiAmOIAYooDiCkOIKY4gJjiAGKKA4gd6jMbVJUs9voAAAAASUVORK5CYII='
        },
        name: 'Global L3 VPN'
    }, {
        description: 'Monitoring from all locations to 3 public cloud test agents',
        created: 1542013674,
        creator: {
            id: 9,
            email: 'jonas.krogell@netrounds.com'
        },
        shared_from: [],
        id: 6408,
        shared_to: false,
        running: true,
        monitoring_logs: [{
                name: 'AWS-GCP-Azure Full-Mesh between Clouds',
                logrecords: [{
                        message: 'Different NTP servers are configured for the Test Agents',
                        level: 'warning',
                        start_time: 1549731263,
                        end_time: null
                    }
                ]
            }, {
                name: 'Azure - All sites',
                logrecords: [{
                        message: 'Different NTP servers are configured for the Test Agents',
                        level: 'warning',
                        start_time: 1550471687,
                        end_time: null
                    }
                ]
            }
        ],
        tags: [{
                color: '#874dd1',
                identifier: 'Pu',
                name: 'public_cloud',
                id: 6
            }
        ],
        sla: ['sla_acceptable_thumb', 99.66],
        esbar: {
            graph_width: 360,
            value_min: 0.0,
            image_width: 360,
            graph_left: 0,
            known_total: 890.0,
            image_height: 10,
            es_total: 3.0,
            graph_top: 0,
            graph_start: 1553852821,
            graph_end: 1553853721,
            value_max: 1.0,
            graph_height: 10,
            image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAVUlEQVRoge3UMQ6AIBBFQfFienQ4GXYklL8wQpyplm6X4pXa68ELrnKPuW3+ySvcssIOv9am1/nRFsDGhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxB4ptAxUEo9OyAAAAABJRU5ErkJggg=='
        },
        name: 'Public Cloud AWS-GCP-Azure'
    }, {
        description: 'Service chain provisioned in AWS us-east-1',
        created: 1541613487,
        creator: {
            id: 9,
            email: 'jonas.krogell@netrounds.com'
        },
        shared_from: [],
        id: 5176,
        shared_to: false,
        running: true,
        monitoring_logs: [],
        tags: [{
                color: '#e01b3b',
                identifier: 'Vp',
                name: 'vpn',
                id: 2
            }, {
                color: '#db465f',
                identifier: 'Se',
                name: 'service_chain',
                id: 7
            }
        ],
        sla: ['sla_good_thumb', 100.0],
        esbar: {
            graph_width: 360,
            value_min: 0.0,
            image_width: 360,
            graph_left: 0,
            known_total: 1200.0,
            image_height: 10,
            es_total: 0.0,
            graph_top: 0,
            graph_start: 1553852821,
            graph_end: 1553853721,
            value_max: 1.0,
            graph_height: 10,
            image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAARElEQVRoge3UsREAEBQFQfRf1FcZBYhehJndCi66Xqsa8LJ5O+AwbgcA/zEOIGYcQMw4gJhxADHjAGLGAcSMA4gZBxDbTxEDVLUkceUAAAAASUVORK5CYII='
        },
        name: 'Service Chain Hourly Test (AWS)'
    }, {
        description: 'Monitoring of response times for www.netrounds.com',
        created: 1551350255,
        creator: {
            id: 9,
            email: 'jonas.krogell@netrounds.com'
        },
        shared_from: [],
        id: 42819,
        shared_to: false,
        running: true,
        monitoring_logs: [{
                name: 'HTTP www.netrounds.com',
                logrecords: [{
                        message: 'sweden-lulea-office_wifi:wlan0 (IPv4): Connection timed out after 10006 milliseconds',
                        level: 'warning',
                        start_time: 1553853715,
                        end_time: null
                    }
                ]
            }
        ],
        tags: [],
        sla: ['sla_good_thumb', 100.0],
        esbar: {
            graph_width: 360,
            value_min: 0.0,
            image_width: 360,
            graph_left: 0,
            known_total: 880.0,
            image_height: 10,
            es_total: 0.0,
            graph_top: 0,
            graph_start: 1553852821,
            graph_end: 1553853721,
            value_max: 1.0,
            graph_height: 10,
            image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAARElEQVRoge3UoREAIBADQaD/op7KoAAGEYNgdm1M1PVa1QBO87qMhy+ATwgHEBMOICYcQEw4gJhwADHhAGLCAcSEA4ht9IoDVPOWDGYAAAAASUVORK5CYII='
        },
        name: 'Internet service'
    }];
var tasks = [{
        id: 1,
        Subject: 'Prepare 2013 Financial',
        StartDate: '2013/01/15',
        DueDate: '2013/01/31',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 8
    },
    {
        id: 2, Subject: 'Prepare 3013 Marketing Plan',
        StartDate: '2013/01/01',
        DueDate: '2013/01/31',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 5
    },
    {
        id: 3,
        Subject: 'Update Personnel Files',
        StartDate: '2013/02/03',
        DueDate: '2013/02/28',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 2
    },
    {
        id: 4,
        Subject: 'Review Health Insurance Options Under the Affordable Care Act',
        StartDate: '2013/02/12',
        DueDate: '2013/04/25',
        Status: 'In Progress',
        Priority: 'High',
        Completion: 50,
        monitor_id: 2
    },
    {
        id: 5,
        Subject: 'Choose between PPO and HMO Health Plan',
        StartDate: '2013/02/15',
        DueDate: '2013/04/15',
        Status: 'In Progress', Priority: 'High',
        Completion: 75,
        monitor_id: 1
    },
    {
        id: 6,
        Subject: 'Google AdWords Strategy',
        StartDate: '2013/02/16',
        DueDate: '2013/02/28',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 1
    },
    {
        id: 7,
        Subject: 'New Brochures',
        StartDate: '2013/02/17',
        DueDate: '2013/02/24',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 1
    },
    {
        id: 11,
        Subject: 'Rollout of New Website and Marketing Brochures',
        StartDate: '2013/02/20',
        DueDate: '2013/02/28',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 5
    },
    {
        id: 12,
        Subject: 'Update Sales Strategy Documents',
        StartDate: '2013/02/20',
        DueDate: '2013/02/22',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 9
    },
    {
        id: 15,
        Subject: 'Review 2012 Sales Report and Approve 2013 Plans',
        StartDate: '2013/02/23',
        DueDate: '2013/02/28',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 5
    },
    {
        id: 16,
        Subject: 'Deliver R&D Plans for 2013',
        StartDate: '2013/03/01',
        DueDate: '2013/03/10',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 3
    },
    {
        id: 20,
        Subject: 'Approve Hiring of John Jeffers',
        StartDate: '2013/03/02',
        DueDate: '2013/03/12',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 4
    },
    {
        id: 20,
        Subject: 'Approve Hiring of John Jeffers',
        StartDate: '2013/03/02',
        DueDate: '2013/03/12',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 6
    },
    {
        id: 21,
        Subject: 'Non-Compete Agreements',
        StartDate: '2013/03/12',
        DueDate: '2013/03/14',
        Status: 'Completed',
        Priority: 'Low',
        Completion: 100,
        monitor_id: 2
    },
    {
        id: 22,
        Subject: 'Update NDA Agreement',
        StartDate: '2013/03/14',
        DueDate: '2013/03/16',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 1
    },
    {
        id: 23,
        Subject: 'Update Employee Files with New NDA',
        StartDate: '2013/03/16',
        DueDate: '2013/03/26',
        Status: 'Need Assistance',
        Priority: 'Normal',
        Completion: 90,
        monitor_id: 4
    },
    {
        id: 24,
        Subject: 'Update Employee Files with New NDA',
        StartDate: '2013/03/16',
        DueDate: '2013/03/26',
        Status: 'Need Assistance',
        Priority: 'Normal',
        Completion: 90,
        monitor_id: 6
    },
    {
        id: 25,
        Subject: 'Sign Updated NDA',
        StartDate: '2013/03/20',
        DueDate: '2013/03/25',
        Status: 'Completed',
        Priority: 'Urgent',
        Completion: 100,
        monitor_id: 7
    },
    {
        id: 26,
        Subject: 'Sign Updated NDA',
        StartDate: '2013/03/20',
        DueDate: '2013/03/25',
        Status: 'Completed',
        Priority: 'Urgent',
        Completion: 100,
        monitor_id: 8
    },
    {
        id: 27,
        Subject: 'Sign Updated NDA',
        StartDate: '2013/03/20',
        DueDate: '2013/03/25',
        Status: 'Need Assistance',
        Priority: 'Urgent',
        Completion: 25,
        monitor_id: 9
    },
    {
        id: 35,
        Subject: 'Update Revenue Projections',
        StartDate: '2013/03/24',
        DueDate: '2013/04/07',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 8
    },
    {
        id: 36,
        Subject: 'Review Revenue Projections',
        StartDate: '2013/03/25',
        DueDate: '2013/04/06',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 9
    },
    {
        id: 40,
        Subject: 'Provide New Health Insurance Docs',
        StartDate: '2013/03/28',
        DueDate: '2013/04/07',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 4
    },
    {
        id: 41,
        Subject: 'Provide New Health Insurance Docs',
        StartDate: '2013/03/28',
        DueDate: '2013/04/07',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 6
    },
    {
        id: 50,
        Subject: 'Give Final Approval for Refunds',
        StartDate: '2013/05/05',
        DueDate: '2013/05/15',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 2
    },
    {
        id: 52,
        Subject: 'Review Product Recall Report by Engineering Team',
        StartDate: '2013/05/17',
        DueDate: '2013/05/20',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 1
    },
    {
        id: 55,
        Subject: 'Review Overtime Report',
        StartDate: '2013/06/10',
        DueDate: '2013/06/14',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 7
    },
    {
        id: 60,
        Subject: 'Refund Request Template',
        StartDate: '2013/06/17',
        DueDate: '2014/04/01',
        Status: 'Deferred',
        Priority: 'Normal',
        Completion: 0,
        monitor_id: 9
    },
    {
        id: 71,
        Subject: 'Upgrade Server Hardware',
        StartDate: '2013/07/22',
        DueDate: '2013/07/31',
        Status: 'Completed',
        Priority: 'Urgent',
        Completion: 100,
        monitor_id: 7
    },
    {
        id: 72,
        Subject: 'Upgrade Personal Computers',
        StartDate: '2013/07/24',
        DueDate: '2014/04/30',
        Status: 'In Progress',
        Priority: 'Normal',
        Completion: 85,
        monitor_id: 7
    },
    {
        id: 74,
        Subject: 'Decide on Mobile Devices to Use in the Field',
        StartDate: '2013/07/30',
        DueDate: '2013/08/02',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 3
    },
    {
        id: 78,
        Subject: 'Try New Touch-Enabled WinForms Apps',
        StartDate: '2013/08/11',
        DueDate: '2013/08/15',
        Status: 'Completed',
        Priority: 'Normal',
        Completion: 100,
        monitor_id: 3
    },
    {
        id: 81,
        Subject: 'Review Site Up-Time Report',
        StartDate: '2013/08/24',
        DueDate: '2013/08/30',
        Status: 'Completed',
        Priority: 'Urgent',
        Completion: 100,
        monitor_id: 5
    },
    {
        id: 99,
        Subject: 'Submit D&B Number to ISP for Credit Approval',
        StartDate: '2013/11/04',
        DueDate: '2013/11/07',
        Status: 'Completed',
        Priority: 'High',
        Completion: 100,
        monitor_id: 8
    },
    {
        id: 117,
        Subject: 'Approval on Converting to New HDMI Specification',
        StartDate: '2014/01/11',
        DueDate: '2014/01/31',
        Status: 'Deferred',
        Priority: 'Normal',
        Completion: 75,
        monitor_id: 3
    },
    {
        id: 138,
        Subject: 'Review HR Budget Company Wide',
        StartDate: '2014/03/20',
        DueDate: '2014/03/25',
        Status: 'In Progress',
        Priority: 'Normal',
        Completion: 40,
        monitor_id: 6
    },
    {
        id: 145,
        Subject: 'Final Budget Review',
        StartDate: '2014/03/26',
        DueDate: '2014/03/27',
        Status: 'In Progress',
        Priority: 'High',
        Completion: 25,
        monitor_id: 6
    }];
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.getEnergySources = function () {
        return energySources;
    };
    Service.prototype.getCountriesInfo = function () {
        var data = [];
        // const now = Date.now();
        for (var index = 0; index < 1000; index++) {
            data.push({
                timestamp: index,
                test_agent_1: Math.floor(Math.random() * 10) + 100,
                test_agent_2: Math.floor(Math.random() * 10) + 70,
                test_agent_3: Math.floor(Math.random() * 10) + 50,
                test_agent_4: Math.floor(Math.random() * 10) + 20,
                test_agent_5: Math.floor(Math.random() * 10) + 10
            });
        }
        return data;
    };
    Service.prototype.getEmployees = function () {
        return monitors;
    };
    Service.prototype.getTasks = function () {
        return tasks;
    };
    Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: AppInfoService, AuthService, AuthGuardService, CountryInfo, EnergyDescription, Task, Monitor, Service, ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-info.service */ "./src/app/shared/services/app-info.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppInfoService", function() { return _app_info_service__WEBPACK_IMPORTED_MODULE_0__["AppInfoService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]; });

/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/services/data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountryInfo", function() { return _data_service__WEBPACK_IMPORTED_MODULE_2__["CountryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnergyDescription", function() { return _data_service__WEBPACK_IMPORTED_MODULE_2__["EnergyDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _data_service__WEBPACK_IMPORTED_MODULE_2__["Task"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Monitor", function() { return _data_service__WEBPACK_IMPORTED_MODULE_2__["Monitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _data_service__WEBPACK_IMPORTED_MODULE_2__["Service"]; });

/* harmony import */ var _screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen.service */ "./src/app/shared/services/screen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return _screen_service__WEBPACK_IMPORTED_MODULE_3__["ScreenService"]; });







/***/ }),

/***/ "./src/app/shared/services/screen.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/screen.service.ts ***!
  \***************************************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ScreenService = /** @class */ (function () {
    function ScreenService(breakpointObserver) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large])
            .subscribe(function () { return _this.changed.next(); });
    }
    ScreenService.prototype.isLargeScreen = function () {
        var isLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large);
        var isXLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge);
        return isLarge || isXLarge;
    };
    Object.defineProperty(ScreenService.prototype, "sizes", {
        get: function () {
            return {
                'screen-x-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall),
                'screen-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small),
                'screen-medium': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium),
                'screen-large': this.isLargeScreen(),
            };
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScreenService.prototype, "changed", void 0);
    ScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], ScreenService);
    return ScreenService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
})
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/guillaume/Source/poc/ncc3-dashboard-poc/devextreme_gridster/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map