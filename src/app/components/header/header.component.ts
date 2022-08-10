import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listaMenu: any;

  constructor() { }

  ngOnInit(): void {
    this.listaMenu = $('.hover'); 
  }

  listaMenuCheck(e?: any) {
    console.log(e);
  }

  removerFoco() {
    $('#pre-hover').css({color: '#fff', 'border-bottom': '5px solid #343a40'});
  }

  inserirFoco() {
    $('#pre-hover').css({color: '#FF914D', 'border-bottom': '5px solid #FF914D'});
  }


  // color: #fff;
  //   font-weight: 500;
  //   margin: 1em;
  //   border-bottom: 5px solid #343a40;

}
