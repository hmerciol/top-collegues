import { Injectable } from '@angular/core';
import { Vote } from '../domain/avis';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AvisService {

  constructor(private http:HttpClient) { }

  historiqueAvis(voteId:string):Observable<Vote[]> {
    return this.http.get<Vote[]>(`http://localhost:8080/votes?since=${voteId}`);
  }

  supprimerAvis(voteId:number):Observable<Vote> {
    return this.http.delete<Vote>(`http://localhost:8080/votes?since=${voteId}`);
  }

}
