import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { InfosService } from './infos.service';

describe('Infos Service', () => {
  beforeEachProviders(() => [InfosService]);

  it('should ...',
      inject([InfosService], (service: InfosService) => {
    expect(service).toBeTruthy();
  }));
});
