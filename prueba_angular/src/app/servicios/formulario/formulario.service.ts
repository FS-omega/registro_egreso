import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

//se corrige la direccion de enviroments
import { environment } from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  url_backend = environment.url_backend+'/usuario';
  constructor(
    private http:HttpClient
  ) { }

  crear_usuario(datos:any){
    return this.http.post(`${this.url_backend+'/crear-usuario' }`,datos)
  }
  obtener_usuario(){
    return this.http.get(`${this.url_backend+'/obtener-usuarios' }`)

  }
}
