import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IConsulado } from './model/consulado.model';

@Injectable({
  providedIn: 'root'
})
export class ConsuladoService {

  urlConsulado = 'http://localhost:8080/consulado/';

  constructor(private http: HttpClient) { }

  getConsuladoById(paisNome: string): Observable<IConsulado[]> {
    return this.http.get<[]>(`${ this.urlConsulado }find/${paisNome}`);
  }

  getAllConsulado(): Observable<IConsulado[]> {
    return this.http.get<IConsulado[]>(`${ this.urlConsulado }all`);
  }
}
