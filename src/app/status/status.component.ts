import { Component, OnInit, Input } from '@angular/core';
import { Status } from '../shared/domain/bouttons-collegue'
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input() status:Status;
  @Input() tmpCollegue:Collegue;

  constructor() { }

  isAdded(){
    return this.status == Status.added;
  }
  isWrong(){
    return this.status == Status.wrong;
  }
  isDeleted(){
    return this.status == Status.deleted;
  }
  isLiked(){
    return this.status == Status.liked;
  }
  isDisliked(){
    return this.status == Status.disliked;
  }
  isIdle(){
    return this.status == Status.ok;
  }

  ngOnInit() {
  }

}
