import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appTextoAzul]",
})
export class TextoAzulDirective {
  constructor(elemento: ElementRef) {
    elemento.nativeElement.style.color = "blue";
  }
}
