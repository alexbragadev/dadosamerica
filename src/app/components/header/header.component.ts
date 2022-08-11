import { NgStyle } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listaMenu: any;
  styleLi: string[] = [];
  styleBorder: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listaMenu = $('.hover'); 
    this.styleLi[0] = '#FF914D';
    this.styleBorder[0] = '5px solid #FF914D';
  }

  listaMenuCheck(e?: any) {
    let cont = 0;

    for (let item of this.listaMenu) {
      if (e.target.innerText === item.innerText) {
        this.styleLi[cont] = '#FF914D';
        this.styleBorder[cont] = '5px solid #FF914D';
      } else {
        this.styleLi[cont] = '#fff';
        this.styleBorder[cont] = '5px solid #343a40';
      }
      cont += 1;
    }

  }
  
}
