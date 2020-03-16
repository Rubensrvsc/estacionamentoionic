import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListavagaspropPage } from './listavagasprop.page';

const routes: Routes = [
  {
    path: '',
    component: ListavagaspropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListavagaspropPageRoutingModule {}
