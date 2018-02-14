import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collegues:Collegue[];
  added:boolean;
  title = 'app';

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    this.collegues.push(new Collegue(pseudo.value,imageUrl.value,0));
    pseudo.value='';
    imageUrl.value='';
    this.added=true;
    return false; // pour éviter le rechargement de la page
  }

  ngOnInit() {
    this.collegues = new Array;
    this.collegues.push(new Collegue('Jean','TODO',95));
    this.collegues.push(new Collegue('Jacques','TODO',75));
    this.collegues.push(new Collegue('Josseline','TODO',70));
    this.collegues.push(new Collegue('Jérémi','TODO',90));
    this.collegues.push(new Collegue('Justine','TODO',100));
  }
}
