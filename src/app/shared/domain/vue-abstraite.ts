import { OnInit, Input } from '@angular/core';
import { Collegue } from './collegue';
import { BouttonsCollegue, Status } from './bouttons-collegue';
import { CollegueService } from '../service/collegue.service';
import { Observable } from 'rxjs/Rx';

export class VueAbstraite extends BouttonsCollegue implements OnInit {

  limite:number;
  filtre:string = "";

  constructor(colService:CollegueService){
    super(colService);
  }

  add(newInput:[HTMLInputElement,HTMLInputElement]) {
    if(newInput["0"].value == ''){
      this.status=Status.wrong;
    }else{
      this.colService.sauvegarder(new Collegue(newInput["0"].value,newInput["1"].value,0))
      .subscribe(
        newCol => {
          this.tmpCollegue = newCol;
          this.status=Status.added;
        },error => {
          this.status=Status.wrong;
        });
    }
    return false; // pour éviter le rechargement de la page
  }

  sortList(){
    this.collegues = this.collegues
    .sort((col1, col2) => col2.score-col1.score);
  }

  limiter(limite:number){
    if(limite == 0){
      this.limite = this.collegues.length;
    }else{
      this.limite = limite;
    }
  }

  filtrer(filtre:string){
    if(filtre){
      this.filtre = filtre;
    }else{
      this.filtre = "";
    }
  }


  ngOnInit() {
    this.updateList();
    this.colService.collegueUpdateObsvervable.subscribe(() =>{
      setTimeout(()=>  {
        this.updateList();
        }, 500);
    });

    Observable.fromEvent(document,'click').subscribe(() =>{
      setTimeout(()=>  this.sortList(), 500);
    });
  }
}