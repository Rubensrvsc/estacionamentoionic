import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmareservaPageRoutingModule } from './confirmareserva-routing.module';

import { ConfirmareservaPage } from './confirmareserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmareservaPageRoutingModule
  ],
  declarations: [ConfirmareservaPage]
})
export class ConfirmareservaPageModule {}
