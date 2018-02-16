import { Component } from '@angular/core';
import { VueAbstraite } from '../shared/domain/vue-abstraite';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-vue-carrousel',
  templateUrl: './vue-carrousel.component.html',
  styleUrls: ['./vue-carrousel.component.css']
})
export class VueCarrouselComponent extends VueAbstraite {

  constructor(colService:CollegueService){
      super(colService)
  }

}
