import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Vote } from '../shared/domain/avis';

@Component({
  selector: 'app-vue-historique',
  templateUrl: './vue-historique.component.html',
  styleUrls: ['./vue-historique.component.css']
})
export class VueHistoriqueComponent implements OnInit {

  @Input() historique:Vote[];

  constructor() { }

  ngOnInit() {
  }

}
