import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HSStatsAppComponent } from '../app/hs-stats.component';

beforeEachProviders(() => [HSStatsAppComponent]);

describe('App: HSStats', () => {
  it('should create the app',
      inject([HSStatsAppComponent], (app: HSStatsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hs-stats works!\'',
      inject([HSStatsAppComponent], (app: HSStatsAppComponent) => {
    expect(app.title).toEqual('hs-stats works!');
  }));
});
