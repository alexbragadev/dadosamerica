import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformacoesPaisComponent } from './templates/informacoes-pais/informacoes-pais.component';
import { AppComponent } from './app.component';
import { PerfilPaisesComponent } from './templates/perfil-paises/perfil-paises.component';
import { DadosGeraisComponent } from './templates/dados-gerais/dados-gerais.component';
import { SaudeComponent } from './templates/saude/saude.component';
import { NoticiasComponent } from './templates/noticias/noticias.component';


export const routes: Routes = [
  {path: '', component: NoticiasComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'perfis-paises', component: PerfilPaisesComponent},
  {path: 'informacoes-pais', component: InformacoesPaisComponent},
  {path: 'dados-gerais', component: DadosGeraisComponent},
  {path: 'saude', component: SaudeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: 
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
