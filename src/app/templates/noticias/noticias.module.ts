import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaModule } from './noticia/noticia.module';
import { NoticiasComponent } from './noticias.component';

@NgModule({
  declarations: [
    NoticiasComponent
  ],
  exports: [
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    NoticiaModule
  ],
  providers: [],
  bootstrap: []
})
export class NoticiasModule { }
