import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Membro } from "../models/membro";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-membros",
  templateUrl: "./membros.page.html",
  styleUrls: ["./membros.page.scss"],
})
export class MembrosPage implements OnInit {
  membros: Array<Membro> = [];
  idPartido: number;
  constructor(public router: ActivatedRoute, private apiserv: ApiService) {}

  ngOnInit() {
    //console.log(this.router.snapshot.params.id);
    this.idPartido = this.router.snapshot.params.id;
    this.buscarMembrosDoPartido(this.idPartido);
  }
  public buscarMembrosDoPartido(idPart: number): void {
    this.apiserv.getmembros(this.idPartido).subscribe((response) => {
      //console.log(response);
      this.membros = response.dados;
    });
  }
}
