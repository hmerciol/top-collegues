import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';


@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue;
  @Output() supp:EventEmitter<string> = new EventEmitter<string>();
  @Output() aimer:EventEmitter<string> = new EventEmitter<string>();
  @Output() hair:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  jaime() {
    this.collegue.score += 10;
    this.aimer.emit(this.collegue.pseudo);
  }
  jedeteste() {
    this.collegue.score -= 5;
    this.hair.emit(this.collegue.pseudo);
  }
  jesupprime() {
    this.supp.emit(this.collegue.pseudo);
  }

  ngOnInit() {
  }

}
