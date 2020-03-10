import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaproprietariosPageRoutingModule } from './listaproprietarios-routing.module';

import { ListaproprietariosPage } from './listaproprietarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaproprietariosPageRoutingModule
  ],
  declarations: [ListaproprietariosPage]
})
export class ListaproprietariosPageModule {}
