import { TestBed } from '@angular/core/testing';

import { VerEgresosService } from './ver-egresos.service';

describe('VerEgresosService', () => {
  let service: VerEgresosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerEgresosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
