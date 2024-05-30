import { Injectable } from '@angular/core';
import { DirectionPossible } from '../components/running-line/running-line.component.types';

@Injectable({
  providedIn: 'root',
})
export class RunningLineService {
  directionPossible = DirectionPossible;

  constructor() {}

  direction = this.directionPossible.RIGHT;

  changeDirection() {
    if (this.direction === DirectionPossible.RIGHT) {
      this.direction = DirectionPossible.LEFT;
    } else {
      this.direction = DirectionPossible.RIGHT;
    }
  }
}
