import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformacoesPaisComponent } from './templates/informacoes-pais/informacoes-pais.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { EconomiaComponent } from './templates/economia/economia.component';
import { SaudeComponent } from './templates/saude/saude.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'informacoes-pais', component: InformacoesPaisComponent},
  {path: 'economia', component: EconomiaComponent},
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
