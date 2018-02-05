import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../taskData'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  taskData;
  Task:any[]=[];
  

  constructor(private http:HttpClient) { }

  getTaskData(url):Observable<any> {
    return this.http.get(url).map(Task => url)
  }

  ngOnInit() {
    this.http.get('./assets/datas/taskdata.json').subscribe(data =>  console.log(this.taskData = data));
    console.log(Task)
  }

   // Barchart
   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [10, 8, 5, 50, 56, 55, 40], label: 'Dev'},
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
