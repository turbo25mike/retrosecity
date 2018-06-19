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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-menu></nav-menu>\n<div class='container-fluid'>\n  <router-outlet></router-outlet>\n</div>\n<footer-menu></footer-menu>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var ng2_page_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-page-scroll */ "./node_modules/ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes_home_home_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/home/home.route */ "./src/app/routes/home/home.route.ts");
/* harmony import */ var _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navmenu/navmenu.component */ "./src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navfooter_navfooter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navfooter/navfooter.component */ "./src/app/components/navfooter/navfooter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Routes

//Components



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                //components
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterMenuComponent"],
                _components_navfooter_navfooter_component__WEBPACK_IMPORTED_MODULE_10__["NavFooterComponent"],
                _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"],
                //routes
                _routes_home_home_route__WEBPACK_IMPORTED_MODULE_7__["HomeRoute"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
                ng2_page_scroll__WEBPACK_IMPORTED_MODULE_0__["Ng2PageScrollModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _routes_home_home_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/home/home.route */ "./src/app/routes/home/home.route.ts");

var ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _routes_home_home_route__WEBPACK_IMPORTED_MODULE_0__["HomeRoute"] },
    { path: '**', redirectTo: 'home' }
];


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    margin-top:10px;\r\n}\r\n\r\n.footer_sub_nav {\r\n    float: right;\r\n}\r\n\r\n.footer_sub_nav ul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.footer_sub_nav ul li {\r\n    float: left;\r\n    padding-bottom: 6px;\r\n}\r\n\r\n.footer_sub_nav ul li+li {\r\n    margin-left: 10px;\r\n}\r\n\r\n.footer_sub_nav ul li a {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n    color: #637986;\r\n}\r\n\r\n.bottom_footer {\r\n    clear: both;\r\n    padding: 30px 0 50px 0;\r\n    border-top: 1px solid #E0E4E7;\r\n}\r\n\r\n.footer-copyright p {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n    color: #637986;\r\n    margin-bottom: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"footer-nav\">\r\n      <nav class=\"footer_sub_nav\">\r\n        <ul class=\"menu\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"/collections\" pageScroll>Collections</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"/commissions\" pageScroll>Commissions</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"/about\" pageScroll>About</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n    <div class=\"bottom_footer\">\r\n      <div class=\"footer-copyright\">\r\n        <p class=\"copyright\">\r\n          Copyright © 2018 Retrocity. All rights reserved. </p>\r\n      </div>\r\n      <div class=\"social_nav\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"https://www.amazon.com/retrosecity/\" class=\"fa fa-amazon\"></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.facebook.com/Retrosecity-214742929137931\" class=\"fa fa-facebook\">Facebook</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.youtube.com/channel/UCbIIa_OPa5ygx-IgqcZC6aA\" class=\"fa fa-youtube\">YouTube</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterMenuComponent", function() { return FooterMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterMenuComponent = /** @class */ (function () {
    function FooterMenuComponent() {
    }
    FooterMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer-menu',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        })
    ], FooterMenuComponent);
    return FooterMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/navfooter/navfooter.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/navfooter/navfooter.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    padding: 50px 0 0 0;\r\n}\r\n\r\n.footer .row {\r\n    margin-bottom: 100px;\r\n}\r\n\r\n.footer_links {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.footer_links li {\r\n    display: block!important;    \r\n    margin-bottom: 10px;\r\n}\r\n\r\n.footer_links li a {\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    color: #637986;\r\n}"

/***/ }),

/***/ "./src/app/components/navfooter/navfooter.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/navfooter/navfooter.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-4 text-center\">\r\n      <h6>Company</h6>\r\n      <ul class=\"footer_links\">\r\n        <li>\r\n          <a href=\"/what\">What we do</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/customers\">Customers</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/government\">For Government</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/itpro\">For IT Pros</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"partner\">Partners</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"program\">Become a Partner</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/company\">About Us</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/management\">Management</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/news-and-press\">Press &amp; News</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/careers\">Careers</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-4 text-center\">\r\n      <h6>Product Details</h6>\r\n      <ul class=\"footer_links\">\r\n        <li>\r\n          <a href=\"/product\">Product</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/pricing\">Pricing</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/enterprise\">Enterprise Edition</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/store\" target=\"_blank\">Store</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-4 text-center\">\r\n      <h6>Documentation</h6>\r\n      <ul class=\"footer_links\">\r\n        <li>\r\n          <a href=\"/documentation\" target=\"_blank\">Documentation</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/blog\" target=\"_blank\">Blog</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/feed\" target=\"_blank\">RSS Feed</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/training\" target=\"_blank\">Training</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/kbase\" target=\"_blank\">Knowledge Base</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/resources\">Resources</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"/community\">Community</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/navfooter/navfooter.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/navfooter/navfooter.component.ts ***!
  \*************************************************************/
