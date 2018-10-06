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

module.exports = "\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_admin_customer_admin_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-customer/admin-customer.component */ "./src/app/components/admin-customer/admin-customer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/admin-auth.service */ "./src/app/services/admin-auth.service.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/components/history/history.component.ts");
/* harmony import */ var _components_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/statistic/statistic.component */ "./src/app/components/statistic/statistic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_admin_customer_admin_customer_component__WEBPACK_IMPORTED_MODULE_8__["AdminCustomerComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_15__["HistoryComponent"],
                _components_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_16__["StatisticComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                    { path: 'customers/edit/:id', component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"] },
                    { path: 'customers/new', component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"] },
                    { path: 'admin/customers', component: _components_admin_customer_admin_customer_component__WEBPACK_IMPORTED_MODULE_8__["AdminCustomerComponent"], canActivate: [_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_11__["AdminAuthService"]] }
                ], {
                    useHash: true
                })
            ],
            entryComponents: [
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_15__["HistoryComponent"],
                _components_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_16__["StatisticComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-customer/admin-customer.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/admin-customer/admin-customer.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin-customer/admin-customer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-customer/admin-customer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-outline-info mb-3\" (click)=\"viewStatistics()\">View Statistics</button>\r\n<h4 class=\"mb-3\">Customers</h4>\r\n<input type=\"text\" placeholder=\"search...\" (keyup)=\"filter(i)\" class=\"form-control mb-3\" #i/>\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 w-100\">\r\n\r\n    <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef> Email </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"profile\">\r\n        <th mat-header-cell *matHeaderCellDef> Profile </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n            <ng-container *ngIf=\"element.customerId; else noProfile\">\r\n                <a routerLink=\"/customers/edit/{{element.customerId}}\">Edit</a>\r\n            </ng-container>\r\n            <ng-template #noProfile>\r\n                No profile | <a routerLink=\"/customers/new\" [queryParams]=\"{ userId: element.userId }\">create</a>\r\n            </ng-template>\r\n        </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/admin-customer/admin-customer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin-customer/admin-customer.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCustomerComponent", function() { return AdminCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../statistic/statistic.component */ "./src/app/components/statistic/statistic.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminCustomerComponent = /** @class */ (function () {
    function AdminCustomerComponent(userService, customerService, dialog) {
        this.userService = userService;
        this.customerService = customerService;
        this.dialog = dialog;
        this.displayedColumns = ['email', 'profile'];
    }
    AdminCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersSub = this.userService.getUsersInRole('Customer').subscribe(function (users) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](users);
        });
        this.statisticSub = this.customerService.getStatistics().subscribe(function (response) { return _this.statistics = response; });
    };
    AdminCustomerComponent.prototype.filter = function (input) {
        if (this.dataSource)
            this.dataSource.filter = input.value.trim().toLowerCase();
    };
    AdminCustomerComponent.prototype.viewStatistics = function () {
        var dialogRef = this.dialog.open(_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_4__["StatisticComponent"], {
            width: '400px',
            data: this.statistics
        });
    };
    AdminCustomerComponent.prototype.ngOnDestroy = function () {
        if (this.usersSub)
            this.usersSub.unsubscribe();
        if (this.statisticSub)
            this.statisticSub.unsubscribe();
    };
    AdminCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-customer',
            template: __webpack_require__(/*! ./admin-customer.component.html */ "./src/app/components/admin-customer/admin-customer.component.html"),
            styles: [__webpack_require__(/*! ./admin-customer.component.css */ "./src/app/components/admin-customer/admin-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], AdminCustomerComponent);
    return AdminCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customer/customer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/customer/customer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #info>\r\n    <div class=\"container\">\r\n        <form (ngSubmit)=\"submit()\" #form=\"ngForm\">\r\n            <button class=\"btn btn-outline-info mb-3\" type=\"button\" *ngIf=\"customer.id\" (click)=\"viewHistory()\">View History</button>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 mb-4\">\r\n                    <h5 class=\"mb-3\">Customer Info</h5>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"customer.name\" required #name=\"ngModel\" />\r\n                        <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\r\n                            <div *ngIf=\"name.errors.required\">Name is required.</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Surname\" name=\"surname\" [(ngModel)]=\"customer.surname\" required #surname=\"ngModel\" />\r\n                        <div class=\"alert alert-danger\" *ngIf=\"surname.touched && surname.invalid\">\r\n                            <div *ngIf=\"surname.errors.required\">Surname is required.</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"middlename\" placeholder=\"Middlename (optional)\" [(ngModel)]=\"customer.middleName\" />\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"notes\" placeholder=\"Notes (optional)\" [(ngModel)]=\"customer.notes\" />\r\n                    </div>\r\n\r\n                </div><!--/.col-6-->\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 mb-4\">\r\n                    <h5 class=\"mb-3\">Email</h5>\r\n\r\n                    <ng-container *ngFor=\"let email of customer.emails; index as i\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" name=\"type{{i}}\" placeholder=\"Type\" [(ngModel)]=\"email.type\" class=\"form-control\" required #type=\"ngModel\" />\r\n                                <div class=\"input-group-append\" *ngIf=\"i > 0\">\r\n                                    <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"deleteEmail(email)\">delete</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"alert alert-danger\" *ngIf=\"type.touched && type.invalid\">\r\n                                <div *ngIf=\"type.errors.required\">Type is required.</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"email\" name=\"email{{i}}\" placeholder=\"Email\" [(ngModel)]=\"email.value\" class=\"form-control\" required email #em=\"ngModel\" />\r\n                            <div class=\"alert alert-danger\" *ngIf=\"em.touched && em.invalid\">\r\n                                <div *ngIf=\"em.errors.required\">Email is required.</div>\r\n                                <div *ngIf=\"em.errors.email\">Invalid email.</div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n\r\n                    <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"addEmail()\">Add Email</button>\r\n\r\n                </div><!--/.col-6-->\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 mb-4\">\r\n\r\n                    <h5 class=\"mb-3\">Address</h5>\r\n\r\n                    <ng-container *ngFor=\"let address of customer.addresses; index as i\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Type\" name=\"type_addr{{i}}\" [(ngModel)]=\"address.type\" required #type=\"ngModel\" />\r\n                                <div class=\"input-group-append\" *ngIf=\"i > 0\">\r\n                                    <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"deleteAddress(address)\">delete</button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"type.touched && type.invalid\">\r\n                                <div *ngIf=\"type.errors.required\">Type is required.</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"City\" name=\"city{{i}}\" [(ngModel)]=\"address.city\" required #city=\"ngModel\" />\r\n                            <div class=\"alert alert-danger\" *ngIf=\"city.touched && city.invalid\">\r\n                                <div *ngIf=\"city.errors.required\">City is required.</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Postal code\" name=\"postalCode{{i}}\" [(ngModel)]=\"address.postalCode\" required #postalCode=\"ngModel\" />\r\n                            <div class=\"alert alert-danger\" *ngIf=\"postalCode.touched && postalCode.invalid\">\r\n                                <div *ngIf=\"postalCode.errors.required\">Postal code is required.</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Street line 1\" name=\"street1_{{i}}\" [(ngModel)]=\"address.street.street1\" required #street=\"ngModel\" />\r\n                            <div class=\"alert alert-danger\" *ngIf=\"street.touched && street.invalid\">\r\n                                <div *ngIf=\"street.errors.required\">Street is required.</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"street2_{{i}}\" [(ngModel)]=\"address.street.street2\" placeholder=\"Street line 2 (optional)\" />\r\n                        </div>\r\n                    </ng-container>\r\n\r\n                    <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"addAddress()\">Add Address</button>\r\n\r\n                </div><!--/.col-6-->\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 mb-4\">\r\n\r\n                    <h5 class=\"mb-3\">Phone</h5>\r\n\r\n                    <ng-container *ngFor=\"let phone of customer.phones; index as i\">\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Type\" name=\"type_phone{{i}}\" [(ngModel)]=\"phone.type\" required #type=\"ngModel\" />\r\n                                <div class=\"input-group-append\" *ngIf=\"i > 0\">\r\n                                    <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"deletePhone(phone)\">delete</button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"type.touched && type.invalid\">\r\n                                <div *ngIf=\"type.errors.required\">Type is required.</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"tel\" class=\"form-control\" placeholder=\"Phone\" name=\"value{{i}}\" [(ngModel)]=\"phone.value\" required #value=\"ngModel\" />\r\n                            <div class=\"alert alert-danger\" *ngIf=\"value.touched && value.invalid\">\r\n                                <div *ngIf=\"value.errors.required\">Phone is required.</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-container>\r\n\r\n                    <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"addPhone()\">Add Phone</button>\r\n\r\n                </div><!--/.col-6-->\r\n\r\n            </div><!--/.row-->\r\n            <button class=\"btn btn-outline-primary mr-2\" type=\"submit\" [disabled]=\"form.invalid\">Save</button>\r\n            <button class=\"btn btn-outline-danger\" type=\"button\" *ngIf=\"customer.id && isAdmin\" (click)=\"deleteProfile()\">Delete</button>\r\n        </form>\r\n    </div>\r\n</ng-template>\r\n\r\n<div class=\"d-flex align-content-center justify-content-center\" *ngIf=\"inProgress; else info\">\r\n    <p>Loading...</p>\r\n</div>"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _interfaces_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/customer */ "./src/app/interfaces/customer.ts");
/* harmony import */ var _interfaces_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/email */ "./src/app/interfaces/email.ts");
/* harmony import */ var _interfaces_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/address */ "./src/app/interfaces/address.ts");
/* harmony import */ var _interfaces_phone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interfaces/phone */ "./src/app/interfaces/phone.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../history/history.component */ "./src/app/components/history/history.component.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(service, router, route, userService, dialog) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.dialog = dialog;
        this.inProgress = true;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customer = new _interfaces_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.userId = localStorage.getItem('userId');
        this.id = this.route.snapshot.paramMap.get('id');
        this.adminSub = this.userService.isInRole(this.userId, 'Admin').subscribe(function (response) { return _this.isAdmin = response; });
        if (this.id)
            this.customerSub = this.service.getCustomer(this.id).subscribe(function (customer) {
                _this.inProgress = true;
                _this.customer = customer;
                _this.customer.userId = _this.customer.issuerId = _this.userId;
                _this.inProgress = false;
            });
        else {
            this.inProgress = false;
            var queryId = this.route.snapshot.queryParamMap.get('userId');
            this.addAddress();
            this.addEmail();
            this.addPhone();
            this.customer.userId = queryId ? queryId : this.userId;
            this.customer.issuerId = this.userId;
        }
    };
    CustomerComponent.prototype.submit = function () {
        var _this = this;
        this.editCustomerSub = this.id
            ? this.service.updateCustomer(this.id, this.customer).subscribe(function (response) {
                if (response)
                    _this.isAdmin ? _this.router.navigate(['/admin/customers']) : _this.router.navigate(['/']);
            })
            : this.service.createCustomer(this.customer).subscribe(function (response) {
                if (response)
                    _this.isAdmin ? _this.router.navigate(['/admin/customers']) : _this.router.navigate(['/']);
            });
    };
    CustomerComponent.prototype.addAddress = function () {
        this.customer.addresses.push(new _interfaces_address__WEBPACK_IMPORTED_MODULE_4__["Address"]());
    };
    CustomerComponent.prototype.addPhone = function () {
        this.customer.phones.push(new _interfaces_phone__WEBPACK_IMPORTED_MODULE_5__["Phone"]());
    };
    CustomerComponent.prototype.addEmail = function () {
        this.customer.emails.push(new _interfaces_email__WEBPACK_IMPORTED_MODULE_3__["Email"]());
    };
    CustomerComponent.prototype.deleteEmail = function (email) {
        var index = this.customer.emails.indexOf(email);
        if (index > -1)
            this.customer.emails.splice(index, 1);
    };
    CustomerComponent.prototype.deleteAddress = function (address) {
        var index = this.customer.addresses.indexOf(address);
        if (index > -1)
            this.customer.addresses.splice(index, 1);
    };
    CustomerComponent.prototype.deletePhone = function (phone) {
        var index = this.customer.phones.indexOf(phone);
        if (index > -1)
            this.customer.phones.splice(index, 1);
    };
    CustomerComponent.prototype.deleteProfile = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], {
            width: '400px',
            data: { title: 'Delete profile', content: 'Are you sure you want to delete this profile?' }
        });
        this.dialogSub = dialogRef.afterClosed().subscribe(function (result) {
            if (result)
                _this.service.deleteCustomer(_this.customer.id).subscribe(function (response) {
                    if (response)
                        _this.router.navigate(['/admin/customers']);
                });
        });
    };
    CustomerComponent.prototype.viewHistory = function () {
        if (!this.isAdmin)
            this.customer.changes = underscore__WEBPACK_IMPORTED_MODULE_11__["reject"](this.customer.changes, function (item) {
                return item.isAdminChange == true;
            });
        var dialogRef = this.dialog.open(_history_history_component__WEBPACK_IMPORTED_MODULE_10__["HistoryComponent"], {
            width: '600px',
            data: this.customer.changes
        });
    };
    CustomerComponent.prototype.ngOnDestroy = function () {
        if (this.customerSub)
            this.customerSub.unsubscribe();
        if (this.editCustomerSub)
            this.editCustomerSub.unsubscribe();
        if (this.dialogSub)
            this.dialogSub.unsubscribe();
        if (this.adminSub)
            this.adminSub.unsubscribe();
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/history/history.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/history/history.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/history/history.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/history/history.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>History</h2>\r\n<mat-dialog-content *ngIf=\"changes\">\r\n    <p *ngFor=\"let change of changes\">\r\n        {{change.dateChanged | date:'medium'}}: {{change.userName}}\r\n        <span class=\"badge badge-info\" *ngIf=\"change.isAdminChange\">admin</span>\r\n    </p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <button mat-button class=\"no-outline\" mat-dialog-close>Close</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/history/history.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/history/history.component.ts ***!
  \*********************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(changes) {
        this.changes = changes;
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/components/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/components/history/history.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Array])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!inProgress\">\r\n    <ng-template #noProfile>\r\n        <p>You haven't created profile yet.</p>\r\n        <a class=\"btn btn-outline-primary\" routerLink=\"/customers/new\">Create</a>\r\n    </ng-template>\r\n\r\n    <div class=\"container\" *ngIf=\"user && user.customerId; else noProfile\">\r\n        <ng-container *ngIf=\"customer$ | async as customer\">\r\n            <h3 class=\"mb-3\">Info</h3>\r\n            <a class=\"btn btn-outline-primary mb-3\" routerLink=\"/customers/edit/{{user.customerId}}\">Edit</a>\r\n            <p>Name: {{customer.name}}</p>\r\n            <p>Surname: {{customer.surname}}</p>\r\n            <p>MiddleName: {{customer.middleName ? customer.middleName : 'not specified'}}</p>\r\n            <hr />\r\n\r\n            <h4>Email</h4>\r\n            <ng-container *ngFor=\"let email of customer.emails\">\r\n                <p>Type: {{email.type}}</p>\r\n                <p>Value: {{email.value}}</p>\r\n                <hr />\r\n            </ng-container>\r\n\r\n            <h4>Phone</h4>\r\n            <ng-container *ngFor=\"let phone of customer.phones\">\r\n                <p>Type: {{phone.type}}</p>\r\n                <p>Value: {{phone.value}}</p>\r\n                <hr />\r\n            </ng-container>\r\n\r\n            <h4>Address</h4>\r\n            <ng-container *ngFor=\"let address of customer.addresses\">\r\n                <p>Type: {{address.type}}</p>\r\n                <p>City: {{address.city}}</p>\r\n                <p>Street: {{address.street.street1}}</p>\r\n                <p *ngIf=\"address.street.street2\">Street line 2: {{address.street.street2}}</p>\r\n                <p>Postal code: {{address.postalCode}}</p>\r\n                <hr />\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"customer.notes\">\r\n                <h4>Notes</h4>\r\n                <p>{{customer.notes}}</p>\r\n            </ng-container>\r\n        </ng-container>\r\n    </div>\r\n</ng-container>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(customerService, userService) {
        this.customerService = customerService;
        this.userService = userService;
        this.inProgress = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = localStorage.getItem('userId');
        if (id) {
            this.userSub = this.userService.getUser(id).subscribe(function (user) {
                _this.inProgress = true;
                _this.user = user;
                if (user.customerId)
                    _this.customer$ = _this.customerService.getCustomer(user.customerId);
                _this.inProgress = false;
            });
        }
        else
            this.inProgress = false;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.userSub)
            this.userSub.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/modal/modal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\r\n<mat-dialog-content>{{data.content}}</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <button mat-button class=\"no-outline\" [mat-dialog-close]=\"false\">No</button>\r\n    <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\r\n    <button mat-button class=\"no-outline\" [mat-dialog-close]=\"true\">Yes</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(data) {
        this.data = data;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/statistic/statistic.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/statistic/statistic.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/statistic/statistic.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/statistic/statistic.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Statistics</h2>\r\n<mat-dialog-content *ngIf=\"statistics\">\r\n    <p>Total profiles: {{statistics.totalProfiles}}</p>\r\n    <p>Admin profiles: {{statistics.adminProfiles}}</p>\r\n    <p>Customer profiles: {{statistics.customerProfiles}}</p>\r\n    <p>Profiles added: {{statistics.profilesAdded}}</p>\r\n    <p>Profiles deleted: {{statistics.profilesDeleted}}</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <button mat-button class=\"no-outline\" mat-dialog-close>Close</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/statistic/statistic.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/statistic/statistic.component.ts ***!
  \*************************************************************/
