import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'app/servicios/crearUsuario/formulario.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {
  usuario:any;

  constructor(private formularioService: FormularioService) {}

  ngOnInit(): void {
    this.formularioService.obtener_usuario().subscribe(
      (data) => {
        
        this.usuario = data;
        console.log('Usuarios obtenidos:', this.usuario);
      },
      (error) => {
       
        console.error('Error al obtener usuarios', error);
      }
    );
  }
}
