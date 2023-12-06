import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'app/servicios/crearUsuario/formulario.service';
import { VerUsuariosService } from 'app/servicios/ver-usuarios/ver-usuarios.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {
  
  ultimoUsuario: any;
  constructor(private formularioService: FormularioService,
    private verUsuarioservice:VerUsuariosService) {}

  ngOnInit(): void {
    this.verUsuarioservice.obtenerUsuarios().subscribe(
      (data:any) => {
      
        this.ultimoUsuario = data.usuarios[data.usuarios.length - 1];
        console.log('Último usuario obtenido:', this.ultimoUsuario);
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }
  }
  

