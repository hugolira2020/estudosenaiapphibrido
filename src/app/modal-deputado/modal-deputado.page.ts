import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Deputado } from "../models/deputado";
import { ApiService } from "../services/api.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-modal-deputado",
  templateUrl: "./modal-deputado.page.html",
  styleUrls: ["./modal-deputado.page.scss"],
})
export class ModalDeputadoPage implements OnInit {
  @Input() idDeputado: number;
  public deputado: Deputado;
  public carregando: any;
  public carregamentoFinalizado: boolean = false;
  constructor(
    public apiService: ApiService,
    public modal: ModalController,
    public loading: LoadingController
  ) {}

  ngOnInit() {
    console.log(this.idDeputado);
    this.buscarDeputado(this.idDeputado);
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

  public buscarDeputado(idDeputado: number) {
    this.showCarregando();
    this.apiService.getDeputadoId(idDeputado).subscribe((response) => {
      this.deputado = response.dados;
      this.fecharCarregando();
      this.carregamentoFinalizado = true;
    });
  }

  fecharModal(): void {
    this.modal.dismiss();
  }
}
