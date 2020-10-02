import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ComidaService {
  constructor(public storage: Storage) {
    //storage.set("comidas", [{ nome: "Pizza" }]);

    // Or to get a key/value pair
    storage.get("comidas").then((val) => {
      console.log("Comidasss", val);
    });
  }

  public getAll() {
    return this.storage.get("comidas").then((comidas) => {
      return !comidas.isArray ? [] : comidas;
    });
  }

  public salvarComida(comida) {
    this.getAll().then((data) => {
      this.storage.set("comidas", data.push(comida));
    });
  }
}
