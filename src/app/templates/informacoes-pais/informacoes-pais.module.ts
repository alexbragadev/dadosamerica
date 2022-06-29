import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { InformacoesPaisComponent } from './informacoes-pais.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    InformacoesPaisComponent
  ],
  exports: [
    InformacoesPaisComponent
  ],
  imports: [
    CurrencyMaskModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    HeaderModule,
    HttpClientJsonpModule,
    MatProgressSpinnerModule,
    NgxMaskModule.forChild()
  ],
  providers: [],
  bootstrap: []
})
export class InformacoesPaisModule { }