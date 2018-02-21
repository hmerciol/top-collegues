import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';


@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() active:boolean;
  @Input() collegue:Collegue;
  @Output() supp:EventEmitter<Collegue> = new EventEmitter<Collegue>();
  @Output() aimer:EventEmitter<Collegue> = new EventEmitter<Collegue>();
  @Output() hair:EventEmitter<Collegue> = new EventEmitter<Collegue>();

  constructor() { }

  jaime() {
    this.aimer.emit(this.collegue);
  }
  jedeteste() {
    this.hair.emit(this.collegue);
  }
  jesupprime() {
    this.supp.emit(this.collegue);
  }

  ngOnInit() {
  }

}
