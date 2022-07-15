import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { IPaises } from "../model/paises.model";

@Injectable(
    { providedIn: 'root' }
)
export class EventService {

    pais?: IPaises;
    resultado: any;
   
    url = 'http://localhost:8080/paises';
    urlInfoPais = 'https://servicodados.ibge.gov.br/api/v1/paises';
    urlCidadesPais = 'http://www.geonames.org/childrenJSON?geonameId';

    constructor(
        private http: HttpClient
        ) { }

    searchItems(searchItem: string, paises: IPaises) {
        let term = searchItem.toLocaleLowerCase();
        let results: IPaises[] = [];
    }    

}