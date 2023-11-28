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
  obtener_egresos (){
    return this.http.get(`${this.url_backend+"/obtener-egresos"}`)
  }
}