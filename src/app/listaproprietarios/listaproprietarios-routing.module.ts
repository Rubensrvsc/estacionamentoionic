import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaproprietariosPage } from './listaproprietarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListaproprietariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaproprietariosPageRoutingModule {}
