import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './templates/home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InformacoesPaisModule } from './templates/informacoes-pais/informacoes-pais.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { SearchModule } from './components/search/search.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './templates/home/home.module';
import { NgxMaskModule } from 'ngx-mask';
import { EconomiaComponent } from './templates/economia/economia.component';
import { SaudeComponent } from './templates/saude/saude.component';

@NgModule({
  declarations: [
    AppComponent,
    EconomiaComponent,
    SaudeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    InformacoesPaisModule,
    HeaderModule,
    MenuModule,
    SearchModule,
    HomeModule,
    AppRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
