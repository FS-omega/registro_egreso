import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EgresosService } from '../../servicios/crearEgresos/egresos.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})

export class EgresosComponent implements OnInit {
  registros: any[]=[]//aca colocas los parametros que queras mostrar o la wa que quieras validar wazaaaaa

  constructor(
    private egresosService: EgresosService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.obteneregreso();
  }

  obteneregreso() {
    this.egresosService.obtener_egresos().subscribe()
}  }