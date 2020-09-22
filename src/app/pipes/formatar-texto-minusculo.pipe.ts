import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatarTextoMinusculo",
})
export class FormatarTextoMinusculoPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase();
  }
}
