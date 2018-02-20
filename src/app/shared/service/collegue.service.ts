import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollegueService {

  constructor(private http:HttpClient) { }

  listerCollegues():Observable<Collegue[]> {
    return this.http.get<Collegue[]>('http://localhost:8080/collegues');
  }

  trouverUnCollegue(pseudo:string):Observable<Collegue> {
    return this.http.get<Collegue>(`http://localhost:8080/collegues/${pseudo}`);
  }

  sauvegarder(newCollegue:Collegue):Observable<Collegue> {
    return this.http.post<Collegue>('http://localhost:8080/collegues',newCollegue);
  }

  supprimerUnCollegue(pseudo:string):Observable<Collegue> {
    return this.http.delete<Collegue>(`http://localhost:8080/collegues/${pseudo}`);
  }

  aimerUnCollegue(pseudo:string):Observable<Collegue> {
    return this.http.patch<Collegue>(`http://localhost:8080/collegues/${pseudo}`,{ "action" : "aimer" });
  }

  detesterUnCollegue(pseudo:string):Observable<Collegue> {
    return this.http.patch<Collegue>(`http://localhost:8080/collegues/${pseudo}`,{ "action" : "detester" });
  }

}
