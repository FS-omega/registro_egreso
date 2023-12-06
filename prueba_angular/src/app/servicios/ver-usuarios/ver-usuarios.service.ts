import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VerUsuariosService {
  url_backend = environment.url_backend + '/usuario';

  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    return this.http.get(`${this.url_backend}/obtener-usuarios`);
  }
}
