import { OnInit, Input } from '@angular/core';
import { CollegueService } from '../service/collegue.service';
import { Collegue } from './collegue';

export enum Status {
  ok,
  added,
  wrong,
  deleted,
  liked,
  disliked,
}

export class BouttonsCollegue implements OnInit {

  @Input() collegues:Collegue[];    
  tmpCollegue:Collegue;
  status:Status = Status.ok;

  constructor(public colService:CollegueService){}

  del(collegue:Collegue) {
    this.colService.supprimerUnCollegue(collegue);
  }

  like(collegue:Collegue) {
    this.colService.aimerUnCollegue(collegue);
  }

  hate(collegue:Collegue) {
    this.colService.detesterUnCollegue(collegue);
  }

  updateList(){
    this.colService.listerCollegues()
    .subscribe(
      collegues => {
        this.collegues = collegues;
        this.sortList();
      });
  }

  sortList(){
  }
  
  ngOnInit() {
    //connexion au site
    this.updateList();

    //actions (un boutton cliqué)
    this.colService.collegueUpdateObsvervable.subscribe(([collegue,status]) =>{
      this.tmpCollegue = collegue;
      this.status = status;
      //actions nécessitant la mise à jour de la liste (ajout/retrait d'un collègue)
      if(status == Status.added || status == Status.deleted){
        this.updateList();
      //actions nécessitant la mise à jour du score d'un collègue (aimer/détester un collègue)
      }else if(status == Status.liked || status == Status.disliked){
        this.collegues
          .find(col => col.pseudo == collegue.pseudo)
          .score = collegue.score;
      }
      this.sortList();
    });
  }

}