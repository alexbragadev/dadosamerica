import { Component, OnInit } from '@angular/core';
import { IPaises } from 'src/app/model/paises.model';
import { PaisesService } from 'src/app/paises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: IPaises[] = [];
  collection = [];
  items: number = 0;

  data: Array<any> = [];
  totalRecords: Number = 1;
  totalRecordsPage: string = '';
  page: number = 1;
  maxSize: number = 5;

  constructor(private paisesService: PaisesService) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.paises = this.paisesService.getPaises();
    this.totalRecords = this.paises.length;
    this.totalRecordsPage = this.totalRecords.toString();
  }


}
