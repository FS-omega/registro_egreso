import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VerEgresoService {

  url_backend = environment.url_backend + '/egreso';

  constructor(private http: HttpClient) { }

  crear_egreso(datos: any) {
    return this.http.post(`${this.url_backend}/crear-egreso`, datos);
  }

  obtener_egresos() {
    return this.http.get(`${this.url_backend}/obtener-egresos`);
  }
  obtenerEgresosPorUsuario(idUsuario: string) {
    const url = `${this.url_backend}/obtener-egresos-usuario/${idUsuario}`;
    return this.http.get(url);
  }
}
