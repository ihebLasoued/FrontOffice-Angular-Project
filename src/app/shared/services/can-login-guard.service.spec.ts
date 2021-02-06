import { TestBed } from '@angular/core/testing';

import { CanLoginGuardService } from './can-login-guard.service';

describe('CanLoginGuardService', () => {
  let service: CanLoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanLoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
