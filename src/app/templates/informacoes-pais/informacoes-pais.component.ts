import { Component, OnInit } from '@angular/core';
import { IPaises } from 'src/app/model/paises.model';
import { PaisesService } from 'src/app/paises.service';
import $ from 'jquery';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'informacoes-pais',
  templateUrl: './informacoes-pais.component.html',
  styleUrls: ['./informacoes-pais.component.css']
})
export class InformacoesPaisComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

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
  localizacao: string = "";
  capital: string = "";
  moeda: string = "";
  historico: string = "";
  
  pibPerCapta: string = "";
  pibPerCaptaN: number = 0;
  pibTotal: string = "";
  pibTotalN: number = 0;
  turistasTotal: string = "";
  turistasTotalN: number = 0;
  exportacoesTotal: string = "";
  exportacoesTotalN: number = 0;
  importacoesTotal: string = "";
  importacoesTotalN: number = 0;
  matriculasTotal: string = "";
  alfabetizacaoTotal: string = "";
  subnutricaoTotal: string = "";
  expectativaTotal: string = "";
  idhTotal: string = "";
  natalidadeTotal: string = "";
  mortalidadeTotal: string = "";
  assinaturasTotal: string = "";
  percentualTotal: string = "";
  
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
        this.localizacao = this.paisJsonInfo[0].localizacao.regiaointermediaria.nome;
        this.capital = this.paisJsonInfo[0].governo.capital.nome;
        this.moeda = this.paisJsonInfo[0].unidadesmonetarias[0].nome;
        this.areaTotalString = this.paisJsonInfo[0].area.total;
        this.areaTotalNumber = parseInt(this.areaTotalString);
        this.areaTotalString = (this.areaTotalNumber).toLocaleString('pt-BR') + " km²";
        this.idioma = this.paisJsonInfo[0].linguas[0].nome.charAt(0).toUpperCase() + this.paisJsonInfo[0].linguas[0].nome.slice(1);
        this.historiaConteudo = this.paisJsonInfo[0].historico.substr(0, 550)+" ...";
        this.historico = this.paisJsonInfo[0].historico;
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
          else if (items.indicador === "Economia - Chegada de turistas") {
            this.turistasTotal = JSON.stringify(items.series[0].serie[48]);
            this.turistasTotal = this.turistasTotal.slice(9, -2);
            this.turistasTotalN = parseInt(this.turistasTotal);
            this.turistasTotal = (this.turistasTotalN).toLocaleString('pt-BR');
          }
          else if (items.indicador === "Economia - Total de exportações") {
            this.exportacoesTotal = JSON.stringify(items.series[0].serie[48]);
            this.exportacoesTotal = this.exportacoesTotal.slice(9, -2);
            this.exportacoesTotalN = parseInt(this.exportacoesTotal);
            this.exportacoesTotal = (this.exportacoesTotalN).toLocaleString('pt-BR');
          }
          else if (items.indicador === "Economia - Total de importações") {
            this.importacoesTotal = JSON.stringify(items.series[0].serie[48]);
            this.importacoesTotal = this.importacoesTotal.slice(9, -2);
            this.importacoesTotalN = parseInt(this.importacoesTotal);
            this.importacoesTotal = (this.importacoesTotalN).toLocaleString('pt-BR');
          }
          //matriculas %
          else if (items.id === 77835) {
            this.matriculasTotal = JSON.stringify(items.series[0].serie[49]);
            this.matriculasTotal = this.matriculasTotal.slice(9, -2);
          } 
          // alfabetização %
          else if (items.id === 77836) {
            this.alfabetizacaoTotal = JSON.stringify(items.series[0].serie[49]);
            this.alfabetizacaoTotal = this.alfabetizacaoTotal.slice(9, -2);
          }
          // subnutrição %
          else if (items.id === 77834) {
            this.subnutricaoTotal = JSON.stringify(items.series[0].serie[47]);
            this.subnutricaoTotal = this.subnutricaoTotal.slice(9, -2);
          }
          // expectativa de vida
          else if (items.id === 77830) {
            this.expectativaTotal = JSON.stringify(items.series[0].serie[48]);
            this.expectativaTotal = this.expectativaTotal.slice(9, -2);
          }
          // idh %
          else if (items.id === 77831) {
            this.idhTotal = JSON.stringify(items.series[0].serie[48]);
            this.idhTotal = this.idhTotal.slice(9, -2);
          }
          // Taxa de natalidade por mil
          else if (items.id === 77851) {
            this.natalidadeTotal = JSON.stringify(items.series[0].serie[48]);
            this.natalidadeTotal = this.natalidadeTotal.slice(9, -2);
          }
          // mortalidade por mil
          else if (items.id === 77850) {
            this.mortalidadeTotal = JSON.stringify(items.series[0].serie[48]);
            this.mortalidadeTotal = this.mortalidadeTotal.slice(9, -2);
          }
          // Assinaturas de telefonia celular a cada 100 habitantes
          else if (items.id === 77854) {
            this.assinaturasTotal = JSON.stringify(items.series[0].serie[48]);
            this.assinaturasTotal = this.assinaturasTotal.slice(9, -2);
          }
          // Percentual de usuários de Internet %
          else if (items.id === 77857) {
            this.percentualTotal = JSON.stringify(items.series[0].serie[48]);
            this.percentualTotal = this.percentualTotal.slice(9, -2);
          }
        }
      }, (err) => {
        this.showModalError = true;
      });
    }

    
    SearchCidadesPais() {
      // informações da requisição a um objeto json externo
      setTimeout(() => {
        this.paisesService.getCidadesPorCodPais().subscribe(response => {
          this.cidadesDoPaisJson = response;
  
          this.cidadesDoPaisArray = [];
  
          for (let x = 0; x < this.cidadesDoPaisJson.totalResultsCount; x++) {
            this.cidadesDoPaisArray.push(this.cidadesDoPaisJson.geonames[x].adminName1);
          }
        }, (err) => {
          this.showModalError = true
        });
      },500);    
    }

    openConteudoTexto() {
      $('.texto-marcado').css({display: 'none'});
      this.showConteudoTexto = true;
    }


}
