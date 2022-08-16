import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
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

    getAllPaises() : Observable<INoticias[]> {
      return this.http.get<INoticias[]>(`${ this.url }/all`)
  }
}
