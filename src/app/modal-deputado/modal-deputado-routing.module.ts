import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDeputadoPage } from './modal-deputado.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDeputadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDeputadoPageRoutingModule {}
