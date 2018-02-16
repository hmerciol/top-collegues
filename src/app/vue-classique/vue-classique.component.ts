import { Component } from '@angular/core';
import { VueAbstraite } from '../shared/domain/vue-abstraite';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-vue-classique',
  templateUrl: './vue-classique.component.html',
  styleUrls: ['./vue-classique.component.css']
})
export class VueClassiqueComponent extends VueAbstraite {

  constructor(colService:CollegueService){
      super(colService)
  }

}
