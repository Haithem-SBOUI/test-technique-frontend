import { TestBed } from '@angular/core/testing';

import { DnmaService } from './dnma.service';

describe('DnmaService', () => {
  let service: DnmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DnmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
