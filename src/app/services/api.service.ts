import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { ResponseApi } from "../models/response-api";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public url: string = environment.baseUrl;
  constructor(public httpClient: HttpClient) {}

  public getPartidos(page: number): Observable<ResponseApi> {
    return this.httpClient.get<ResponseApi>(
      this.url + "partidos?pagina=" + page
    );
  }

  public getmembros(id: number): Observable<ResponseApi> {
    return this.httpClient.get<ResponseApi>(
      this.url + "partidos/" + id + "/membros"
    );
  }
}
