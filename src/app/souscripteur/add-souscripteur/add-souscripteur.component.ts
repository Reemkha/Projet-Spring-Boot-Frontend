import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Souscripteur } from '../../models/souscripteur.model';
import { SouscripteurService } from '../../services/souscripteur.service';

@Component({
  selector: 'app-add-souscripteur',
  templateUrl: './add-souscripteur.component.html',
})
export class AddSouscripteurComponent implements OnInit {

  newSouscripteur = new Souscripteur();

  constructor(private router : Router,
              private souscripteurService : SouscripteurService) { }


  addSouscripteur(){
    this.souscripteurService.ajouterSouscripteur(this.newSouscripteur)
    this.router.navigate(["souscripteur"]);
    };

  ngOnInit(): void {
  }

}
