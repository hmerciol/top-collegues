import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from '../domain/commentaire';
import { Collegue } from '../domain/collegue';

@Injectable()
export class CommentaireService {

  constructor(private http:HttpClient) { }

  listerCommentaire(collegue:Collegue):Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`http://localhost:8080/commentaires/${collegue.pseudo}`);
  }

  ajouterCommentaire(commentaire:Commentaire):void {
    this.http.post<Commentaire>(`http://localhost:8080/commentaires/${commentaire.collegue.pseudo}`,commentaire.comment).subscribe();
  }

  supprimerCommentaire(commentaire:Commentaire):void {
    this.http.delete<Commentaire>(`http://localhost:8080/commentaires/${commentaire.id}`).subscribe();
  }

}
