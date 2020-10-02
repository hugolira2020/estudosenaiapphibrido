import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ComidaService } from "../services/comida.service";

@Component({
  selector: "app-modal-comida",
  templateUrl: "./modal-comida.page.html",
  styleUrls: ["./modal-comida.page.scss"],
})
export class ModalComidaPage implements OnInit {
  public form: FormGroup;
  constructor(
    public modal: ModalController,
    public formbuilder: FormBuilder,
    public comida: ComidaService
  ) {
    this.form = formbuilder.group({
      nome: [""],
      tipo: [""],
      avaliacao: [""],
      horaEntrega: [""],
      dataEntrega: [""],
      isPimenta: [""],
    });
  }

  ngOnInit() {}

  fecharModal(): void {
    this.modal.dismiss();
  }

  submitForm() {
    //console.log(this.form.value);
    this.comida.salvarComida(this.form.value);
  }
}
