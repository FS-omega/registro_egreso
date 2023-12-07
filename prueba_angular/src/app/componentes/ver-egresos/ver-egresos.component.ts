import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VerEgresoService} from 'app/servicios/ver-egresos/ver-egresos.service';

@Component({
  selector: 'app-ver-egresos',
  templateUrl: './ver-egresos.component.html',
  styleUrls: ['./ver-egresos.component.css']
})
export class VerEgresosComponent {
  registros: any[] = [];

  constructor(
     private VerEgresoService:VerEgresoService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.obteneregreso();
  }

  obteneregreso() {
    this.VerEgresoService.obtener_egresos().subscribe((data:any) => {
      console.log('Respuesta del servicio:', data);
      if(Array.isArray(data.egresos)){
      this.registros = data.egresos.map((item: any)=>{
        return{
          _id: item._id,
          descripcion: item.descripcion,
          id_usuario: item.id_usuario,
          precio: item.precio,
        }

      });
    }else{
          console.error("el servicio no devolvio un arreglo we :C", data.egresos);
        }
    },
    (error)=>{
      console.error("error al recibir los datos", error);
    }
    );
  }
}
