import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../taskData'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TaskdataService } from '../services/taskdata.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public taskData:Task[] = []; 
  

  constructor(private _taskDataService:TaskdataService,private http:HttpClient) { }

  

  ngOnInit() {
    //this._taskDataService.getTaskData().subscribe(data => console.log(this.taskData = data))
    this.http.get<Task[]>('./assets/datas/taskdata.json').subscribe(data => this.taskData = data);
    
  }
  
  

}
