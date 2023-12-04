import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/crearUsuario/formulario.component';
import { EgresosComponent } from './componentes/crearEgresos/egresos.component';
import { VerUsuariosComponent } from './componentes/ver-usuarios/ver-usuarios.component';


const routes: Routes = [
  {
    path: 'crearUsuario',
    component: FormularioComponent
  },
  {
    path: 'crearEgresos',
    component: EgresosComponent
  },
  { path: 'crearUsuario/egresos', component: EgresosComponent },
  {path:'verUsuario',component:VerUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
