import { Component, OnInit } from '@angular/core';
import { VerUsuariosService } from 'app/servicios/ver-usuarios/ver-usuarios.service';


@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(
    private verUsuariosService: VerUsuariosService,
  
  ) {}

  ngOnInit(): void {
    console.log('Iniciando componente VerUsuariosComponent'); //esto recibe los datos :v
    this.verUsuariosService.obtenerUsuarios().subscribe(
      (data: any) => {
        console.log('Datos obtenidos correctamente');
        this.actualizarDatos(data);
        this.usuarios.reverse();
     
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }
  
   actualizarDatos(data: any) {  //esto basicamente es para que te salga el ultimo usuario agregado recientemente :v
    this.usuarios = data.usuarios;
    console.log('Usuarios actualizados:', this.usuarios);

    if (this.usuarios.length > 0) {
      const ultimoUsuario = this.usuarios[this.usuarios.length - 1];
      console.log('Último Usuario:', ultimoUsuario);
    } 
    
  }
}
