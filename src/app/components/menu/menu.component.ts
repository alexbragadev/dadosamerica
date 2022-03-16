import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('nav_menu_mobile') nav_menu_mobile: any;
  display: string = '';

  constructor() { }

  abrirMenu() {
    this.display = "block";
  }

  fecharMenu() {
    this.display = "none";
  }

  ngOnInit(): void {
    this.display = "none";
  }

}
