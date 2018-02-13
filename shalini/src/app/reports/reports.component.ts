import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task, res } from '../taskData'
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

    //  results: res = new res();

    public  res: res;

  constructor(private _taskDataService:TaskdataService, private http:HttpClient, private PagerserviceService: PagerserviceService) {
  }
  
  ngOnInit():void {   
    this._taskDataService.getTaskData().subscribe(data => this.taskData.push(data))
    console.log(this.taskData);
    this.showConfig();
}

  showConfig() {
    this._taskDataService.getTaskData()
    //  .map((res: Response) => res.json())
      .subscribe(data => this.res = {   
        TASK_ID: data['TASK_ID'],
        CONVERGE_ID: data['CONVERGE_ID'],
        JOBTYPE : data['JOBTYPE'],
        COMPLEXITY: data['COMPLEXITY'],
        SCHEDULED_START_DATE: data['SCHEDULED_START_DATE'],
        SCHEDULED_END_DATE: data['SCHEDULED_END_DATE'],
        STATUS: data['STATUS'],
        PUBLISHER: data['PUBLISHER'],
        POCS: data['POCS'],
        JOB_COMMENTS: data['JOB_COMMENTS'],
        SCHEDULED_HOURS: data['SCHEDULED_HOURS'],
        TOTAL_NO_OF_FUNCTIONALITIES: data['TOTAL_NO_OF_FUNCTIONALITIES'],
        FUNCTIONALITY_DETAILS: data['FUNCTIONALITY_DETAILS'],
        EDIT_REASON: data['EDIT_REASON'],
        ACTUAL_START_TIME: data ['ACTUAL_START_TIME'],
        ACTUAL_END_TIME: data ['ACTUAL_END_TIME'],
        ACTUAL_HOURS: data['ACTUAL_HOURS'],
        TOKEN_ID: data['TOKEN_ID'],
        TEAM: data['TEAM']
      
      },

    () => console.log(this.res.ACTUAL_END_TIME));
    console.log(this.res.TEAM);
  }
}
