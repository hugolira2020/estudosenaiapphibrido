import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Membro } from "../models/membro";
import { ApiService } from "../services/api.service";
import { ModalController } from "@ionic/angular";
import { ModalDeputadoPage } from "../modal-deputado/modal-deputado.page";

@Component({
  selector: "app-membros",
  templateUrl: "./membros.page.html",
  styleUrls: ["./membros.page.scss"],
})
export class MembrosPage implements OnInit {
  membros: Array<Membro> = [];
  idPartido: number;
  loading: boolean = false;

  constructor(
    public router: ActivatedRoute,
    private apiserv: ApiService,
    public modal: ModalController
  ) {}

  ngOnInit() {
    this.loading = true;
    //console.log(this.router.snapshot.params.id);
    this.idPartido = this.router.snapshot.params.id;
    this.buscarMembrosDoPartido(this.idPartido);
    //setTimeout(() => {
    //   this.abrirModal();
    //}, 3000);
  }
  public buscarMembrosDoPartido(idPart: number): void {
    this.apiserv.getmembros(this.idPartido).subscribe((response) => {
      //console.log(response);
      this.membros = response.dados;
      this.loading = false;
    });
  }

  async abrirModal(idDeputado: number) {
    const modal = await this.modal.create({
      component: ModalDeputadoPage,
      componentProps: { idDeputado },
    });
    return await modal.present();
  }
}
