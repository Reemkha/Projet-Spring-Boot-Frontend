import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Souscripteur } from '../../models/souscripteur.model';
import { SouscripteurService } from '../../services/souscripteur.service';

@Component({
  selector: 'app-update-souscripteur',
  templateUrl: './update-souscripteur.component.html',
  styleUrls: ['./update-souscripteur.component.css']
})
export class UpdateSouscripteurComponent implements OnInit {
  currentSouscripteur = new Souscripteur();
  constructor(private activatedRoute : ActivatedRoute,
              private router : Router,
              private souscripteurService : SouscripteurService) { }

  ngOnInit(): void {
    this.currentSouscripteur = this.souscripteurService.consulterSouscripteur(this.activatedRoute.snapshot.params.id);
}
  updateSouscripteur(){

    this.souscripteurService.updateSouscripteurService(this.currentSouscripteur);
    this.router.navigate(["souscripteur"]);

  }

}
