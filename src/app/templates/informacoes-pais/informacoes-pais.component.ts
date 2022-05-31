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
  cidadesDoPaisJson: any;
  cidadesDoPaisArray = [""];

  historiaConteudo: string = "";
  populacaoPais: string = "";
  populacaoFormatadaString = "";
  populacaoFormatadaNumber = 0;
  areaTotalString: string = "";
  areaTotalNumber: number = 0;
  idioma: string = "";
  pibPerCapta: string = "";
  pibPerCaptaN: number = 0;
  pibTotal: string = "";
  pibTotalN: number = 0;
  
  showConteudoTexto: boolean = false;
  showModalError: boolean = false;

  constructor(private paisesService: PaisesService) {
    
  }
    ngOnInit(){
      // informações da aplicação sobre o país
      this.paisSelecionado = this.paisesService.getPaisSelecionado();
  
      this.SearchInfoPais();
      this.SearchIndicadoresPais();
      this.SearchCidadesPais();
    }

    SearchInfoPais() {
      // informações da requisição a um objeto json externo
      this.paisesService.getInfoPais().subscribe(response => {
        this.paisJsonInfo = JSON.stringify(response);
        this.paisJsonInfoFormatado = this.paisJsonInfo.replace("unidades-monetarias", "unidadesmonetarias");
        this.paisJsonInfoFormatado = this.paisJsonInfoFormatado.replace("regiao-intermediaria", "regiaointermediaria");
        this.paisJsonInfo = JSON.parse(this.paisJsonInfoFormatado);
        this.areaTotalString = this.paisJsonInfo[0].area.total;
        this.areaTotalNumber = parseInt(this.areaTotalString);
        this.areaTotalString = (this.areaTotalNumber).toLocaleString('pt-BR') + " km²";
        this.idioma = this.paisJsonInfo[0].linguas[0].nome.charAt(0).toUpperCase() + this.paisJsonInfo[0].linguas[0].nome.slice(1);
        this.historiaConteudo = this.paisJsonInfo[0].historico.substr(0, 560)+" ...";
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
            this.populacaoFormatadaString = this.populacaoPais.slice(9, -2);
            this.populacaoFormatadaNumber = parseInt(this.populacaoFormatadaString);
            this.populacaoFormatadaString = (this.populacaoFormatadaNumber).toLocaleString('pt-BR');
          }
          else if (items.indicador === "Economia - PIB per capita") {
            this.pibPerCapta = JSON.stringify(items.series[0].serie[49]);
            this.pibPerCapta = this.pibPerCapta.slice(9, -2);
            this.pibPerCaptaN = parseInt(this.pibPerCapta);
            this.pibPerCapta = (this.pibPerCaptaN).toLocaleString('pt-BR');
          }
          else if (items.indicador === "Economia - Total do PIB") {
            this.pibTotal = JSON.stringify(items.series[0].serie[49]);
            this.pibTotal = this.pibTotal.slice(9, -2);
            this.pibTotalN = parseInt(this.pibTotal);
            this.pibTotal = (this.pibTotalN).toLocaleString('pt-BR');
          }
        }
      }, (err) => {
        this.showModalError = true;
      });
    }

    
    SearchCidadesPais() {
      // informações da requisição a um objeto json externo
      this.paisesService.getCidadesPorCodPais().subscribe(response => {
        this.cidadesDoPaisJson = response;

        this.cidadesDoPaisArray = [];

        for (let x = 0; x < this.cidadesDoPaisJson.totalResultsCount; x++) {
          this.cidadesDoPaisArray.push(this.cidadesDoPaisJson.geonames[x].adminName1);
        }

      }, (err) => {
        this.showModalError = true
      });
    }

    openConteudoTexto() {
      $('.texto-marcado').css({display: 'none'});
      this.showConteudoTexto = true;
    }


}
