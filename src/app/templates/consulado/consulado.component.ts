import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ConsuladoService } from 'src/app/consulado.service';
import { IConsulado } from 'src/app/model/consulado.model';

@Component({
  selector: 'app-consulado',
  templateUrl: './consulado.component.html',
  styleUrls: ['./consulado.component.css']
})
export class ConsuladoComponent implements OnInit {

  paisNome?: string;
  color: ThemePalette = 'warn';
  widthComboBox = 250;
  showInformacoesConsulado: boolean = false;

  consuladoOriginal: IConsulado[] = [];
  consuladoList: IConsulado[] = [];
  consulados: IConsulado[] = [];
  consulado?: IConsulado;

  constructor(private consuladoService: ConsuladoService) { }

  ngOnInit(): void {
    this.consuladoService.getAllConsulado().subscribe(data => {
      this.consuladoOriginal = data;

      this.consulados.push(this.consuladoOriginal[0]);
      this.consulado = this.consuladoOriginal[0];

      for (let x = 0; x < this.consuladoOriginal.length; x++) {
        if (this.consulado.nomePais != this.consuladoOriginal[x].nomePais) {
          this.consulado = this.consuladoOriginal[x];
          this.consulados.push(this.consuladoOriginal[x]);
        }  
      }

      for (let y = 0; y < this.consulados.length; y++) {
        this.consulados[y].nomePais = this.consulados[y].nomePais.toUpperCase();
      }
    });
  }

  getConsulado(item: IConsulado) {
    this.consuladoService.getConsuladoById(item.nomePais.toLowerCase()).subscribe(data => {
      this.consuladoList = data;
      this.showInformacoesConsulado = true;
    });
  }

}
