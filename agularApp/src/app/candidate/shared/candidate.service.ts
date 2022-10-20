import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Candidate} from "../../domain/candidate";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};

  constructor(private http: HttpClient) { }

  public createCandidate(roles: string[]): Observable<Candidate> {
    return this.http.post<Candidate>( 'http//......./api/v2/habilitation/navigation' , {}, this.headers);
  }

}
