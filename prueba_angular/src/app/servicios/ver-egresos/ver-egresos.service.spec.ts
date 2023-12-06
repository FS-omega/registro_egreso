import { TestBed } from '@angular/core/testing';
import { VerEgresoService } from './ver-egresos.service';


describe('VerEgresosService', () => {
  let service: VerEgresoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerEgresoService);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
