import { Component, OnInit } from "@angular/core";
import { Partido } from "../models/partido";
import { ApiService } from "../services/api.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  public partidos: Array<Partido> = [];
  public page: number = 1;
  public links: Array<any> = [];
  public carregando = null;
  constructor(
    public apiService: ApiService,
    public loading: LoadingController
  ) {}

  ngOnInit() {
    this.listarPartidos(this.page);
  }
  async listarPartidos(page: number) {
    await this.showCarregando();
    this.apiService.getPartidos(page).subscribe((response) => {
      this.partidos = response.dados;
      this.links = response.links;
      this.fecharCarregando();
      // console.log(response);
    });
  }

  proximaPagina(): void {
    this.listarPartidos(++this.page);
  }

  anteriorPagina(): void {
    this.listarPartidos(--this.page);
  }
  verificarPagina(): boolean {
    const verificacao = this.links.filter((link) => {
      return link.rel === "next";
    });
    return verificacao.length > 0;
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
