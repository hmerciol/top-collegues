import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';

enum Status {
  ok,
  added,
  wrong,
  deleted,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CollegueService]
})
export class AppComponent implements OnInit {
  collegues:Collegue[];
  tmpCollegue:Collegue;
  status:Status = Status.ok;

  constructor(private colService:CollegueService){}

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    if(pseudo.value == ''){
      this.status=Status.wrong;
    }else{
      this.colService.sauvegarder(new Collegue(pseudo.value,imageUrl.value,0))
      .then(newCol => {
        this.tmpCollegue = newCol;
        this.colService.listerCollegues()
        .then(collegues => {this.collegues = collegues;
          this.sortList();});
        this.status=Status.added;
      })
      .catch(() => {
        this.status=Status.wrong;
      });
    }
    pseudo.value='';
    imageUrl.value='';
    return false; // pour éviter le rechargement de la page
  }

  del(pseudo:string) {
    this.colService.supprimerUnCollegue(pseudo)
    .then(pastCol => {
      this.tmpCollegue = pastCol;
      this.colService.listerCollegues()
      .then(collegues => {this.collegues = collegues;
        this.sortList();})
      this.status=Status.deleted;
    })
  }

  like(pseudo:string) {
    this.colService.aimerUnCollegue(pseudo)
    this.sortList();
    this.status=Status.ok;
  }

  hate(pseudo:string) {
    this.colService.detesterUnCollegue(pseudo);
    this.sortList();
    this.status=Status.ok;
  }

  sortList(){
    this.collegues = this.collegues
    .sort((col1, col2) => col2.score-col1.score);
  }

  isAdded(){
    return this.status == Status.added;
  }
  isWrong(){
    return this.status == Status.wrong;
  }
  isDeleted(){
    return this.status == Status.deleted;
  }

  ngOnInit() {
    this.colService.listerCollegues()
    .then(collegues => {this.collegues = collegues;
      this.sortList();});
  }
}
