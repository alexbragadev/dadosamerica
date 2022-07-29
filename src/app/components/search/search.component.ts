import { isNgTemplate } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPaises } from 'src/app/model/paises.model';
import { PaisesService } from 'src/app/paises.service';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  paises: IPaises[] = [];
  pais?: IPaises;
  showInfo: boolean =  false;
  _searchItem: string = "";
  searchEncontrado: string = "";
  verificarPesquisa: boolean = false;

  get searchItem(): string {
    return this._searchItem;
  }

  set searchItem(value) {
    this._searchItem = value;
    this.searchPaises(this._searchItem);
  }

  getPaisesSubscription?: Subscription;

  constructor(private paisesService: PaisesService, private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.getPaisesSubscription = this.paisesService.getAllPaises().subscribe((data: IPaises[]) => {
      this.paises = data;
      this.showInfo = true;
      }, (err) => {
        console.log("erro lista países " + err);
      });
  }

  ngOnDestroy() {
    this.getPaisesSubscription?.unsubscribe();
    this.verificarPesquisa = false;
  }

  searchPaises(searchItem: string) {
    let nomeMinusculoPais;
    let searchMinusculo;
    this.searchEncontrado = "";
    for (let pais of this.paises) {
      nomeMinusculoPais = pais.nome.toLocaleLowerCase();
      searchMinusculo = searchItem.toLocaleLowerCase();
      if (nomeMinusculoPais === searchMinusculo) {
         this.paisesService.recebePaisSelecionado(pais);
         this.pais = pais;
         this.searchEncontrado = searchMinusculo;
      }
    }
  }

  pesquisarPais() {
    if (this.searchEncontrado) {
      this.router.navigateByUrl('/home');
      setTimeout(() => {
        this.router.navigateByUrl('/informacoes-pais');
      });
    }
  }

}
