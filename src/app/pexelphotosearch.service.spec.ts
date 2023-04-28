import { TestBed } from '@angular/core/testing';

import { PexelphotosearchService } from './pexelphotosearch.service';

describe('PexelphotosearchService', () => {
  let service: PexelphotosearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexelphotosearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
