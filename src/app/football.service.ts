import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private apiUrl = 'http://localhost:8080/api/football/standings';  // URL to web API

  constructor(private http: HttpClient) { }

  getStandings(countryName: string, leagueName: string, teamName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?countryName=${countryName}&leagueName=${leagueName}&teamName=${teamName}`);
  }
}
