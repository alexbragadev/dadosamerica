import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PerfilPaisesComponent } from './perfil-paises.component';

@NgModule({
  declarations: [
    PerfilPaisesComponent
  ],
  exports: [
    PerfilPaisesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: []
})
export class PerfilPaisesModule { }