import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CollegueService]
})
export class AppComponent implements OnInit {
  collegues:Collegue[];
  tmpCollegue:Collegue;
  added:boolean;
  wrong:boolean;
  deleted:boolean;

  constructor(private colService:CollegueService){}

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    if(pseudo.value == ''){
      this.wrong=true;
      this.added=false;
      this.deleted=false;
    }else{
      this.colService.sauvegarder(new Collegue(pseudo.value,imageUrl.value,0))
      .then(newCol => {
        this.tmpCollegue = newCol;
        this.colService.listerCollegues()
        .then(data => this.collegues = data);
      });
      pseudo.value='';
      imageUrl.value='';
      this.added=true;
      this.wrong=false;
      this.deleted=false;
    }
    return false; // pour éviter le rechargement de la page
  }

  del(pseudo:string) {
    this.colService.supprimerUnCollegue(pseudo)
    .then(pastCol => {
      this.tmpCollegue = pastCol;
      this.colService.listerCollegues()
      .then(data => this.collegues = data);
      this.deleted=true;
      this.added=false;
      this.wrong=false;
    })
  }

  ngOnInit() {
    this.colService.listerCollegues()
    .then(data => this.collegues = data);
  }
}
