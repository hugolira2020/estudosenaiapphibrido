import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextoAzulDirective } from "./texto-azul.directive";

@NgModule({
  declarations: [TextoAzulDirective],
  imports: [CommonModule],
  exports: [TextoAzulDirective],
})
export class DirectivesModule {}
