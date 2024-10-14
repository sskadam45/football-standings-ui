import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StandingsComponent } from "./standings/standings.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StandingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football-standings-ui';
}
