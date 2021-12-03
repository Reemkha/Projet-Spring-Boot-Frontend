import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SouscripteurComponent} from './souscripteur/souscripteur.component';
import {AddSouscripteurComponent} from './souscripteur/add-souscripteur/add-souscripteur.component';
import {UpdateSouscripteurComponent} from './souscripteur/update-souscripteur/update-souscripteur.component';

import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path : "souscripteur", component: SouscripteurComponent},
  {path : "add-souscripteur", component: AddSouscripteurComponent},
  {path : "update-souscripteur/:id", component: UpdateSouscripteurComponent},
  {path : "login", component:LoginComponent},
  {path : "", redirectTo:"login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
