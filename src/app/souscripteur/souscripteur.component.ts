import { Component, OnInit } from '@angular/core';

import { Souscripteur } from '../models/souscripteur.model';
import { SouscripteurService } from '../services/souscripteur.service';

@Component({
  selector: 'app-souscripteur',
  templateUrl: './souscripteur.component.html',
})
export class SouscripteurComponent implements OnInit {

  souscripteurs : Souscripteur[];
  constructor(private souscripteurService : SouscripteurService) {
    this.souscripteurs = souscripteurService.listeSouscripteur();

   }

  ngOnInit(): void {
  }

  supprimerSouscripteur(souscripteur : Souscripteur)
  {
    let demandeConfirmation = confirm("Voulez vous supprimer cet souscripteur?");
    if (demandeConfirmation){
    this.souscripteurService.supprimerSouscripteurService(souscripteur);
    }
  }

}

