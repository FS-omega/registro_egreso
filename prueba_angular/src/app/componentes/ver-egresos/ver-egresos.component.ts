import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VerEgresosService } from 'app/servicios/ver-egresos/ver-egresos.service';
@Component({
  selector: 'app-ver-egresos',
  templateUrl: './ver-egresos.component.html',
  styleUrls: ['./ver-egresos.component.css']
})
export class VerEgresosComponent {
  registros: any[]=[]//aca colocas los parametros que queras mostrar o la wa que quieras validar wazaaaaa

  constructor(
    private VerEgresosService: VerEgresosService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.obteneregreso();
  }

  obteneregreso() {
    this.VerEgresosService.obtener_egresos().subscribe()
}
}