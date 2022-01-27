import { TestBed } from '@angular/core/testing';

import { WowapisService } from './wowapis.service';

describe('WowapisService', () => {
  let service: WowapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WowapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
