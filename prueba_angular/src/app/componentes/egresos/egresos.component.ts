import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EgresosService } from 'src/app/servicios/egresos/egresos.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})

export class EgresosComponent implements OnInit {
  registros: any[]=[]// Ajusta el tipo según lo que esperes recibir

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