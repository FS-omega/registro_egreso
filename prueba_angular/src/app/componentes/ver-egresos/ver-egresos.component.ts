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
      this.registros = data;
    });
  }
}
