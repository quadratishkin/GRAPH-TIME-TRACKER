import { Component,  } from '@angular/core';
import { GetInfoService } from '../../services/get-info.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  countOfWeeks:number[] = []

constructor( public getInfoService: GetInfoService){

  for(let i = 50; i>=0; i--){
    this.countOfWeeks.push(i);
  }
}

}
