import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia.component';

@NgModule({
  declarations: [
    NoticiaComponent
  ],
  exports: [
    NoticiaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NoticiaModule { }
