import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmbaixada } from './model/embaixadas.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaixadasService {

  urlEmbaixada = 'http://localhost:8080/embaixada/';

  constructor(
    private http: HttpClient
    ) { }

  getEmbaixadasById(paisNome: string): Observable<IEmbaixada[]> {
      return this.http.get<IEmbaixada[]>(`${ this.urlEmbaixada }find/${paisNome}`);
  }

  getAllEmbaixadas(): Observable<IEmbaixada[]> {
    return this.http.get<IEmbaixada[]>(`${ this.urlEmbaixada }all`);
}
  
}
