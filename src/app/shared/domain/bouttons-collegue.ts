import { Input } from '@angular/core';
import { CollegueService } from '../service/collegue.service';
import { Collegue } from './collegue';

export enum Status {
  ok,
  added,
  wrong,
  deleted,
}

export class BouttonsCollegue {

  @Input() collegues:Collegue[];    
  tmpCollegue:Collegue;
  status:Status = Status.ok;

  constructor(public colService:CollegueService){}

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
      this.tmpCollegue = collegue;
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
      this.tmpCollegue = collegue;
      this.collegues
      .find(col => col.pseudo == collegue.pseudo)
      .score = collegue.score;
      this.sortList();
    });
    this.status=Status.ok;
  }

  sortList(){
  }

}