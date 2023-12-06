import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormularioService } from '../../servicios/crearUsuario/formulario.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: any;
  registro: any;
  registro_enviar = {
    nombre: '',
    apellido: '',
    rut: null,
    correo:'',
    password: ''
  };
  

  constructor(
    private formularioSrv: FormularioService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get formularioReactivo() {
    return this.formulario.controls;
  }

  botonEnviar() {
    if (this.formulario.valid) {
      this.registro_enviar.nombre = this.formularioReactivo.nombre.value;
      this.registro_enviar.apellido = this.formularioReactivo.apellido.value;
      this.registro_enviar.rut = this.formularioReactivo.rut.value;

      this.http.post('https://backend-dos-campos-cft.koyeb.app/api-backend-prueba/usuario/crear-usuario', this.registro_enviar)
        .subscribe(
          (response: any) => {
            this.registro = response.usuario;
            console.log("Los datos recibidos son", this.registro);

            // Descomentar la siguiente línea para navegar a la ruta 'egresos'
             this.router.navigate(['verUsuario'], { relativeTo: this.route });
          },
          error => {
            console.log(error);
          }
        );
    } else {
      console.log("El formulario no es válido.");
    }
  }

  

  eliminar(id: any) {
    console.log(id);
  }
}
