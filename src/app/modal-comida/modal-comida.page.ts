import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-modal-comida",
  templateUrl: "./modal-comida.page.html",
  styleUrls: ["./modal-comida.page.scss"],
})
export class ModalComidaPage implements OnInit {
  public form: FormGroup;
  constructor(public modal: ModalController, public formbuilder: FormBuilder) {
    this.form = formbuilder.group({
      nome: [""],
    });
  }

  ngOnInit() {}

  fecharModal(): void {
    this.modal.dismiss();
  }

  submitForm() {
    console.log(this.form.value);
  }
}
