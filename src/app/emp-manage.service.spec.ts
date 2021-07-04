import { TestBed } from '@angular/core/testing';

import { EmpManageService } from './emp-manage.service';

describe('EmpManageService', () => {
  let service: EmpManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
