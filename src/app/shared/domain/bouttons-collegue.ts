import { OnInit, Input } from '@angular/core';
import { CollegueService } from '../service/collegue.service';
import { Collegue } from './collegue';
import { Observable } from 'rxjs';
import { Vote } from './avis';

export enum Status {
  ok,
  added,
  wrong,
  deleted,
  liked,
  disliked,
}

export class BouttonsCollegue implements OnInit {

  //liste des collègues
  @Input() collegues:Collegue[];
  //collègue à afficher dans l'alerte
  tmpCollegue:Collegue;
  //résultat dernière action (pour l'alerte)
  status:Status = Status.ok;
  //état de la connexion
  onLine:boolean;
  //historique des avis
  historique:Vote[];

  constructor(public colService:CollegueService){}

  //supprimer un collègue
  del(collegue:Collegue) {
    this.colService.supprimerUnCollegue(collegue);
  }

  //aimer un collègue
  like(collegue:Collegue) {
    this.colService.aimerUnCollegue(collegue);
  }

  //détester un collègue
  hate(collegue:Collegue) {
    this.colService.detesterUnCollegue(collegue);
  }

  //mettre à jour la liste
  updateList(){
    this.colService.listerCollegues()
    .subscribe(
      collegues => {
        this.collegues = collegues;
        this.sortList();
        //en ligne
        this.onLine = true;
      },
      error => {
        //hors ligne
        this.onLine = false;
      });
  }

  //mettre à jour l'historique
  updateHistory(){
    this.colService.historiqueAvis('')
    .subscribe(
      avis => {
        if(avis){
          this.historique = avis.reverse();
        }else{
          this.historique = new Array();
        }});
  }

  //supprimer un élément de l'historique
  deleteHistory(vote:Vote){
    this.colService.supprimerAvis(vote.id).subscribe(() => this.updateHistory());
  }

  //abstraite
  sortList(){
  }
  
  ngOnInit() {
    //connexion au site
    this.updateList();
    this.updateHistory();

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
        this.updateHistory();
      }
      this.sortList();
    });

    //vérifie que le site est en ligne et met la liste à jour
    Observable.interval(5000)
    .subscribe(() => {
      this.updateList();
    });
  }

}