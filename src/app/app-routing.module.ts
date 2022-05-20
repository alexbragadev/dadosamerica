import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformacoesPaisComponent } from './templates/informacoes-pais/informacoes-pais.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'informacoes-pais', component: InformacoesPaisComponent}
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
