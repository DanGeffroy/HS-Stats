"use strict";
var testing_1 = require('@angular/core/testing');
var hs_stats_component_1 = require('../app/hs-stats.component');
testing_1.beforeEachProviders(function () { return [hs_stats_component_1.HSStatsAppComponent]; });
testing_1.describe('App: HSStats', function () {
    testing_1.it('should create the app', testing_1.inject([hs_stats_component_1.HSStatsAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'hs-stats works!\'', testing_1.inject([hs_stats_component_1.HSStatsAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('hs-stats works!');
    }));
});
//# sourceMappingURL=hs-stats.component.spec.js.map