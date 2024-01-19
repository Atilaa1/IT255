import { TestBed } from '@angular/core/testing';

import { FlajService } from './flaj.service';

describe('FlajService', () => {
  let service: FlajService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlajService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
