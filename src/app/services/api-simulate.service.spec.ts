import { TestBed } from '@angular/core/testing';

import { ApiSimulateService } from '../api-simulate.service';

describe('ApiSimulateService', () => {
  let service: ApiSimulateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSimulateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
