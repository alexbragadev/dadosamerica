import { IPaises } from "./model/paises.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable(
    { providedIn: 'root' }
)
export class PaisesService {
   
    url = 'http://localhost:8080/paises/';

    constructor(private http: HttpClient) { }

    getAllPaises() : Observable<IPaises[]> {
        return this.http.get<IPaises[]>(this.url + 'all');
    }
}