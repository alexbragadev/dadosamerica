import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPaises } from 'src/app/model/paises.model';
import { PaisesService } from 'src/app/paises.service';
import $ from 'jquery';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { empty, map, startWith, Subscription } from 'rxjs';
import { SubSink } from 'subsink';
import { LocalStorageService } from 'src/app/local-storage.service';
import { comboBox } from './comboBox.interface';
import { LiteralArray } from '@angular/compiler';

const CACHE_KEY = 'httpCidadesCache';

@Component({
  selector: 'informacoes-pais',
  templateUrl: './informacoes-pais.component.html',
  styleUrls: ['./informacoes-pais.component.css']
})
export class InformacoesPaisComponent implements OnInit, OnDestroy {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  width = 200;
  height = 200;
  widthComboBox = 350;

  paisSelecionado?: IPaises;
  paisJsonInfo: any;
  paisJsonInfoFormatado: any;
  paisJsonIndicadores: any;
  cidadesDoPaisJson: any;
  cidadesDoPaisArray = [""];
  functionFormt: any;

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

  alfabetizacao: comboBox[] = [];
  matriculas: comboBox[] = [];
  subnutricao: comboBox[] = [];

  subs = new SubSink();
  repos: any;

  constructor(
    private paisesService: PaisesService,
    private localStorage: LocalStorageService
    ) {}

    ngOnInit(){
      this.getPaisSelecionado();
      this.SearchInfoPais();
      this.SearchIndicadoresPais();
      this.SearchCidadesPais();
      // this.getpopulacaoFormatadaString();
    }

    ngOnDestroy() {
      this.subs.unsubscribe();
      this.localStorage.clear();
    }

    getPaisSelecionado() {
      if (this.localStorage.get('setPaisSelecionado')) {
        this.paisSelecionado = JSON.parse(this.localStorage.get('setPaisSelecionado'));
      } else {   
        // informações da aplicação sobre o país
        this.paisSelecionado = this.paisesService.getPaisSelecionado();
        this.localStorage.set('setPaisSelecionado', this.paisSelecionado);
      }
    }

    SearchInfoPais() {
      if (this.localStorage.get('setInfoPais')) {
        this.paisJsonInfo = JSON.parse(this.localStorage.get('setInfoPais'));
        this.localizacao = this.paisJsonInfo[0].localizacao.regiaointermediaria.nome;
        this.capital = this.paisJsonInfo[0].governo.capital.nome;
        this.moeda = this.paisJsonInfo[0].unidadesmonetarias[0].nome;
        this.areaTotalString = this.paisJsonInfo[0].area.total;
        this.areaTotalNumber = parseInt(this.areaTotalString);
        this.areaTotalString = (this.areaTotalNumber).toLocaleString('pt-BR') + " km²";
        this.idioma = this.paisJsonInfo[0].linguas[0].nome.charAt(0).toUpperCase() + this.paisJsonInfo[0].linguas[0].nome.slice(1);
        this.historiaConteudo = this.paisJsonInfo[0].historico.substr(0, 540)+" ...";
        this.historico = this.paisJsonInfo[0].historico;
      }
      else {
        // informações da requisição a um objeto json externo
        this.subs.sink = this.paisesService.getInfoPais().subscribe(response => {
          this.paisJsonInfo = JSON.stringify(response);
          this.paisJsonInfoFormatado = this.paisJsonInfo.replace("unidades-monetarias", "unidadesmonetarias");
          this.paisJsonInfoFormatado = this.paisJsonInfoFormatado.replace("regiao-intermediaria", "regiaointermediaria");
          this.paisJsonInfo = JSON.parse(this.paisJsonInfoFormatado);

          this.localStorage.set('setInfoPais', this.paisJsonInfo);

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
          console.log("erro informações do país "+ err);
          this.showModalError = true;
        });
      }
    }

