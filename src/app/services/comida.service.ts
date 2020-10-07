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

  public async salvarComida(comida, id: number) {
    if (id || id === 0) {
      await this.update(id, comida);
      return;
    }
    await this.save(comida);
  }

  public async save(comida) {
    let comidas = await this.getAll();
    if (!comidas) {
      comidas = [];
    }
    comidas.push(comida);
    this.storage.set("comidas", JSON.stringify(comidas));
  }
  public async update(id: number, comida) {
    let comidas = await this.getAll();
    comidas = comidas.map((data, index) => {
      return id === index ? comida : data;
    });
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
  public async getComida(key: number) {
    let comidas = await this.getAll();
    const comidaProcurada = comidas.find((comida, idC) => {
      if (idC === key) {
        return comida;
      }
    });
    return comidaProcurada;
    //console.log(teste);
    //console.log(comidas);
    //console.log(key);
  }
}
