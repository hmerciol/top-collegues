import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { BouttonsCollegue, Status } from '../shared/domain/bouttons-collegue';
import { Router } from '@angular/router';
import { AvisService } from '../shared/service/avis.service';

@Component({
  selector: 'app-vue-detail',
  templateUrl: './vue-detail.component.html',
  styleUrls: ['./vue-detail.component.css']
})
export class VueDetailComponent extends BouttonsCollegue {

  constructor(private router: Router, private route: ActivatedRoute, colService:CollegueService,public voteService:AvisService) {
    super(colService,voteService)
    route.params.subscribe(params => {
      colService.trouverUnCollegue(params['pseudo'])
      .subscribe(collegue => this.tmpCollegue = collegue)
    });
  }

  del(collegue:Collegue){
    if(this.tmpCollegue.pseudo == collegue.pseudo){
      this.router.navigate(['/classiqe']);
    }
  }

}
