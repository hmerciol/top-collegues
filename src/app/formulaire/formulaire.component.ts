import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '../shared/domain/bouttons-collegue'
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  @Input() status:Status;
  @Input() tmpCollegue:Collegue;
  @Output() ajout:EventEmitter<[HTMLInputElement,HTMLInputElement]> = new EventEmitter<[HTMLInputElement,HTMLInputElement]>();

  constructor() { }

  ajouter(pseudo:HTMLInputElement, imageUrl: HTMLInputElement){
    if(imageUrl.value == ''){
      imageUrl.value = "assets/images/avatar.jpg";
    }
    this.ajout.emit([pseudo,imageUrl]);
    pseudo.value='';
    imageUrl.value='';
  }

  isAdded(){
    return this.status == Status.added;
  }
  isWrong(){
    return this.status == Status.wrong;
  }
  isDeleted(){
    return this.status == Status.deleted;
  }

  ngOnInit() {
  }

}
