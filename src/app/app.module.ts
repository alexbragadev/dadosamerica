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
import { EmbaixadasModule } from './templates/embaixadas/embaixadas.module';
import { ConsuladoModule } from './templates/consulado/consulado.module';
import { LinguasModule } from './templates/linguas/linguas.module';
import { LiveWorkStudyModule } from './templates/live-work-study/live-work-study.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosGeraisComponent,
    FooterComponent
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
    LinguasModule,
    LiveWorkStudyModule,
    NoticiasModule,
    AppRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
