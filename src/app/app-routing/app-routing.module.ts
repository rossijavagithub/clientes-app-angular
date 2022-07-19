import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from '../clientes/contenido/contenido.component';
import { DetalleComponent } from '../clientes/detalle/detalle.component';
import { FormComponent } from '../clientes/form/form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/clientes',
    pathMatch:'full'
  },
  {
    path:'clientes',
    component: ContenidoComponent
  },
  {
    path:'clientes/crear',component:FormComponent
  },
  {
    path:'clientes/ver/:id',
    component:DetalleComponent
  },
  {
    path:'clientes/editar/:id',
    component:FormComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
