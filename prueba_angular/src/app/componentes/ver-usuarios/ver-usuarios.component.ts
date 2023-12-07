import { Component, OnInit } from '@angular/core';
import { VerUsuariosService } from 'app/servicios/ver-usuarios/ver-usuarios.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  ultimoUsuario: any;

  constructor(private verUsuariosService: VerUsuariosService) {}

  ngOnInit(): void {
   
    this.verUsuariosService.obtenerUsuarios().subscribe(
      (data) => {
       
        this.usuarios = data;
        console.log('Usuarios obtenidos:', this.usuarios);
    
        // Accede al último usuario
        this.ultimoUsuario = this.usuarios[this.usuarios.length - 1];
     
        
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );

  
     
}}
