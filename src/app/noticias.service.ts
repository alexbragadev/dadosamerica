import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { INoticiaPrincipal } from './model/noticia-principal.model';
import { INoticias } from './model/noticias.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  noticia?: INoticias;

  url = 'http://localhost:8080/noticia';

  constructor(
    private http: HttpClient,         
    private messageService: MessageService,
    ) { }

    getAllNoticias() : Observable<INoticias[]> {
      return this.http.get<INoticias[]>(`${ this.url }/all`)
    }

    getNoticiaPrincipalById(id: number) : Observable<INoticiaPrincipal> {
      return this.http.get<INoticiaPrincipal>(`${ this.url }/findNoticiaP/${ id }`)
    }
}
