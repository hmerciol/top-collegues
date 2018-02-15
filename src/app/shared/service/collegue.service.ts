import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CollegueService {

  constructor(private http:HttpClient) { }

  listerCollegues():Promise<Collegue[]> {
    return this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise();
  }

  sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    return this.http.post<Collegue>('http://localhost:8080/collegues',newCollegue).toPromise();
  }

  supprimerUnCollegue(pseudo:string):Promise<Collegue> {
    return this.http.delete<Collegue>(`http://localhost:8080/collegues/${pseudo}`).toPromise();
  }

  aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    return this.http.patch<Collegue>(`http://localhost:8080/collegues/${unCollegue.pseudo}`,{ "action" : "aimer" }).toPromise();
  }

  detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    return this.http.patch<Collegue>(`http://localhost:8080/collegues/${unCollegue.pseudo}`,{ "action" : "detester" }).toPromise();
  }

}
