import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPaises } from 'src/app/model/paises.model';
import { PaisesService } from 'src/app/paises.service';
import { InformacoesPaisComponent } from '../informacoes-pais/informacoes-pais.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: IPaises[] = [];
  showInfo: boolean =  false;

  page: number = 1;

  constructor(private paisesService: PaisesService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.paisesService.getAllPaises().subscribe((data: IPaises[]) => {
      this.paises = data;
    });
  }

  selecionaPais(pais: IPaises){
    this.paisesService.recebePaisSelecionado(pais);
    this.router.navigateByUrl('/informacoes-pais');
  }


}
