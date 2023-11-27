import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/servicios/formulario.service';
//import { FormularioService } from '../../servicios/formulario.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario:any;
  registro:any;
  registro_enviar = {
    campo1:String,
    campo2:String,
    campo3:null,
    campo4:String,
    campo5:String
  }
  registros:any;
  constructor(
    private formularioSrv:FormularioService,
    private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      campo1:['',[Validators.required]],
      campo2:['',[Validators.required]],
      campo3:[''[Validators.required]], 
      campo4:[''],
      campo5:['']
    });
  }

  //obtener los las validaciones
  get formularioReactivo(){
    return this.formulario.controls;
  }

  botonEnviar(){
    this.registro_enviar.campo1 = this.formularioReactivo.campo1.value
    this.registro_enviar.campo2 = this.formularioReactivo.campo2.value
    this.registro_enviar.campo3 = this.formularioReactivo.campo3.value
    this.registro_enviar.campo4 = this.formularioReactivo.campo4.value
    this.registro_enviar.campo5 = this.formularioReactivo.campo5.value

    this.formularioSrv.crear_registro(this.registro_enviar).subscribe(
      (response:any) => {
        this.registro = response.registro;
        console.log("Los datos recibidos son")
        console.log(this.registro)
      }, error =>{
        console.log(error)
      }
    )
    //console.log(this.formularioReactivo);
  }

  obtenerRegistro(){
    this.formularioSrv.obtener_registros().subscribe(
      (response:any) => {
        this.registros = response.registros
        console.log(this.registros);

      }, error => {
        console.log(error)
      }
    )
  }

  eliminar(id:any){
    console.log(id)
  }
}
