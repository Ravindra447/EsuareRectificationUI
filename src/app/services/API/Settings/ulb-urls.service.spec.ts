import { TestBed } from '@angular/core/testing';

import { UlbUrlsService } from './ulb-urls.service';

describe('UlbUrlsService', () => {
  let service: UlbUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UlbUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
