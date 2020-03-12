import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmasaidaPageRoutingModule } from './confirmasaida-routing.module';

import { ConfirmasaidaPage } from './confirmasaida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmasaidaPageRoutingModule
  ],
  declarations: [ConfirmasaidaPage]
})
export class ConfirmasaidaPageModule {}
