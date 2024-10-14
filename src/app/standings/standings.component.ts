import { Component, inject } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, of, startWith, Subject, switchMap } from 'rxjs';
import { FootballService } from '../football.service';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.css',
  providers:  [ FootballService ]
})
export class StandingsComponent {
  private searchTerms = new Subject<{countryName: string, leagueName: string, teamName: string}>();
  standingData: any;
  footballService: FootballService = inject(FootballService);
  isLoading: boolean = true;
  constructor() { }


  search(countryName: string = '', leagueName: string = '', teamName: string = ''): void {
    this.isLoading = true;
    this.searchTerms.next({ countryName, leagueName, teamName });
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      startWith({ countryName: '', leagueName: '', teamName: '' }), // Kick off with empty parameters
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)), // Deep comparison
      switchMap(({ countryName, leagueName, teamName }) =>
        this.footballService.getStandings(countryName.trim(), leagueName.trim(), teamName.trim()).pipe(
          catchError(error => {
            this.isLoading = false;
            console.error('Error in getting standings:', error);
            return of([]); // Return an observable of an empty array in case of error
          })
        )
      )
    ).subscribe(data => {
      console.log('Data received:', data);
      this.isLoading = false;
      this.standingData = data;
    });

    // Initial fetch
    this.search();
  }
}