/*! exports provided: StatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticComponent", function() { return StatisticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var StatisticComponent = /** @class */ (function () {
    function StatisticComponent(statistics) {
        this.statistics = statistics;
    }
    StatisticComponent.prototype.ngOnInit = function () {
    };
    StatisticComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistic',
            template: __webpack_require__(/*! ./statistic.component.html */ "./src/app/components/statistic/statistic.component.html"),
            styles: [__webpack_require__(/*! ./statistic.component.css */ "./src/app/components/statistic/statistic.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], StatisticComponent);
    return StatisticComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/address.ts":
/*!***************************************!*\
  !*** ./src/app/interfaces/address.ts ***!
  \***************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address() {
        this.id = '';
        this.type = '';
        this.postalCode = '';
        this.city = '';
        this.street = {
            id: '',
            street1: '',
            street2: ''
        };
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/interfaces/customer.ts":
/*!****************************************!*\
  !*** ./src/app/interfaces/customer.ts ***!
  \****************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(init) {
        this.emails = [];
        this.phones = [];
        this.addresses = [];
        this.changes = [];
        Object.assign(this, init);
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/interfaces/email.ts":
/*!*************************************!*\
  !*** ./src/app/interfaces/email.ts ***!
  \*************************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email() {
        this.id = '';
        this.type = '';
        this.value = '';
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/interfaces/phone.ts":
/*!*************************************!*\
  !*** ./src/app/interfaces/phone.ts ***!
  \*************************************/
/*! exports provided: Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
var Phone = /** @class */ (function () {
    function Phone() {
        this.id = '';
        this.type = '';
        this.value = '';
    }
    return Phone;
}());



/***/ }),

/***/ "./src/app/services/admin-auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/admin-auth.service.ts ***!
  \************************************************/
/*! exports provided: AdminAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthService", function() { return AdminAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAuthService = /** @class */ (function () {
    function AdminAuthService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AdminAuthService.prototype.canActivate = function () {
        var userId = localStorage.getItem('userId');
        if (userId)
            return this.userService.isInRole(userId, 'Admin');
        this.router.navigate(['/']);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
    };
    AdminAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminAuthService);
    return AdminAuthService;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.url = 'http://localhost:52073/api/customers';
    }
    //HttpGet api/customers
    CustomerService.prototype.getCustomers = function () {
        return this.http.get("" + this.url);
    };
    //HttpGet api/customers/{id}
    CustomerService.prototype.getCustomer = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    //HttpPost api/customers
    CustomerService.prototype.createCustomer = function (customer) {
        return this.http.post("" + this.url, customer);
    };
    //HttpPut api/customers/{id}
    CustomerService.prototype.updateCustomer = function (id, customer) {
        return this.http.put(this.url + "/" + id, customer);
    };
    //HttpDelete api/customers/{id}
    CustomerService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    //HttpGet api/customers/statistics
    CustomerService.prototype.getStatistics = function () {
        return this.http.get(this.url + "/statistics");
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'http://localhost:52073/api/users';
    }
    //HttpGet api/users/{id}
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    //HttpGet api/users/byRole/{roleName}
    UserService.prototype.getUsersInRole = function (roleName) {
        return this.http.get(this.url + "/byRole/" + roleName);
    };
    //HttpGet api/users/isInRole/{userId}/{roleName}
    UserService.prototype.isInRole = function (userId, roleName) {
        return this.http.get(this.url + "/isInRole/" + userId + "/" + roleName);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! D:\Raimbeck\adspro_test\adspro_test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map