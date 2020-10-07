import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalComidaPage } from "../modal-comida/modal-comida.page";
import { ComidaService } from "../services/comida.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  public comidas = [];
  public carregando = null;
  constructor(
    public modal: ModalController,
    public comida: ComidaService,
    public loading: LoadingController
  ) {}

  ngOnInit() {
    this.getComidas();
  }

  async abrirModalComida() {
    await this.showCarregando();
    const modal = await this.modal.create({
      component: ModalComidaPage,
    });
    await this.fecharCarregando();
    return await modal.present();
  }
  public async getComidas() {
    await this.showCarregando();
    this.comidas = await this.comida.getAll();
    await this.fecharCarregando();
  }

  public async remover(id: number) {
    await this.comida.remove(id);
    this.getComidas();
  }
  public async editar(idComida: number) {
    //console.log(id);
    await this.showCarregando;
    const modal = await this.modal.create({
      component: ModalComidaPage,
      componentProps: {
        id: idComida,
      },
    });
    await this.fecharCarregando;
    return await modal.present();
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
