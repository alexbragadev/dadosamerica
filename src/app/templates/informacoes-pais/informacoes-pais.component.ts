import { Component, OnInit } from '@angular/core';
import { IPaises } from 'src/app/model/paises.model';
import { PaisesService } from 'src/app/paises.service';

@Component({
  selector: 'informacoes-pais',
  templateUrl: './informacoes-pais.component.html',
  styleUrls: ['./informacoes-pais.component.css']
})
export class InformacoesPaisComponent implements OnInit {

  paisSelecionado?: IPaises;
  paisJsonInfo: any;
  paisJsonInfoFormatado: any;
  paisJsonIndicadores: any;
  populacaoPais: string = "";
  formatarPopulacao1 = "";
  formatarPopulacao2 = "";
  showModalError: boolean = false;

  constructor(private paisesService: PaisesService) {
    
  }
    ngOnInit(){
      // informações da aplicação sobre o país
      this.paisSelecionado = this.paisesService.getPaisSelecionado();
  
      this.SearchInfoPais();
      this.SearchIndicadoresPais();

    }

    SearchInfoPais() {
      // informações da requisição a um objeto json externo
      this.paisesService.getInfoPais().subscribe(response => {
        this.paisJsonInfo = JSON.stringify(response);
        this.paisJsonInfoFormatado = this.paisJsonInfo.replace("unidades-monetarias", "unidadesmonetarias");
        this.paisJsonInfoFormatado = this.paisJsonInfoFormatado.replace("regiao-intermediaria", "regiaointermediaria");
        this.paisJsonInfo = JSON.parse(this.paisJsonInfoFormatado);
      }, (err) => {
        this.showModalError = true;
      });
    }

    SearchIndicadoresPais() {
      // informações da requisição a um objeto json externo
      this.paisesService.getIndicadoresPais().subscribe(response => {
        this.paisJsonIndicadores = response;
        for (let items of this.paisJsonIndicadores) {
          if (items.indicador === "População - População total") {
            this.populacaoPais = JSON.stringify(items.series[0].serie[49]);
            this.formatarPopulacao1 = this.populacaoPais.replace("", "");
            console.log(this.formatarPopulacao1);
          }
        }
      }, (err) => {
        this.showModalError = true;
      });
    }

    SearchCidadesPais() {

    }

}
