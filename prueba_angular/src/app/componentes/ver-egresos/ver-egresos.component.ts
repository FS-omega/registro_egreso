import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VerEgresoService } from 'app/servicios/ver-egresos/ver-egresos.service';

@Component({
  selector: 'app-ver-egresos',
  templateUrl: './ver-egresos.component.html',
  styleUrls: ['./ver-egresos.component.css']
})
export class VerEgresosComponent {
  registros: any[] = [];
  mostrarTabla: boolean = false;

  constructor(
    private VerEgresoService: VerEgresoService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  obteneregreso() {
    this.VerEgresoService.obtener_egresos().subscribe(
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
          this.mostrarTabla = true; // Mostrar la tabla después de obtener los datos
        } else {
          console.error('El servicio no devolvió un arreglo:', data.egresos);
        }
      },
      (error) => {
        console.error('Error al recibir los datos', error);
      }
    );
  }
}