/*! exports provided: NavFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavFooterComponent", function() { return NavFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavFooterComponent = /** @class */ (function () {
    function NavFooterComponent() {
    }
    NavFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-footer',
            template: __webpack_require__(/*! ./navfooter.component.html */ "./src/app/components/navfooter/navfooter.component.html"),
            styles: [__webpack_require__(/*! ./navfooter.component.css */ "./src/app/components/navfooter/navfooter.component.css")]
        })
    ], NavFooterComponent);
    return NavFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg bg-light\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleCollapse()\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" href=\"#\">Retrosecity</a>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngClass]=\"{'d-inline': !isCollapsed}\">\r\n    <ul class=\"navbar-nav mr-auto\" [ngClass]=\"{'animated slideInDown': !isCollapsed}\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"/collections\" pageScroll>Collections</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"/commissions\" pageScroll>Commissions</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"/about\" pageScroll>About</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"w-100 order-3\">\r\n      <div class=\"social_nav social_nav-white navbar-nav ml-auto\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"https://www.amazon.com/retrosecity/\" class=\"fa fa-amazon\"></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.facebook.com/Retrosecity-214742929137931\" class=\"fa fa-facebook\">Facebook</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.youtube.com/channel/UCbIIa_OPa5ygx-IgqcZC6aA\" class=\"fa fa-youtube\">YouTube</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isCollapsed = true;
    }
    NavMenuComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-menu',
            template: __webpack_require__(/*! ./navmenu.component.html */ "./src/app/components/navmenu/navmenu.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/routes/home/home.route.css":
/*!********************************************!*\
  !*** ./src/app/routes/home/home.route.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg_grad1{\r\n    color: #fff;\r\n    background-image: radial-gradient(circle at 47% 9%, #3e825f, #1a4172);\r\n}\r\n\r\n.bg_grad2{\r\n    color:#445D6E;\r\n    background-image: radial-gradient(circle, #1280e1 0%, #002069 100%);\r\n}\r\n\r\n.bg_grad3{\r\n    color:#fff;\r\n    background-image: radial-gradient(circle at 47% 9%, #414141, #000000);\r\n}\r\n\r\n.bg-phone{\r\n    color:#fff;\r\n    background-image: url('phone_bg.jpg');\r\n    background-position: 50% center;\r\n    background-size: cover;\r\n}\r\n\r\n.bg-portland{\r\n    color: #fff;\r\n    background: url('http://res.cloudinary.com/doboseecr/image/upload/v1529017664/portland_grjmel.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.banner{\r\n    padding-top:150px;\r\n    padding-bottom:100px;\r\n}\r\n\r\n.background-gray-30{\r\n    background:rgba(0,0,0,0.3);\r\n}\r\n\r\n.sub-banner{\r\n    margin-left: -15px;\r\n    margin-right:-15px;\r\n    padding-top:50px;\r\n    padding-bottom:50px;\r\n}\r\n\r\n.design{\r\n    margin-left:-15px;\r\n    margin-right:-15px;\r\n    position: relative;\r\n}\r\n\r\n.design .gallery{\r\n    \r\n}\r\n\r\n.design .header{\r\n    position: absolute;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    left: 20px;\r\n    z-index: 9000;\r\n    background: black;\r\n    color:white;\r\n    width: 80px;\r\n    font-size: 4em;\r\n    text-align: center;\r\n    font-family: 'Permanent Marker', cursive;\r\n}\r\n\r\n.pad-bottom-50{\r\n    padding-bottom:50px;\r\n}\r\n\r\n.pad-left-10{\r\n    padding-left: 10px;\r\n}\r\n\r\n.transform-bg{\r\n    background-image: url('secure_bg_image.png');\r\n    background-position: 50% center;\r\n    background-size: cover;\r\n}"

/***/ }),

