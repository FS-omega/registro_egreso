import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {
  url_backend = environment.url_backend+'/egresos'
  constructor(
    private http:HttpClient
  ){}
  crear_egreso(datos:any){
    return this.http.post(`${this.url_backend+'crear-egreso'}`,datos)
  }
  obtener_egresos (){
    return this.http.get(`${this.url_backend+"/obtener-egresos"}`)
  }

}