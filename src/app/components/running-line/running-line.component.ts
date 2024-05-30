import { Component, Input } from '@angular/core';
import { DirectionPossible } from './running-line.component.types';
import { RunningLineService } from '../../services/running-line.service';

@Component({
  selector: 'app-running-line',
  templateUrl: './running-line.component.html',
  styleUrl: './running-line.component.scss',
})
export class RunningLineComponent {
  @Input() direction!: DirectionPossible;

  directionRight: DirectionPossible = DirectionPossible.RIGHT;
  directionLeft: DirectionPossible = DirectionPossible.LEFT;

  constructor(public runningLineService: RunningLineService) {}

  changeDirection() {
    this.runningLineService.changeDirection();
  }
}
