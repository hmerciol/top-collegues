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
  wrong:boolean;
  title = 'app';

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    if(pseudo.value == ''){
      this.wrong=true;
      this.added=false;
    }else{
      this.collegues.push(new Collegue(pseudo.value,imageUrl.value,0));
      pseudo.value='';
      imageUrl.value='';
      this.added=true;
      this.wrong=false;
    }
    return false; // pour éviter le rechargement de la page
  }

  ngOnInit() {
    this.collegues = new Array;
    this.collegues.push(new Collegue('Jean','',95));
    this.collegues.push(new Collegue('Jacques','',75));
    this.collegues.push(new Collegue('Josseline','',70));
    this.collegues.push(new Collegue('Jérémi','',90));
    this.collegues.push(new Collegue('Justine','',100));
  }
}
