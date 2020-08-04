import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const routes: Routes = [{
  path: 'clientes-form', component: ClienteFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
