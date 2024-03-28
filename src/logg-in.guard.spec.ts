import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loggInGuard } from './logg-in.guard';

describe('loggInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loggInGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
