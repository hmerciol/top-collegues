import { Component } from '@angular/core';
import { VueAbstraite } from '../shared/domain/vue-abstraite';
import { CollegueService } from '../shared/service/collegue.service';
import { AvisService } from '../shared/service/avis.service';

@Component({
  selector: 'app-vue-classique',
  templateUrl: './vue-classique.component.html',
  styleUrls: ['./vue-classique.component.css']
})
export class VueClassiqueComponent extends VueAbstraite {

  constructor(colService:CollegueService,public voteService:AvisService){
      super(colService,voteService)
  }

}
