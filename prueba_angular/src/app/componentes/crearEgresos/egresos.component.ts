import { Component, OnInit } from '@angular/core';
import { EgresosService } from '../../servicios/crearEgresos/egresos.service';
import { FormBuilder,Validators ,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
 
  egreso_Formulario: FormGroup;
  constructor(
    private egresosService: EgresosService,
    private fb: FormBuilder
  ) {
    this.egreso_Formulario = this.fb.group({
      descripcion: ['', Validators.required],
      precio: [null, Validators.required],
      id_usuario: ['', Validators.required],
    });
  }

  ngOnInit() {
  
    this.crearEgreso();
  }

  crearEgreso() {
    if (this.egreso_Formulario.valid) {
      const formData = this.egreso_Formulario.value;
      
       this.egresosService.crear_egreso(formData).subscribe();
    } 
  }
  }



