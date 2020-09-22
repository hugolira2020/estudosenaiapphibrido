import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";

import { Tab1PageRoutingModule } from "./tab1-routing.module";
import { PipesModule } from "../pipes/pipes.module";
import { ButtonGoToLinkComponent } from "../button-go-to-link/button-go-to-link.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    PipesModule,
  ],
  declarations: [Tab1Page, ButtonGoToLinkComponent],
})
export class Tab1PageModule {}
