import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CardsService } from './cards.service';

describe('Cards Service', () => {
  beforeEachProviders(() => [CardsService]);

  it('should ...',
      inject([CardsService], (service: CardsService) => {
    expect(service).toBeTruthy();
  }));
});
