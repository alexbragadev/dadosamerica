import { IPaises } from "./model/paises.model";
import { Injectable } from "@angular/core";
import { paises } from "./model/paises.mock";

@Injectable(
    { providedIn: 'root' }
)
export class PaisesService {
    paisesEntrada: IPaises[] = paises;
    paisesSaida: any = [];
    cont: number = 0;

    constructor() { }

    getPaises(): any {
        this.paisesEntrada.forEach(paises => {
            this.paisesSaida[this.cont] = paises;
            this.cont++;
        })
        return this.paisesSaida;
    }
}