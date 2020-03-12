import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmasaidaPage } from './confirmasaida.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmasaidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmasaidaPageRoutingModule {}
