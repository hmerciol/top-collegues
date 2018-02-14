import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue;

  constructor() { }

  jaime() {
    this.collegue.score += 10;
  }
  jedeteste() {
    this.collegue.score -= 5;
  }

  ngOnInit() {
  }

}
