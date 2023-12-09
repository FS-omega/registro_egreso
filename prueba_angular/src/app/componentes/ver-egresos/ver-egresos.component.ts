import { Component } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { VerEgresoService } from 'app/servicios/ver-egresos/ver-egresos.service';

@Component({
  selector: 'app-ver-egresos',
  templateUrl: './ver-egresos.component.html',
  styleUrls: ['./ver-egresos.component.css']
})
export class VerEgresosComponent {
  registros: any[] = [];
  mostrarTabla: boolean = false;
  formularioBusqueda: FormGroup;

  constructor(
    private verEgresoService: VerEgresoService,
    private fb: FormBuilder
  ) {
    this.formularioBusqueda = this.fb.group({
      idUsuario: ['', Validators.required],
    });
  }

  ngOnInit() {}

  obtenerEgreso() {
    this.verEgresoService.obtener_egresos().subscribe(
      (data: any) => {
        console.log('Respuesta del servicio:', data);
        if (Array.isArray(data.egresos)) {
          this.registros = data.egresos.map((item: any) => {
            return {
              _id: item._id,
              descripcion: item.descripcion,
              id_usuario: item.id_usuario,
              precio: item.precio,
            };
          });
          this.mostrarTabla = true; 
        } else {
          console.error('El servicio no devolvió un arreglo:', data.egresos);
        }
      },
      (error) => {
        console.error('Error al recibir los datos', error);
      }
    );
  }

  buscarEgresosPorUsuario() {
    const idUsuarioControl = this.formularioBusqueda.get('idUsuario');
  
    if (idUsuarioControl) {
      const idUsuario = idUsuarioControl.value;
  
      this.verEgresoService.obtenerEgresosPorUsuario(idUsuario).subscribe(
        (data: any) => {
          console.log('Respuesta del servicio:', data);
          if (Array.isArray(data.egresos)) {
            this.registros = data.egresos;
            this.mostrarTabla = true; 
          } else {
            console.error('El servicio no devolvió un arreglo:', data.egresos);
          }
        },
        (error) => {
          console.error('Error al recibir los datos', error);
        }
      );
    } else {
      console.error('El control de idUsuario es nulo.');
    }
  }}
