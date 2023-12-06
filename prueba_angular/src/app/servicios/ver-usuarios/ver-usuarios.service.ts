// ver-usuario.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerUsuarioService {
  private datosUsuario = new BehaviorSubject<any>(null);
  datosUsuario$ = this.datosUsuario.asObservable();

  enviarDatosUsuario(datos: any) {
    this.datosUsuario.next(datos);
  }
}
