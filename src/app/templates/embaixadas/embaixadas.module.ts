import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbaixadasComponent } from './embaixadas.component';

@NgModule({
  declarations: [
    EmbaixadasComponent
  ],
  exports: [
    EmbaixadasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmbaixadasModule { }
