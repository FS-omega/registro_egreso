import { TestBed } from '@angular/core/testing';

import { VerUsuariosService } from './ver-usuarios.service';

describe('VerUsuariosService', () => {
  let service: VerUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
