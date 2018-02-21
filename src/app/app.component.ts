import { Component, OnInit } from '@angular/core';
import { CollegueService } from './shared/service/collegue.service';
import { AvisService } from './shared/service/avis.service';
import { CommentaireService } from './shared/service/commentaire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CollegueService,AvisService,CommentaireService]
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit() {
  }
}
