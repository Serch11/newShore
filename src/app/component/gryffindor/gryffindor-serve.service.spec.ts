import { TestBed } from '@angular/core/testing';

import { GryffindorServeService } from './gryffindor-serve.service';

describe('GryffindorServeService', () => {
  let service: GryffindorServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GryffindorServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
