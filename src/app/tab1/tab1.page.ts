import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  public partidos = [];
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPartidos().subscribe((response) => {
      this.partidos = response.dados;
      console.log(response);
    });
  }
}
