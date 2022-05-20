import { IPaises } from "./model/paises.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable(
    { providedIn: 'root' }
)
export class PaisesService {

    pais?: IPaises;
    resultado: any;
   
    url = 'http://localhost:8080/paises';
    urlInfoPais = 'https://servicodados.ibge.gov.br/api/v1/paises';

    constructor(private http: HttpClient) { }

    getAllPaises() : Observable<IPaises[]> {
        return this.http.get<IPaises[]>(`${ this.url }/all`);
    }

    recebePaisSelecionado(pais: IPaises) {
        this.pais = pais;
    }

    getPaisSelecionado() {
        return this.pais;
    }

    getInfoPais() {
        return this.http.get(`${ this.urlInfoPais }/${this.pais?.sigla}`);
    }

    getIndicadoresPais() {
        return this.http.get(`${ this.urlInfoPais }/${this.pais?.sigla}/indicadores`);
    }
}