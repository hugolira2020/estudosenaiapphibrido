import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ComidaService } from "../services/comida.service";
import { LoadingController } from "@ionic/angular";
@Component({
  selector: "app-modal-comida",
  templateUrl: "./modal-comida.page.html",
  styleUrls: ["./modal-comida.page.scss"],
})
export class ModalComidaPage implements OnInit {
  @Input() id: number;
  public isEdit: boolean = false;
  public carregando = null;

  public form: FormGroup;
  constructor(
    public modal: ModalController,
    public formbuilder: FormBuilder,
    public comida: ComidaService,
    public loading: LoadingController
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

  async ngOnInit() {
    if (this.id || this.id === 0) {
      this.isEdit = true;
      await this.editarComida();
    }
  }

  fecharModal(): void {
    this.modal.dismiss();
  }

  async submitForm() {
    //console.log(this.form.value);
    await this.showCarregando;
    this.comida.salvarComida(this.form.value, this.id);
    await this.fecharCarregando;
  }

  public async editarComida() {
    const edComida = await this.comida.getComida(this.id);
    console.log(edComida);
    this.form.patchValue(edComida);
  }

  async showCarregando() {
    this.carregando = await this.loading.create({
      message: "Aguarde...",
    });
    await this.carregando.present();
  }

  async fecharCarregando() {
    await this.carregando.dismiss();
  }
}
