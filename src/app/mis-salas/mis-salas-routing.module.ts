import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisSalasPage } from './mis-salas.page';

const routes: Routes = [
  {
    path: '',
    component: MisSalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisSalasPageRoutingModule {}
