import { TestBed } from '@angular/core/testing';

import { CantactService } from './cantact.service';

describe('CantactService', () => {
  let service: CantactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
