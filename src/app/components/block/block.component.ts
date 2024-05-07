import { Component, Input, OnInit } from '@angular/core';
import { GetInfoService } from '../../services/get-info.service';
import moment from 'moment';
import { DayOfWeek, Months } from './constants';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss'
})
export class BlockComponent implements OnInit {
@Input() currentDate!:string
  
  myColor= "zero"
  displayDateStr = ''
  compareObjData = ''
  style = 0;
  startMonth = ""
  months = Months
  dayOfWeek = DayOfWeek

  constructor(public getInfoService: GetInfoService){}

  ngOnInit(): void {

    this.getInfoService.dataLoadSubject.subscribe(()=>{
      this.displayDateStr = moment(this.currentDate).format("YYYY-MM-DD") 
      

      if(this.displayDateStr.split("-")[2] === "01"){
        this.startMonth = this.months[this.displayDateStr.split("-")[1]]
      }

      this.style = this.getInfoService.data[this.displayDateStr] || 0
      if(this.style>0 && this.style<9){
        this.myColor="one";
      }else if(this.style>9 && this.style<20){
        this.myColor="two"
      }else if(this.style>19 && this.style<=30){
        this.myColor="three"
      }else if(this.style>29){
        this.myColor="four"
      }

      this.displayDateStr = this.style + " contributions, " + this.dayOfWeek[moment(this.displayDateStr).day()] + ", " + this.displayDateStr
    })
  }
}
