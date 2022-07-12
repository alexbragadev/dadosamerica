import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPaises } from 'src/app/model/paises.model';
import { PaisesService } from 'src/app/paises.service';
import { InformacoesPaisComponent } from '../informacoes-pais/informacoes-pais.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  paises: IPaises[] = [];
  showInfo: boolean =  false;

  getPaisesSubscription?: Subscription;

  page: number = 1;

  constructor(private paisesService: PaisesService, private router: Router) {
    
  }

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

  selecionaPais(pais: IPaises){
    this.paisesService.recebePaisSelecionado(pais);
    this.router.navigateByUrl('/informacoes-pais');
  }


}
