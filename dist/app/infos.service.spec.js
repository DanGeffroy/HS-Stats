"use strict";
var testing_1 = require('@angular/core/testing');
var infos_service_1 = require('./infos.service');
testing_1.describe('Infos Service', function () {
    testing_1.beforeEachProviders(function () { return [infos_service_1.InfosService]; });
    testing_1.it('should ...', testing_1.inject([infos_service_1.InfosService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=infos.service.spec.js.map