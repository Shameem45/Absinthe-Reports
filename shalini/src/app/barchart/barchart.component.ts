import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task } from '../taskData';
import { TaskdataService } from '../services/taskdata.service';
import { PagerserviceService } from '../services/pagerservice.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  public taskData:any = [];
  barChart:any=[];
  result:any;
  _devProductivityData: number;

  onEmittingdevProductivityData (devProductivityData : number):void {
    this._devProductivityData = devProductivityData
    console.log(devProductivityData)
  }

  constructor(private _taskDataService:TaskdataService, private http:HttpClient) {
  }
  
  ngOnInit():void {
    
   this._taskDataService.getTaskData().subscribe(data => this.taskData.push(data))
   console.log(this._devProductivityData)
  }

  // Barchart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

 public ids = [];
 
  public barChartData:any[] = [
    {data: [[this.barChart]], label: 'Dev'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'QA'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Adops'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
