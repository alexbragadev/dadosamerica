import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinguasComponent } from './linguas.component';

@NgModule({
  declarations: [
    LinguasComponent
  ],
  exports: [
    LinguasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LinguasModule { }
