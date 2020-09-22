import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormatarTextoMaiusculoPipe } from "./formatar-texto-maiusculo.pipe";
import { FormatarTextoMinusculoPipe } from "./formatar-texto-minusculo.pipe";

@NgModule({
  declarations: [FormatarTextoMaiusculoPipe, FormatarTextoMinusculoPipe],
  imports: [CommonModule],
  exports: [FormatarTextoMinusculoPipe, FormatarTextoMaiusculoPipe],
})
export class PipesModule {}
