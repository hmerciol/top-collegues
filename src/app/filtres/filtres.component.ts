import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.css']
})
export class FiltresComponent implements OnInit {

  @Output() limite:EventEmitter<number> = new EventEmitter<number>();
  @Output() filtre:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  limiter(lim:HTMLInputElement){
    this.limite.emit(parseInt(lim.value));
  }

  filtrer(nom:HTMLInputElement){
    this.filtre.emit(nom.value);
  }

  ngOnInit() {
  }

}
