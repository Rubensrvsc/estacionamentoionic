import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListavagaspropPageRoutingModule } from './listavagasprop-routing.module';

import { ListavagaspropPage } from './listavagasprop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListavagaspropPageRoutingModule
  ],
  declarations: [ListavagaspropPage]
})
export class ListavagaspropPageModule {}
