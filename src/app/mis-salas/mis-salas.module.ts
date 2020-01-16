import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisSalasPageRoutingModule } from './mis-salas-routing.module';

import { MisSalasPage } from './mis-salas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisSalasPageRoutingModule
  ],
  declarations: [MisSalasPage]
})
export class MisSalasPageModule {}
