import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  city: string;
  position: number;
  price: number;
}

export interface UniversityElement {
  nome: string;
  position: number;
  pais: string;
}

export interface IdhElement {
  position: number;
  city: string;
  idh: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, city: 'Nassau (Bahamas)', price: 209},
  {position: 2, city: 'Bridgetown (Barbados)', price: 158},
  {position: 3, city: 'Montevidéu (Uruguai)', price: 138},
  {position: 4, city: 'Panama City (Panamá)', price: 134},
  {position: 5, city: 'Caracas (Venezuela)', price: 108},
  {position: 6, city: 'Monterrei (México)', price: 105},
  {position: 7, city: 'San Salvador (El Salvador)	', price: 105},
  {position: 8, city: 'São Paulo (Brasil)', price: 104},
  {position: 9, city: 'Georgetown (Guiana)', price: 102},
  {position: 10, city: 'Quito (Equador)', price: 99},
];

const ELEMENT_DATA_IDH: IdhElement[] = [
  {position: 1, city: 'Chile', idh: 0.851},
  {position: 2, city: 'Argentina', idh: 0.845},
  {position: 3, city: 'Uruguai', idh: 0.817},
  {position: 4, city: 'Panamá', idh: 0.815},
  {position: 5, city: 'Barbados', idh: 0.814},
  {position: 6, city: 'Bahamas', idh: 0.814},
  {position: 7, city: 'Costa Rica', idh: 0.81},
  {position: 8, city: 'Trinidade e Tobago', idh: 0.796},
  {position: 9, city: 'Cuba', idh: 0.783},
  {position: 10, city: 'Granada', idh: 0.779},
];

const ELEMENT_DATA_UNIVERSITY: UniversityElement[] = [
  {position: 1, nome: 'Pontifícia Universidade Católica do Chile', pais: "Chile"},
  {position: 2, nome: 'Universidade de São Paulo', pais: "Brasil"},
  {position: 3, nome: 'Universidade Estadual de Campinas', pais: "Brasil"},
  {position: 4, nome: 'Universidade Federal de São Paulo (UNIFESP)', pais: "Brasil"},
  {position: 5, nome: 'Instituto de Tecnologia de Monterrey', pais: "México"},
  {position: 6, nome: 'Universidade Federal de Santa Catarina', pais: "Brasil"},
  {position: 7, nome: 'Universidade do Chile', pais: "Chile"},
  {position: 8, nome: 'Universidade Federal do Rio Grande do Sul', pais: "Brasil"},
  {position: 9, nome: 'Universidade Federal de Minas Gerais', pais: "Brasil"},
  {position: 10, nome: 'Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)', pais: "Brasil"},
];

@Component({
  selector: 'app-live-work-study',
  templateUrl: './live-work-study.component.html',
  styleUrls: ['./live-work-study.component.css']
})
export class LiveWorkStudyComponent implements OnInit {

  displayedColumns: string[] = ['position', 'city', 'price'];
  displayedColumnsIdh: string[] = ['position', 'city', 'idh'];
  universityColumns: string[] = ['position', 'nome', 'pais'];
  dataSource = ELEMENT_DATA;
  dataSourceIdh = ELEMENT_DATA_IDH;
  dataSourceUnivsersity = ELEMENT_DATA_UNIVERSITY;

  constructor() { }

  ngOnInit(): void {
  }

}
