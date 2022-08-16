import { Component, OnInit } from '@angular/core';
import { INoticias } from 'src/app/model/noticias.model';
import { NoticiasService } from 'src/app/noticias.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  noticias?: INoticias[];

  constructor(private noticia: NoticiasService) {}

  ngOnInit(): void {
    this.noticia.getAllPaises().subscribe((data) => {
      this.noticias = data;
    });
  }

}
