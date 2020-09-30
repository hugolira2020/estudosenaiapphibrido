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
    //console.log(this.router.snapshot.params.id);
    this.idPartido = this.router.snapshot.params.id;
    this.buscarMembrosDoPartido(this.idPartido);
  }
  public buscarMembrosDoPartido(idPart: number): void {
    this.loading = true;
    this.membros = [];
    this.apiserv.getmembros(this.idPartido).subscribe((response) => {
      //console.log(response);
      this.membros = response.dados;
      this.loading = false;
    });
  }

  search(event): void {
    let valorProcurado = event.target.value;
    if (!valorProcurado) {
      this.buscarMembrosDoPartido(this.idPartido);
      return;
    }

    this.membros = this.membros.filter((membro) => {
      return membro.nome.toLowerCase().includes(valorProcurado.toLowerCase());
    });
  }

  clear(): void {
    this.buscarMembrosDoPartido(this.idPartido);
  }

  async abrirModal(idDeputado: number) {
    const modal = await this.modal.create({
      component: ModalDeputadoPage,
      componentProps: { idDeputado },
    });
    return await modal.present();
  }
}