/***/ "./src/app/routes/home/home.route.html":
/*!*********************************************!*\
  !*** ./src/app/routes/home/home.route.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row banner\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-4 animated fadeInLeft\">\r\n                <h1>Love</h1>\r\n                <p>Our Collections consists of quick-ship pieces offered in a wide variety of color and finish options, while\r\n                    each Commission is made to order based on your project's specific needs from locally-sourced solid woods.</p>\r\n                <p>Everything is handmade in the USA from solid, honest materials and built to last a lifetime.</p>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-7\">\r\n                <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col\" *ngFor=\"let product of productGallery\">\r\n        <div class=\"card\">\r\n            <div class=\"card-img-top\">\r\n                <ngx-gallery [options]=\"productGalleryOptions\" [images]=\"product.images\"></ngx-gallery>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{product.title}}</h5>\r\n                <p class=\"card-text\">{{product.description}}</p>\r\n                <a href=\"mailto://\" class=\"btn btn-primary\">More Info</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"flox-row bg-phone sub-banner animated fadeInUp\">\r\n    <div class=\"container background-gray-30\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\" style=\"padding:30px;\">\r\n                <h1>Made in Oregon</h1>\r\n                <p class=\"text-justify\">\r\n                        Our commissioned pieces are one of a Kind. Each and every piece is made just for you.\r\n                        Completely Custom. Every dimension is made to fit your space.\r\n                        Finished Just Right. A wide variety of materials and finishes available.\r\n                        Sure to be a conversation piece.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/home/home.route.ts":
/*!*******************************************!*\
  !*** ./src/app/routes/home/home.route.ts ***!
  \*******************************************/
/*! exports provided: HomeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoute", function() { return HomeRoute; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeRoute = /** @class */ (function () {
    function HomeRoute() {
        this.galleryOptions = [
            {
                thumbnailsSwipe: true,
                previewSwipe: true,
                imageSwipe: true,
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                thumbnailsRemainingCount: true,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '400px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [];
        this.productGalleryOptions = [
            {
                previewSwipe: true,
                imageSwipe: true,
                width: '100%',
                height: '200px',
                thumbnails: false,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryAnimation"].Fade,
                imageAutoPlayInterval: 5000,
                imageAutoPlay: true,
                imageArrows: false
            }
        ];
        this.cloudinaryRoot = "http://res.cloudinary.com/doboseecr/image/upload/v1505323891/";
        this.logoGallery = [
            'design_zyq6u1',
            'Capture_o7oxuo',
            'Intel_o7g6at',
            'nato_gkwvfs',
            'ext_mhoc4e',
            'marjoni_logo_bkvlln'
        ];
        this.productGallery = [
            {
                title: 'Le Chaise',
                description: '',
                images: [
                    this.generateNgxGalleryOptions('belgium_htmnse'),
                    this.generateNgxGalleryOptions('0_wwgpjm'),
                    this.generateNgxGalleryOptions('ext_3_gjaund')
                ]
            },
            {
                title: 'Le Table',
                description: '',
                images: [
                    this.generateNgxGalleryOptions('ext_5_r322sj'),
                    this.generateNgxGalleryOptions('ext_2_q2aoar'),
                    this.generateNgxGalleryOptions('remember_g35rcw')
                ]
            },
            {
                title: 'Le Shirt',
                description: '',
                images: [
                    this.generateNgxGalleryOptions('pamphlet_e1fqfp'),
                    this.generateNgxGalleryOptions('moon_jszsdb'),
                    this.generateNgxGalleryOptions('reedsx_k1htf5')
                ]
            },
            {
                title: 'Le Jeans',
                description: '',
                images: [
                    this.generateNgxGalleryOptions('wi2_ij5gev'),
                    this.generateNgxGalleryOptions('NWbeauty3_ggfmkc'),
                    this.generateNgxGalleryOptions('man_nbmfuq'),
                    this.generateNgxGalleryOptions('cmack2_nikrbj')
                ]
            },
        ];
    }
    HomeRoute.prototype.ngOnInit = function () {
        var _this = this;
        this.logoGallery.forEach(function (x) {
            _this.galleryImages.push({
                small: _this.cloudinaryRoot + x + '.jpg',
                medium: _this.cloudinaryRoot + x + '.jpg',
                big: _this.cloudinaryRoot + x + '.jpg'
            });
        });
    };
    HomeRoute.prototype.generateNgxGalleryOptions = function (x) {
        return {
            small: this.cloudinaryRoot + x + '.jpg',
            medium: this.cloudinaryRoot + x + '.jpg',
            big: this.cloudinaryRoot + x + '.jpg'
        };
    };
    HomeRoute = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-route',
            template: __webpack_require__(/*! ./home.route.html */ "./src/app/routes/home/home.route.html"),
            styles: [__webpack_require__(/*! ./home.route.css */ "./src/app/routes/home/home.route.css")]
        })
    ], HomeRoute);
    return HomeRoute;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\temp\sand\retrosecity\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map