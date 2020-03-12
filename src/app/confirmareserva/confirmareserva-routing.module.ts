import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmareservaPage } from './confirmareserva.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmareservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmareservaPageRoutingModule {}
