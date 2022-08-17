import { Component, OnInit } from '@angular/core';
import { INoticiaPrincipal } from 'src/app/model/noticia-principal.model';
import { INoticias } from 'src/app/model/noticias.model';
import { NoticiasService } from 'src/app/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias?: INoticias[];
  noticiaPrincipal?: INoticiaPrincipal;

  constructor(private noticiaService: NoticiasService) {}

  ngOnInit(): void {
    let id = 1;
    this.noticiaService.getNoticiaPrincipalById(id).subscribe((data) => {
      this.noticiaPrincipal = data;
    });

    this.noticiaService.getAllNoticias().subscribe((data) => {
      this.noticias = data;
    });
  }

}
