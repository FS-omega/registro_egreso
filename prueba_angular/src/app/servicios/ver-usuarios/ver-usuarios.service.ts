import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerUsuariosService {
  private usuarios: any[] = [];
  private url_backend = environment.url_backend + '/usuario';

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url_backend}/obtener-usuarios`).pipe(
      tap((data:  any[]) => {
        this.usuarios = data;
      })
    );
  }

}
