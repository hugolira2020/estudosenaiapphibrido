import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalComidaPage } from "../modal-comida/modal-comida.page";
import { ComidaService } from "../services/comida.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  public comidas = [];
  constructor(public modal: ModalController, public comida: ComidaService) {}

  ngOnInit() {
    this.getComidas();
  }

  async abrirModalComida() {
    const modal = await this.modal.create({
      component: ModalComidaPage,
    });
    return await modal.present();
  }
  public async getComidas() {
    this.comidas = await this.comida.getAll();
  }

  public async remover(id: number) {
    await this.comida.remove(id);
    this.getComidas();
  }
}
