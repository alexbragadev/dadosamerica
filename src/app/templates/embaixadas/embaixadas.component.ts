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
  showInformacoesEmbaixada: boolean = false;

  embaixadasOriginal: IEmbaixada[] = [];
  embaixadasList: IEmbaixada[] = [];
  embaixadas: IEmbaixada[] = [];
  embaixada?: IEmbaixada;

  constructor(
    private embaixadasService: EmbaixadasService
  ) { }

  ngOnInit(): void {
    this.embaixadasService.getAllEmbaixadas().subscribe(data => {
      this.embaixadasOriginal = data;

      this.embaixadas.push(this.embaixadasOriginal[0]);
      this.embaixada = this.embaixadasOriginal[0];

      for (let x = 0; x < this.embaixadasOriginal.length; x++) {
        if (this.embaixada.nomePais != this.embaixadasOriginal[x].nomePais) {
          this.embaixada = this.embaixadasOriginal[x];
          this.embaixadas.push(this.embaixadasOriginal[x]);
        }  
      }

      for (let y = 0; y < this.embaixadas.length; y++) {
        this.embaixadas[y].nomePais = this.embaixadas[y].nomePais.toUpperCase();
      }
    });
  }

  getEmbaixada(item: IEmbaixada) {
    this.embaixadasService.getEmbaixadasById(item.nomePais.toLowerCase()).subscribe(data => {
      this.embaixadasList = data;
      this.showInformacoesEmbaixada = true;
    });
  }

}
