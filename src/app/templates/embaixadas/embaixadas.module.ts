import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbaixadasComponent } from './embaixadas.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    EmbaixadasComponent
  ],
  exports: [
    EmbaixadasComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class EmbaixadasModule { }
