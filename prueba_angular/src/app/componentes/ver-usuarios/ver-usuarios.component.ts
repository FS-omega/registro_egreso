import { Component, OnInit } from '@angular/core';
import { VerUsuariosService } from 'app/servicios/ver-usuarios/ver-usuarios.service';


@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {
  usuarios: any[]=[];
  ultimoUsuario: any;

  constructor(
    private verUsuariosService: VerUsuariosService,
    
  ) {}

  ngOnInit(): void {
    
    console.log('Iniciando componente VerUsuariosComponent');

    this.verUsuariosService.obtenerUsuarios().subscribe(
      
      (data: any) => { 
        console.log('Datos obtenidos correctamente');
        this.actualizarDatos(data); 
       
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }
  
   actualizarDatos(data: any) {
    this.usuarios = data.usuarios; 
  
    console.log('Usuarios actualizados:', this.usuarios);
  
   
    this.ultimoUsuario = this.usuarios[this.usuarios.length - 1];
  
    console.log('Último Usuario:', this.ultimoUsuario);
  }}