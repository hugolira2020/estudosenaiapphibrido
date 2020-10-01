import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalComidaPage } from './modal-comida.page';

const routes: Routes = [
  {
    path: '',
    component: ModalComidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalComidaPageRoutingModule {}
