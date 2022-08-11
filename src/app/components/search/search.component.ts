import { isNgTemplate } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IPaises } from 'src/app/model/paises.model';
import { PaisesService } from 'src/app/paises.service';
import { EventService } from 'src/app/shared/event.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions?: Observable<string[]>;

  paises: IPaises[] = [];
  pais?: IPaises;
  showInfo: boolean =  false;
  _searchItem: string = "";
  searchEncontrado: string = "";
  verificarPesquisa: boolean = false;
  avisoDigitarPais: boolean = false;

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

      this.paises.forEach(e => {
        this.options.push(e.nome);
      });

      this.showInfo = true;
      }, (err) => {
        console.log("erro lista países " + err);
      });

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
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
      // metodo que retira acentos
      nomeMinusculoPais = nomeMinusculoPais.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      searchMinusculo = searchMinusculo.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      if (nomeMinusculoPais === searchMinusculo) {
         this.paisesService.recebePaisSelecionado(pais);
         this.pais = pais;
         this.searchEncontrado = searchMinusculo;
      }
    }
  }

  pesquisarPais() {
    if (this.searchEncontrado) {
      this.avisoDigitarPais = false;
      this.router.navigateByUrl('/pagina-inicial');
      setTimeout(() => {
        this.router.navigateByUrl('/informacoes-pais');
      });
    } else {
      this.avisoDigitarPais = true;
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
