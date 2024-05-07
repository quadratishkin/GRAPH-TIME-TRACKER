import { Component, Input, OnInit, input } from '@angular/core';
import { GetInfoService } from '../../services/get-info.service';
import moment from 'moment';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss'
})
export class ColumnComponent implements OnInit {

  @Input() weekNumber!:number

  weekArray:string[]=[]

  constructor(public getInfoService: GetInfoService){}

  ngOnInit(): void {
    for (let i=0; i<7 ;i++){
      this.weekArray[i] = moment(this.getInfoService.mondayOfCurrentWeek).subtract(this.weekNumber,"w").add(i,"d").toString()
    }
  }

}
