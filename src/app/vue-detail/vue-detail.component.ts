import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { BouttonsCollegue, Status } from '../shared/domain/bouttons-collegue';

@Component({
  selector: 'app-vue-detail',
  templateUrl: './vue-detail.component.html',
  styleUrls: ['./vue-detail.component.css']
})
export class VueDetailComponent extends BouttonsCollegue implements OnInit {

  constructor(private route: ActivatedRoute, colService:CollegueService) {
    super(colService)
    route.params.subscribe(params => {
      colService.trouverUnCollegue(params['pseudo'])
      .then(collegue => this.tmpCollegue = collegue)
    });
  }

  ngOnInit() {
  }

}
