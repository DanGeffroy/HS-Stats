"use strict";
var testing_1 = require('@angular/core/testing');
var cards_service_1 = require('./cards.service');
testing_1.describe('Cards Service', function () {
    testing_1.beforeEachProviders(function () { return [cards_service_1.CardsService]; });
    testing_1.it('should ...', testing_1.inject([cards_service_1.CardsService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=cards.service.spec.js.map