import { Component, OnInit } from '@angular/core';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CollegueService]
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit() {
  }
}
