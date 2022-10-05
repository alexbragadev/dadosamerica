import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
