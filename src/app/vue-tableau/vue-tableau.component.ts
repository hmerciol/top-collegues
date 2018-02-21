import { Component } from '@angular/core';
import { VueAbstraite } from '../shared/domain/vue-abstraite';
import { CollegueService } from '../shared/service/collegue.service';
import { AvisService } from '../shared/service/avis.service';

@Component({
  selector: 'app-vue-tableau',
  templateUrl: './vue-tableau.component.html',
  styleUrls: ['./vue-tableau.component.css']
})
export class VueTableauComponent extends VueAbstraite {

  constructor(colService:CollegueService,public voteService:AvisService){
      super(colService,voteService)
  }

}
