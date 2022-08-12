import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaModule } from './noticia/noticia.module';
import { PaginaInicialComponent } from './pagina-inicial.component';

@NgModule({
  declarations: [
    PaginaInicialComponent
  ],
  exports: [
    PaginaInicialComponent
  ],
  imports: [
    CommonModule,
    NoticiaModule
  ],
  providers: [],
  bootstrap: []
})
export class PaginaInicialModule { }
