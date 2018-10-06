"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_service_1 = require("../../services/customer.service");
var customer_1 = require("../../interfaces/customer");
var email_1 = require("../../interfaces/email");
var address_1 = require("../../interfaces/address");
var phone_1 = require("../../interfaces/phone");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var modal_component_1 = require("../modal/modal.component");
var material_1 = require("@angular/material");
var history_component_1 = require("../history/history.component");
var _ = require("underscore");
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
        this.customer = new customer_1.Customer();
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
        this.customer.addresses.push(new address_1.Address());
    };
    CustomerComponent.prototype.addPhone = function () {
        this.customer.phones.push(new phone_1.Phone());
    };
    CustomerComponent.prototype.addEmail = function () {
        this.customer.emails.push(new email_1.Email());
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
        var dialogRef = this.dialog.open(modal_component_1.ModalComponent, {
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
            this.customer.changes = _.reject(this.customer.changes, function (item) {
                return item.isAdminChange == true;
            });
        var dialogRef = this.dialog.open(history_component_1.HistoryComponent, {
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
        core_1.Component({
            selector: 'customer',
            templateUrl: './customer.component.html',
            styleUrls: ['./customer.component.css']
        }),
        __metadata("design:paramtypes", [customer_service_1.CustomerService, router_1.Router, router_1.ActivatedRoute, user_service_1.UserService, typeof (_a = typeof material_1.MatDialog !== "undefined" && material_1.MatDialog) === "function" && _a || Object])
    ], CustomerComponent);
    return CustomerComponent;
    var _a;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map