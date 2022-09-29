import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveWorkStudyComponent } from './live-work-study.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    LiveWorkStudyComponent
  ],
  exports: [
    LiveWorkStudyComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class LiveWorkStudyModule { }
