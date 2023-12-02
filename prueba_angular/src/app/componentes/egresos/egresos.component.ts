import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EgresosService } from 'src/app/servicios/egresos/egresos.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})

export class EgresosComponent{
  
  constructor(
    private egreso: EgresosComponent,
            fb: FormBuilder
  ){}
  //obteneregreso(){
    //this.
  //}


}