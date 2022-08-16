import { Component, Input, OnInit } from '@angular/core';
import { INoticias } from 'src/app/model/noticias.model';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia?: INoticias;

  constructor() { }

  ngOnInit(): void {
    
  }

}
