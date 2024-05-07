import { Injectable } from '@angular/core';
import axios from 'axios';
import moment from 'moment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  getUrl = "https://dpg.gg/test/calendar.json"

  currentDate = "2023-10-25"
  mondayOfCurrentWeek = ""



  data: {[key:string]: number}={};
  dataLoadSubject = new Subject<any>()


  constructor() {
    axios.get(this.getUrl)
    .then( (response) => {
      this.data = response.data;
      this.dataLoadSubject.next(this.data)
      this.dataLoadSubject.complete()
    })
    .catch((error) => {
      console.log(error);
    })


    let dayOfWeek = moment(this.currentDate).day()
    if(dayOfWeek === 0){
      dayOfWeek = 7
    }

    this.mondayOfCurrentWeek = moment(this.currentDate).subtract(dayOfWeek-2,"d").toISOString().split("T")[0]
  }
}
