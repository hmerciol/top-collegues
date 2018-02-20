import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

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

  ngOnInit() {
  }

}
