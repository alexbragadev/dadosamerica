import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InformacoesPaisModule } from './templates/informacoes-pais/informacoes-pais.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { SearchModule } from './components/search/search.module';
import { AppRoutingModule } from './app-routing.module';
import { PerfilPaisesModule } from './templates/perfil-paises/perfil-paises.module';
import { NgxMaskModule } from 'ngx-mask';
import { DadosGeraisComponent } from './templates/dados-gerais/dados-gerais.component';
import { NoticiasModule } from './templates/noticias/noticias.module';
import { LinguasComponent } from './templates/linguas/linguas.component';
import { EmbaixadasModule } from './templates/embaixadas/embaixadas.module';
import { ConsuladoComponent } from './templates/consulado/consulado.component';
import { ConsuladoModule } from './templates/consulado/consulado.module';

@NgModule({
  declarations: [
    AppComponent,
    DadosGeraisComponent,
    LinguasComponent
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
    EmbaixadasModule,
    ConsuladoModule,
    SearchModule,
    PerfilPaisesModule,
    NoticiasModule,
    AppRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
