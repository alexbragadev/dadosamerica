import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class SearchModule { }