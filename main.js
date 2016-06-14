"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var _1 = require('./app/');
require("angular2-materialize");
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.HSStatsAppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map