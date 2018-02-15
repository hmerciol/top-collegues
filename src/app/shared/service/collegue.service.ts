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
    return this.http.post<Collegue>('/collegues',newCollegue).toPromise();
  }

  aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    return this.http.patch<Collegue>(`/collegues/${unCollegue.pseudo}`,{ "action" : "aimer" }).toPromise();
  }

  detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    return this.http.patch<Collegue>(`/collegues/${unCollegue.pseudo}`,{ "action" : "detester" }).toPromise();
  }

}
