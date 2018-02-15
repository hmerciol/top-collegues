import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CollegueService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collegues:Collegue[];
  newCollegue:Collegue;
  added:boolean;
  wrong:boolean;

  constructor(private colService:CollegueService){}

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    if(pseudo.value == ''){
      this.wrong=true;
      this.added=false;
    }else{
      this.newCollegue = new Collegue(pseudo.value,imageUrl.value,0);
      this.collegues.push(this.newCollegue);
      pseudo.value='';
      imageUrl.value='';
      this.added=true;
      this.wrong=false;
    }
    return false; // pour éviter le rechargement de la page
  }

  ngOnInit() {
    this.colService.listerCollegues()
    .then(data => this.collegues = data);
  }
}
