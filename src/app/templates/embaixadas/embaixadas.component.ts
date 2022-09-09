import { Component, OnInit } from '@angular/core';
import { EmbaixadasService } from 'src/app/embaixadas.service';

@Component({
  selector: 'app-embaixadas',
  templateUrl: './embaixadas.component.html',
  styleUrls: ['./embaixadas.component.css']
})
export class EmbaixadasComponent implements OnInit {

  paisNome?: string;

  constructor(
    private embaixadasService: EmbaixadasService
  ) { }

  ngOnInit(): void {
    this.paisNome = "brasil";
    this.embaixadasService.getEmbaixadasById(this.paisNome).subscribe(data => {
      console.log(data);
    })
  }

}
