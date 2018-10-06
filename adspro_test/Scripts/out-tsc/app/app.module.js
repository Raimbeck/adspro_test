"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var customer_component_1 = require("./components/customer/customer.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var admin_customer_component_1 = require("./components/admin-customer/admin-customer.component");
var animations_1 = require("@angular/platform-browser/animations");
var table_1 = require("@angular/material/table");
var admin_auth_service_1 = require("./services/admin-auth.service");
var modal_component_1 = require("./components/modal/modal.component");
var dialog_1 = require("@angular/material/dialog");
var button_1 = require("@angular/material/button");
var history_component_1 = require("./components/history/history.component");
var statistic_component_1 = require("./components/statistic/statistic.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                customer_component_1.CustomerComponent,
                home_component_1.HomeComponent,
                admin_customer_component_1.AdminCustomerComponent,
                modal_component_1.ModalComponent,
                history_component_1.HistoryComponent,
                statistic_component_1.StatisticComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                dialog_1.MatDialogModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                table_1.MatTableModule,
                button_1.MatButtonModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent },
                    { path: 'customers/edit/:id', component: customer_component_1.CustomerComponent },
                    { path: 'customers/new', component: customer_component_1.CustomerComponent },
                    { path: 'admin/customers', component: admin_customer_component_1.AdminCustomerComponent, canActivate: [admin_auth_service_1.AdminAuthService] }
                ], {
                    useHash: true
                })
            ],
            entryComponents: [
                modal_component_1.ModalComponent,
                history_component_1.HistoryComponent,
                statistic_component_1.StatisticComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map