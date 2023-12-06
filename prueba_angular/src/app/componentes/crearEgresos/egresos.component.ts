import { Component, OnInit } from '@angular/core';
import { EgresosService } from '../../servicios/crearEgresos/egresos.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent  {
 
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

 

  crearEgreso() {
    if (this.egreso_Formulario.valid) {
      const formData = this.egreso_Formulario.value;
      
      this.egresosService.crear_egreso(formData).subscribe(
        (response) => {
          console.log('Egreso creado con éxito:', response);
         
        },
        (error: HttpErrorResponse) => {
          console.error('Error al crear el egreso:', error);

          if (error.status === 500) {
            console.error('Error interno del servidor. Por favor, contacta al soporte.');
          } else {
            console.error('Error desconocido. Consulta los detalles del error:', error);
          }
        }
      );
    } else {
      console.log("El formulario no es válido.");
    }
  }
}
