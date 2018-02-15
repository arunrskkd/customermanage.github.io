webpackJsonp(["customersalary.module"],{

/***/ "../../../../../src/app/customersalary/customersalary-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersalaryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customersalary_customersalary_component__ = __webpack_require__("../../../../../src/app/customersalary/customersalary/customersalary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'viewsalary', component: __WEBPACK_IMPORTED_MODULE_2__customersalary_customersalary_component__["a" /* CustomersalaryComponent */] },
];
var CustomersalaryRoutingModule = /** @class */ (function () {
    function CustomersalaryRoutingModule() {
    }
    CustomersalaryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CustomersalaryRoutingModule);
    return CustomersalaryRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/customersalary/customersalary.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersalaryModule", function() { return CustomersalaryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customersalary_routing_module__ = __webpack_require__("../../../../../src/app/customersalary/customersalary-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customersalary_customersalary_component__ = __webpack_require__("../../../../../src/app/customersalary/customersalary/customersalary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CustomersalaryModule = /** @class */ (function () {
    function CustomersalaryModule() {
    }
    CustomersalaryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__customersalary_routing_module__["a" /* CustomersalaryRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__customersalary_customersalary_component__["a" /* CustomersalaryComponent */]]
        })
    ], CustomersalaryModule);
    return CustomersalaryModule;
}());



/***/ }),

/***/ "../../../../../src/app/customersalary/customersalary/customersalary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customersalary/customersalary/customersalary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n\n <h3>User deleted</h3> \n  <a routerLink=\"/customerdetail/customerview\">Go back</a>\n\n</div> "

/***/ }),

/***/ "../../../../../src/app/customersalary/customersalary/customersalary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersalaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomersalaryComponent = /** @class */ (function () {
    function CustomersalaryComponent() {
    }
    CustomersalaryComponent.prototype.ngOnInit = function () {
    };
    CustomersalaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customersalary',
            template: __webpack_require__("../../../../../src/app/customersalary/customersalary/customersalary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customersalary/customersalary/customersalary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomersalaryComponent);
    return CustomersalaryComponent;
}());



/***/ })

});
//# sourceMappingURL=customersalary.module.chunk.js.map