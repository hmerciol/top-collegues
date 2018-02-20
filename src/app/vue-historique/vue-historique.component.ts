import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Vote } from '../shared/domain/avis';

@Component({
  selector: 'app-vue-historique',
  templateUrl: './vue-historique.component.html',
  styleUrls: ['./vue-historique.component.css']
})
export class VueHistoriqueComponent implements OnInit {

  @Input() historique:Vote[];
  @Output() suppHisto:EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor() { }

  supprimerHistorique(vote:Vote){
    this.suppHisto.emit(vote);
  }

  ngOnInit() {
  }

}
