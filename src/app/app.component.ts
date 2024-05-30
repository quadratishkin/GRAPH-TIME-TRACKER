import { Component } from '@angular/core';
import { DirectionPossible } from './components/running-line/running-line.component.types';
import { RunningLineService } from './services/running-line.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  directionPossible = DirectionPossible;
  title = 'graph-time-tracker';
  constructor(public runningLineService: RunningLineService) {}
}
