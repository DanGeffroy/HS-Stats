import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { HSStatsAppComponent, environment } from './app/';
import "angular2-materialize";

if (environment.production) {
  enableProdMode();
}

bootstrap(HSStatsAppComponent, [ HTTP_PROVIDERS ]);
