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
var table_1 = require("@angular/material/table");
var user_service_1 = require("../../services/user.service");
var customer_service_1 = require("../../services/customer.service");
var statistic_component_1 = require("../statistic/statistic.component");
var material_1 = require("@angular/material");
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
            _this.dataSource = new table_1.MatTableDataSource(users);
        });
        this.statisticSub = this.customerService.getStatistics().subscribe(function (response) { return _this.statistics = response; });
    };
    AdminCustomerComponent.prototype.filter = function (input) {
        if (this.dataSource)
            this.dataSource.filter = input.value.trim().toLowerCase();
    };
    AdminCustomerComponent.prototype.viewStatistics = function () {
        var dialogRef = this.dialog.open(statistic_component_1.StatisticComponent, {
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
        core_1.Component({
            selector: 'app-admin-customer',
            templateUrl: './admin-customer.component.html',
            styleUrls: ['./admin-customer.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, customer_service_1.CustomerService, typeof (_a = typeof material_1.MatDialog !== "undefined" && material_1.MatDialog) === "function" && _a || Object])
    ], AdminCustomerComponent);
    return AdminCustomerComponent;
    var _a;
}());
exports.AdminCustomerComponent = AdminCustomerComponent;
//# sourceMappingURL=admin-customer.component.js.map