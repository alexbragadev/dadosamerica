import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ConsuladoComponent } from './consulado.component';

@NgModule({
  declarations: [
    ConsuladoComponent
  ],
  exports: [
    ConsuladoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class ConsuladoModule { }
