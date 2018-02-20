import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { BouttonsCollegue, Status } from '../shared/domain/bouttons-collegue';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vue-detail',
  templateUrl: './vue-detail.component.html',
  styleUrls: ['./vue-detail.component.css']
})
export class VueDetailComponent extends BouttonsCollegue implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, colService:CollegueService) {
    super(colService)
    route.params.subscribe(params => {
      colService.trouverUnCollegue(params['pseudo'])
      .subscribe(collegue => this.tmpCollegue = collegue)
    });
  }

  del(collegue:Collegue){
    super.del(collegue);
    this.router.navigate(['/classiqe']) 
  }

  ngOnInit() {
  }

}
