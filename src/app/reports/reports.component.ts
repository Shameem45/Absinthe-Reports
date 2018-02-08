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

  public taskData = []; 

  constructor(private _taskDataService:TaskdataService,private http:HttpClient) {}
  
  ngOnInit():void {
    
    this._taskDataService.getTaskData().subscribe(data => this.taskData.push(data))
    console.log(this.taskData);

  }

}
