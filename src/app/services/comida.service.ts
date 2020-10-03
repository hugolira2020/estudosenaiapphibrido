import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ComidaService {
  constructor(public storage: Storage) {
    //  storage.set("comidas", JSON.stringify([{ nome: "comida" }]));
    //this.removeAll();
  }

  public async getAll() {
    //return this.storage.get("comidas").then((comidas) => {
    //return Promise.resolve(comidas);
    // });
    let comidas = await this.storage.get("comidas");
    comidas = JSON.parse(comidas);
    return comidas;
  }

  public async salvarComida(comida) {
    //this.getAll().then((comidas) => {
    //  console.log(comidas);
    //  comidas.push(comida);
    //  this.storage.set("comidas", comidas);
    //});
    let comidas = await this.getAll();
    if (!comidas) {
      comidas = [];
    }
    comidas.push(comida);
    this.storage.set("comidas", JSON.stringify(comidas));
  }
  public async removeAll() {
    await this.storage.remove("comidas");
  }
  public async remove(index: number) {
    let comidas = await this.getAll();
    comidas.splice(index, 1);
    await this.storage.set("comidas", JSON.stringify(comidas));
  }
}
