import { OnInit, Input } from '@angular/core';
import { Collegue } from './collegue';
import { BouttonsCollegue, Status } from './bouttons-collegue';
import { CollegueService } from '../service/collegue.service';

export class VueAbstraite extends BouttonsCollegue implements OnInit {

  limite:number;

  constructor(colService:CollegueService){
    super(colService);
  }

  add(newInput:[HTMLInputElement,HTMLInputElement]) {
    if(newInput["0"].value == ''){
      this.status=Status.wrong;
    }else{
      this.colService.sauvegarder(new Collegue(newInput["0"].value,newInput["1"].value,0))
      .then(newCol => {
        this.tmpCollegue = newCol;
        this.colService.listerCollegues()
        .then(collegues => {
          this.collegues = collegues;
          this.sortList();});
        this.status=Status.added;
      })
      .catch(() => {
        this.status=Status.wrong;
      });
    }
    return false; // pour éviter le rechargement de la page
  }

  sortList(){
    this.collegues = this.collegues
    .sort((col1, col2) => col2.score-col1.score);
  }

  limiter(limite:HTMLInputElement){
    if(parseInt(limite.value) == 0){
      this.limite = this.collegues.length;
    }else{
      this.limite = parseInt(limite.value);
    }
  }


  ngOnInit() {
    this.colService.listerCollegues()
    .then(collegues => {this.collegues = collegues;
      this.sortList();});
  }
}