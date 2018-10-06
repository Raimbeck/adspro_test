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
var http_1 = require("@angular/common/http");
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
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map