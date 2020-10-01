import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalComidaPageRoutingModule } from "./modal-comida-routing.module";

import { ModalComidaPage } from "./modal-comida.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalComidaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ModalComidaPage],
})
export class ModalComidaPageModule {}
