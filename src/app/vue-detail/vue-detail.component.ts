import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { BouttonsCollegue, Status } from '../shared/domain/bouttons-collegue';
import { Router } from '@angular/router';
import { AvisService } from '../shared/service/avis.service';
import { Commentaire } from '../shared/domain/commentaire';
import { CommentaireService } from '../shared/service/commentaire.service';

@Component({
  selector: 'app-vue-detail',
  templateUrl: './vue-detail.component.html',
  styleUrls: ['./vue-detail.component.css']
})
export class VueDetailComponent extends BouttonsCollegue {

  comments:Commentaire[];

  constructor(private router: Router, private route: ActivatedRoute, colService:CollegueService,public voteService:AvisService,public commService:CommentaireService) {
    super(colService,voteService)
    route.params.subscribe(params => {
      colService.trouverUnCollegue(params['pseudo'])
      .subscribe(collegue => {
        this.tmpCollegue = collegue;
        commService.listerCommentaire(collegue)
        .subscribe(result => {
          this.comments = result;
          this.comments.forEach(comm => console.log(comm.comment))
        })
      })
    });
  }

  del(collegue:Collegue){
    if(this.tmpCollegue.pseudo == collegue.pseudo){
      this.router.navigate(['/classiqe']);
    }
  }

}
