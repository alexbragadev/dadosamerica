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
  
  page: number = 1;

  constructor(private paisesService: PaisesService) {
    
  }

  ngOnInit(): void {
    this.paisesService.getAllPaises().subscribe((data: IPaises[]) => {
      this.paises = data;
    });
  }


}
