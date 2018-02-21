import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Commentaire } from '../shared/domain/commentaire';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CollegueService } from '../shared/service/collegue.service';
import { CommentaireService } from '../shared/service/commentaire.service';


@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() active:boolean;
  @Input() collegue:Collegue;
  @Output() supp:EventEmitter<Collegue> = new EventEmitter<Collegue>();
  commentaire:Commentaire;

  constructor(private modalService: NgbModal,public colService:CollegueService,public commService:CommentaireService) { }

  jaime() {
    this.colService.aimerUnCollegue(this.collegue);
  }
  jedeteste() {
    this.colService.detesterUnCollegue(this.collegue);
  }
  jesupprime() {
    this.colService.supprimerUnCollegue(this.collegue);
    this.supp.emit(this.collegue);
  }

  jecommente(content) {
    this.commentaire = new Commentaire(-1,this.collegue,'');
    this.modalService.open(content).result.then(() => {
      this.commService.ajouterCommentaire(this.commentaire);
    },() => {});
  }

  ngOnInit() {
  }

}