    SearchIndicadoresPais() {
      if (this.localStorage.get('setIndicadoresPais')) {
        this.paisJsonIndicadores = JSON.parse(this.localStorage.get('setIndicadoresPais'));
        this.indicadoresPaisFormt(this.paisJsonIndicadores);
      } else {
        // informações da requisição a um objeto json externo
        this.subs.sink = this.paisesService.getIndicadoresPais().subscribe(response => {
          this.paisJsonIndicadores = response;
          this.localStorage.set('setIndicadoresPais', this.paisJsonIndicadores);
          
          this.indicadoresPaisFormt(this.paisJsonIndicadores);

        }, (err) => {
          console.log("erro indicadores do país "+ err);
          this.showModalError = true;
        });
      }
    }

    
    SearchCidadesPais() {
      // informações da requisição a um objeto json externo
      setTimeout(() => {
        this.subs.sink = this.paisesService.getCidadesPorCodPais().subscribe(
          response => {
          this.cidadesDoPaisJson = response;
          this.cidadesDoPaisArray = [];

          if (this.cidadesDoPaisJson.totalResultsCount > 0) {
            this.localStorage.set('cidadesPais', this.cidadesDoPaisJson);
            
            for (let x = 0; x < this.cidadesDoPaisJson.totalResultsCount; x++) {
              this.cidadesDoPaisArray.push(this.cidadesDoPaisJson.geonames[x].adminName1);
            }

          } else {
            this.cidadesDoPaisJson = JSON.parse(this.localStorage.get('cidadesPais'));
            this.cidadesDoPaisArray = [];
  
            for (let x = 0; x < this.cidadesDoPaisJson.totalResultsCount; x++) {
              this.cidadesDoPaisArray.push(this.cidadesDoPaisJson.geonames[x].adminName1);
            }
            
          }
          
        }, (err) => {
          console.log("erro cidades do país "+ err);
          this.showModalError = true
        });
      },500);    
   
    }

    openConteudoTexto() {
      $('.texto-marcado').css({display: 'none'});
      this.showConteudoTexto = true;
    }

    indicadoresPaisFormt(paisJsonIndicadores: any){
      for (let items of paisJsonIndicadores) {
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
          for (let cont = 1; cont < items.series[0].serie.length; cont ++) {
            this.matriculasTotal = JSON.stringify(items.series[0].serie[cont]);
            this.matriculasTotal = this.matriculasTotal.slice(1, -1);
            let comboBoxPush = {value: this.matriculasTotal, viewValue: this.matriculasTotal};
            this.matriculas.push(comboBoxPush);
          } 
        } 
        // alfabetização %
        else if (items.id === 77836) {
          for (let cont = 1; cont < items.series[0].serie.length; cont ++) {
            this.alfabetizacaoTotal = JSON.stringify(items.series[0].serie[cont]);
            this.alfabetizacaoTotal = this.alfabetizacaoTotal.slice(1, -1);
            let comboBoxPush = {value: this.alfabetizacaoTotal, viewValue: this.alfabetizacaoTotal};
            this.alfabetizacao.push(comboBoxPush);
          } 
        }
        // subnutrição %
        else if (items.id === 77834) {
          for (let cont = 1; cont < items.series[0].serie.length; cont ++) {
            this.subnutricaoTotal = JSON.stringify(items.series[0].serie[cont]);
            this.subnutricaoTotal = this.subnutricaoTotal.slice(1, -1);
            let comboBoxPush = {value: this.subnutricaoTotal, viewValue: this.subnutricaoTotal};
            this.subnutricao.push(comboBoxPush);
          } 
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
          this.natalidadeTotal = Number(this.natalidadeTotal).toFixed(2);
        }
        // mortalidade por mil
        else if (items.id === 77850) {
          this.mortalidadeTotal = JSON.stringify(items.series[0].serie[48]);
          this.mortalidadeTotal = this.mortalidadeTotal.slice(9, -2);
          this.mortalidadeTotal = Number(this.mortalidadeTotal).toFixed(2);
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
    }


}
