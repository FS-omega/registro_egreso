import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VerEgresoService } from 'app/servicios/ver-egresos/ver-egresos.service';

@Component({
  selector: 'app-ver-egresos',
  templateUrl: './ver-egresos.component.html',
  styleUrls: ['./ver-egresos.component.css']
})
export class VerEgresosComponent {
  registros: any[] = [];
  filtroUsuario: string = ''; // Declaración de la variable filtroUsuario
  formularioBusqueda: FormGroup;

  constructor(
    private VerEgresoService: VerEgresoService,
    private fb: FormBuilder
  ) {
    this.formularioBusqueda = this.fb.group({
      idUsuario: ['']
    });
  }
  ngOnInit(): void {

this.obtenerEgreso
    
    // Lógica de inicialización, puedes llamar a métodos o realizar acciones aquí
  }
  obtenerEgreso() {
    this.VerEgresoService.obtener_egresos().subscribe(
      (data: any) => {
        console.log('Respuesta del servicio:', data);
        if (Array.isArray(data.egresos)) {
          this.registros = data.egresos.map((item: any) => {
            const id = item.id_usuario ? item.id_usuario._id : '';
            const nombre = item.id_usuario ? item.id_usuario.nombre : '';
            const apellido = item.id_usuario ? item.id_usuario.apellido : '';
            const id_usuario = item.id_usuario ? item.id_usuario.rut : '';
            const email = item.id_usuario ? item.id_usuario.correo : '';

            return {
              _id: item._id,
              descripcion: item.descripcion,
              precio: item.precio,
              rut: id_usuario,
              nombre: nombre,
              apellido: apellido,
              email: email,
              id: id
            };
          });
        } else {
          console.error("El servicio no devolvió un arreglo we :C", data.egresos);
        }
      },
      (error: any) => {
        console.error("Error al recibir los datos", error);
      }
    );
  }

  buscarPorUsuario() {
    if (this.formularioBusqueda.valid) {
      const idUsuario = this.formularioBusqueda.get('idUsuario')?.value;
      if (!idUsuario.trim()) {
        // Si el campo de filtro está vacío, muestra todos los egresos
        this.obtenerEgreso();
      } else {
        // Utilizamos la nueva función egresos_usuario con el ID del usuario
        this.VerEgresoService.obtenerEgresosPorUsuario(idUsuario).subscribe(
          (data: any) => {
            if (Array.isArray(data.egresos_usuario)) {
              this.registros = data.egresos_usuario.map((item: any) => {
                const id = item.id_usuario ? item.id_usuario._id : '';
                const nombre = item.id_usuario ? item.id_usuario.nombre : '';
                const apellido = item.id_usuario ? item.id_usuario.apellido : '';
                const id_usuario = item.id_usuario ? item.id_usuario.rut : '';
                const email = item.id_usuario ? item.id_usuario.correo : '';

                return {
                  _id: item._id,
                  descripcion: item.descripcion,
                  precio: item.precio,
                  rut: id_usuario,
                  nombre: nombre,
                  apellido: apellido,
                  email: email,
                  id: id
                };
              });
            } else {
              console.error("El servicio no devolvió un arreglo we :C", data.egresos_usuario);
            }
          },
          (error: any) => {
            console.error("Error al recibir los datos", error);
          }
        );
      }
    }
  }
}
