import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public url: string = environment.baseUrl;
  constructor(public httpClient: HttpClient) {}

  public getPartidos(): Observable<any> {
    return this.httpClient.get(this.url + "partidos");
  }
}
