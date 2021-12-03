import { Injectable } from '@angular/core';

import { Souscripteur } from '../models/souscripteur.model';

@Injectable({
  providedIn: 'root'
})
export class SouscripteurService {

  souscripteurs : Souscripteur[];
  souscripteur : Souscripteur;

  constructor() { 
    this.souscripteurs = [
        {idSouscripteur : 1, nomSouscripteur : "Diallo", telSouscripteur : 11111, dateNaisSouscripteur : new Date(), commentaireSouscripteur : "RAS"}
    ];
  }

  listeSouscripteur():Souscripteur[]{
    return this.souscripteurs;
  }

  ajouterSouscripteur(souscripteur:Souscripteur){
    this.souscripteurs.push(souscripteur);
  }

  consulterSouscripteur(id:number):Souscripteur
  {
    this.souscripteur = this.souscripteurs.find(e => e.idSouscripteur == id);
    return this.souscripteur;
  }

  supprimerSouscripteurService(souscripteur : Souscripteur)
  {
    const indexSouscripteur = this.souscripteurs.indexOf(souscripteur,0);
    if (indexSouscripteur > -1 ) {this.souscripteurs.splice(indexSouscripteur,1);} 
  }

  updateSouscripteurService(souscripteur : Souscripteur)
  {
    this.supprimerSouscripteurService(souscripteur);
    this.ajouterSouscripteur(souscripteur);
  }
}

