"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var admin_auth_service_1 = require("./admin-auth.service");
describe('AdminAuthService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [admin_auth_service_1.AdminAuthService]
        });
    });
    it('should be created', testing_1.inject([admin_auth_service_1.AdminAuthService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin-auth.service.spec.js.map