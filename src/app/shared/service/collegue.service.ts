import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Status } from '../domain/bouttons-collegue';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Vote } from '../domain/avis';

@Injectable()
export class CollegueService {

  private collegueUpdateSubject: Subject<[Collegue,Status]> = new Subject();

  get collegueUpdateObsvervable(): Observable<[Collegue,Status]> {
    return this.collegueUpdateSubject.asObservable();
  }

  constructor(private http:HttpClient) { }

  listerCollegues():Observable<Collegue[]> {
    return this.http.get<Collegue[]>('http://localhost:8080/collegues');
  }

  trouverUnCollegue(pseudo:string):Observable<Collegue> {
    return this.http.get<Collegue>(`http://localhost:8080/collegues/${pseudo}`);
  }

  sauvegarder(newCollegue:Collegue):void {
    this.http.post<Collegue>('http://localhost:8080/collegues',newCollegue)
      .subscribe(() => {
        this.collegueUpdateSubject.next([newCollegue,Status.added])
      });
  }

  supprimerUnCollegue(pastCollegue:Collegue):void {
    this.http.delete<Collegue>(`http://localhost:8080/collegues/${pastCollegue.pseudo}`)
      .subscribe(() => {
        this.collegueUpdateSubject.next([pastCollegue,Status.deleted]);
      });
  }

  aimerUnCollegue(collegue:Collegue):void {
    this.http.patch<Collegue>(`http://localhost:8080/collegues/${collegue.pseudo}`,{ "action" : "aimer" })
      .subscribe(upCollegue => {
        this.collegueUpdateSubject.next([upCollegue,Status.liked]);
      });
  }

  detesterUnCollegue(collegue:Collegue):void {
    this.http.patch<Collegue>(`http://localhost:8080/collegues/${collegue.pseudo}`,{ "action" : "detester" })
    .subscribe(upCollegue => {
      this.collegueUpdateSubject.next([upCollegue,Status.disliked]);
    });
  }

  historiqueAvis(voteId:string):Observable<Vote[]> {
    return this.http.get<Vote[]>(`http://localhost:8080/votes?since=${voteId}`);
  }

  supprimerAvis(voteId:number):Observable<Vote> {
    return this.http.delete<Vote>(`http://localhost:8080/votes?since=${voteId}`)
  }

}
