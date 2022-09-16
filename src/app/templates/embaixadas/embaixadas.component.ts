import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { EmbaixadasService } from 'src/app/embaixadas.service';
import { IEmbaixada } from 'src/app/model/embaixadas.model';

@Component({
  selector: 'app-embaixadas',
  templateUrl: './embaixadas.component.html',
  styleUrls: ['./embaixadas.component.css']
})
export class EmbaixadasComponent implements OnInit {

  paisNome?: string;
  color: ThemePalette = 'warn';
  widthComboBox = 250;

  embaixadas: IEmbaixada[] = [];

  constructor(
    private embaixadasService: EmbaixadasService
  ) { }

  ngOnInit(): void {
    // this.paisNome = "brasil";
    // this.embaixadasService.getEmbaixadasById(this.paisNome).subscribe(data => {
    //   console.log(data);
    // })
    this.embaixadasService.getAllEmbaixadas().subscribe(data => {
      this.embaixadas = data;
    })
  }

}
