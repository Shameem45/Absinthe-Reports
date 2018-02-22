import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task, productivityData } from '../taskData'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TaskdataService } from '../services/taskdata.service';
import { PagerserviceService } from '../services/pagerservice.service';
import { OrderByStatusandDatePipe } from '../pipes/order-by-statusand-date.pipe';
import { DaterangepickerModule } from 'angular-2-daterangepicker';
import { Options } from 'angular-2-daterangepicker';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {
 

  public taskData = [];
  public productivityData = [];


  devProductivityObj = [];
  adopsProductivityObj = [];
  qaProductivityObj = [];

  devActualHoursObj= [];
  QAActualHoursObj= [];
  AdopsActualHoursObj= [];

  
  DevScheduledHoursObj= [];
  QAScheduledHoursObj= [];
  AdopsScheduledHoursObj= [];
  

  devProductivity:number = 0;
  adopsProductivity:number = 0;
  qaProductivity:number = 0;


  devActualJobHours :number = 0;
  adopsActualJobHours :number = 0;
  qaActualJobHours :number = 0;

  devScheduledJobHours :number = 0;
  adopsScheduledJobHours :number = 0;
  qaScheduledJobHours :number = 0;


  devActualHours = [];
  adopsActualHours = [];
  qaActualHours = [];

  devScheduledHours = [];
  adopsScheduledHours = [];
  qaScheduledHours = [];

  date1: any;
  date2: any;
  ScheduledDateStart: number;
  ScheduledDateEnd: number;
  totalTime: any;
  ScheduledTotalTime: number;
  ONEDAY = 1000 * 60 * 60 * 24;

  DevtotalActualHours : number;
  QAtotalActualHours : number;
  AdopstotalActualHours : number;
  
  DevtotalScheduledHours : number;
  QAtotalScheduledHours : number;
  AdopstotalScheduledHours : number;

  @Output() devProductivityData = new EventEmitter<number>();


  private _taskUrl:string = "./assets/datas/taskdata.json";
  private _produtivityUrl:string = "./assets/datas/productivity.json";


  constructor(private _taskDataService:TaskdataService, private http:HttpClient) { 
    this.http.get<any>(this._taskUrl).subscribe(data => 
      this.taskData.push(data.data)

    );

    this.http.get<any>(this._taskUrl).subscribe(data =>{ 
      for(let i=0; i<data.data.length; i++){
      //  this.devActualHours.push(data.data[i]);
      //getting actuall and scheduled hours for each team in a array
        if(data.data[i].TEAM=="Dev"){
            this.date1 = new Date(data.data[i].ACTUAL_END_TIME).getTime();
            this.date2 = new Date(data.data[i].ACTUAL_START_TIME).getTime(); 

            this.ScheduledDateEnd = new Date(data.data[i].SCHEDULED_END_DATE).getTime();
            this.ScheduledDateStart = new Date(data.data[i].SCHEDULED_START_DATE).getTime(); 

            this.totalTime = Math.abs(this.date2 - this.date1);
            this.ScheduledTotalTime = Math.abs(this.ScheduledDateEnd - this.ScheduledDateStart);

            this.DevtotalActualHours = Math.round(this.totalTime/this.ONEDAY*8)
            this.DevtotalScheduledHours = Math.round(this.ScheduledTotalTime/this.ONEDAY*8)

            this.devActualHoursObj.push(this.DevtotalActualHours);
            this.DevScheduledHoursObj.push(this.DevtotalScheduledHours);
        }
        else if(data.data[i].TEAM=="QA"){
          this.date1 = new Date(data.data[i].ACTUAL_END_TIME).getTime();
          this.date2 = new Date(data.data[i].ACTUAL_START_TIME).getTime(); 

          this.ScheduledDateEnd = new Date(data.data[i].SCHEDULED_END_DATE).getTime();
          this.ScheduledDateStart = new Date(data.data[i].SCHEDULED_START_DATE).getTime(); 

          this.totalTime = Math.abs(this.date2 - this.date1);
          this.ScheduledTotalTime = Math.abs(this.ScheduledDateEnd - this.ScheduledDateStart);

          this.QAtotalActualHours = Math.round(this.totalTime/this.ONEDAY*8)
          this.QAtotalScheduledHours = Math.round(this.ScheduledTotalTime/this.ONEDAY*8)

          this.QAActualHoursObj.push(this.QAtotalActualHours);
          this.QAScheduledHoursObj.push(this.QAtotalScheduledHours);
       }
       else if(data.data[i].TEAM=="Adops"){
        this.date1 = new Date(data.data[i].ACTUAL_END_TIME).getTime();
        this.date2 = new Date(data.data[i].ACTUAL_START_TIME).getTime(); 

        this.ScheduledDateEnd = new Date(data.data[i].SCHEDULED_END_DATE).getTime();
        this.ScheduledDateStart = new Date(data.data[i].SCHEDULED_START_DATE).getTime(); 

        this.totalTime = Math.abs(this.date2 - this.date1);
        this.ScheduledTotalTime = Math.abs(this.ScheduledDateEnd - this.ScheduledDateStart);

        this.AdopstotalActualHours = Math.round(this.totalTime/this.ONEDAY*8)
        this.AdopstotalScheduledHours = Math.round(this.ScheduledTotalTime/this.ONEDAY*8)

        this.AdopsActualHoursObj.push(this.AdopstotalActualHours);
        this.AdopsScheduledHoursObj.push(this.AdopstotalScheduledHours);
     }
    }

    //Total actual Hours
    for(let i=0;i<this.devActualHoursObj.length;i++){
      this.devActualJobHours = this.devActualJobHours+this.devActualHoursObj[i];
    }
    for(let i=0;i<this.QAActualHoursObj.length;i++){
      this.qaActualJobHours = this.qaActualJobHours+this.QAActualHoursObj[i];
    }
    for(let i=0;i<this.AdopsActualHoursObj.length;i++){
      this.adopsActualJobHours = this.adopsActualJobHours+this.AdopsActualHoursObj[i];
    }

    //Total scheduled Hours
    for(let i=0;i<this.DevScheduledHoursObj.length;i++){
      this.devScheduledJobHours = this.devScheduledJobHours+this.DevScheduledHoursObj[i];
    }
    this.devProductivityObj.push((this.devActualJobHours/this.devScheduledJobHours)*100);  

    for(let i=0;i<this.QAScheduledHoursObj.length;i++){
      this.qaScheduledJobHours = this.qaScheduledJobHours+this.QAScheduledHoursObj[i];
    }
    this.qaProductivityObj.push((this.qaActualJobHours/this.qaScheduledJobHours)*100); 

    for(let i=0;i<this.AdopsScheduledHoursObj.length;i++){
      this.adopsScheduledJobHours = this.adopsScheduledJobHours+this.AdopsScheduledHoursObj[i];
    }
    this.adopsProductivityObj.push((this.adopsActualJobHours/this.adopsScheduledJobHours)*100); 
  
    // assigning data from a array to variable 
    for(let i=0;i<this.devProductivityObj.length;i++){
      this.devProductivity = this.devProductivity+this.devProductivityObj[i];
    }
    this.devProductivity = this.devProductivity/this.devProductivityObj.length;

    for(let i=0;i<this.adopsProductivityObj.length;i++){
      this.adopsProductivity = this.adopsProductivity+this.adopsProductivityObj[i];
    }
    this.adopsProductivity = this.adopsProductivity/this.adopsProductivityObj.length;

    for(let i=0;i<this.qaProductivityObj.length;i++){
      this.qaProductivity = this.qaProductivity+this.qaProductivityObj[i];
    }
    this.qaProductivity = this.qaProductivity/this.qaProductivityObj.length;
    });    
}

  ngOnInit():void {   
  

  }

}
 

