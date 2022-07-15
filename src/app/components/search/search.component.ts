import { Component, OnDestroy, OnInit } from '@angular/core';
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
  showInfo: boolean =  false;
  searchItem: string = "";

  getPaisesSubscription?: Subscription;

  constructor(private paisesService: PaisesService, private eventService: EventService) { }

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
  }

  searchPaises(searchItem: string) {
    for (let pais of this.paises) {
      pais.nome = pais.nome.toLocaleLowerCase();
      searchItem = searchItem.toLocaleLowerCase();
      if (pais.nome === searchItem) {
        console.log(searchItem);
      }
    }
    // this.eventService.searchItems(searchItem, this.paises).subscribe
    // (items => {
    //   this.paises = items;
    // });
  }

}
