import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SouscripteurComponent } from './souscripteur/souscripteur.component';
import { AddSouscripteurComponent } from './souscripteur/add-souscripteur/add-souscripteur.component';
import { UpdateSouscripteurComponent } from './souscripteur/update-souscripteur/update-souscripteur.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SouscripteurComponent,
    AddSouscripteurComponent,
    UpdateSouscripteurComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
