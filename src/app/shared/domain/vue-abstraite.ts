import { OnInit, Input } from '@angular/core';
import { Collegue } from './collegue';
import { CollegueService } from '../service/collegue.service';

export enum Status {
  ok,
  added,
  wrong,
  deleted,
}

export class VueAbstraite implements OnInit {

  @Input() collegues:Collegue[];
  tmpCollegue:Collegue;
  status:Status = Status.ok;

  constructor(private colService:CollegueService){}

  add(newInput:[HTMLInputElement,HTMLInputElement]) {
    if(newInput["0"].value == ''){
      this.status=Status.wrong;
    }else{
      this.colService.sauvegarder(new Collegue(newInput["0"].value,newInput["1"].value,0))
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
    .then(collegue => {
      this.collegues
      .find(col => col.pseudo == collegue.pseudo)
      .score = collegue.score;
      this.sortList();
    });
    this.status=Status.ok;
  }

  hate(pseudo:string) {
    this.colService.detesterUnCollegue(pseudo)
    .then(collegue => {
      this.collegues
      .find(col => col.pseudo == collegue.pseudo)
      .score = collegue.score;
      this.sortList();
    });
    this.status=Status.ok;
  }

  sortList(){
    this.collegues = this.collegues
    .sort((col1, col2) => col2.score-col1.score);
  }

  ngOnInit() {
    this.colService.listerCollegues()
    .then(collegues => {this.collegues = collegues;
      this.sortList();});
  }
}