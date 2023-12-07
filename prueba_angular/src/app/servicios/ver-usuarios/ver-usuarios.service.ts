import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerUsuariosService {
  url_backend = environment.url_backend + '/usuario';

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url_backend}/obtener-usuarios`);
  }
}
