import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { InformacoesPaisComponent } from './informacoes-pais.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InformacoesPaisComponent
  ],
  exports: [
    InformacoesPaisComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    HeaderModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: []
})
export class InformacoesPaisModule { }