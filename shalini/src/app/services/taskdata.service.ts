import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import {Task} from '../taskData'

@Injectable()
export class TaskdataService {

  private _taskUrl:string = "./assets/datas/taskdata.json";

  public taskData = [];

  constructor(private http:HttpClient) { 
    this.getTaskData().subscribe(data => this.taskData.push(data))
  }

  getTaskData():Observable<Task[]> {
    return this.http.get<any>(this._taskUrl).map(res => res); 
  }

// fuction called by 'OrderByStatusAndDatePipe'
  sort() {  
    this.taskData[0]
      .sort((a: Task, b: Task) => {  
        return a.SCHEDULED_START_DATE.valueOf() - b.SCHEDULED_START_DATE.valueOf();
      })
      .sort((a: Task, b: Task) => {
        return (a.STATUS === b.STATUS ? 0 : (a.STATUS ? 1 : -1));
      })
}
}
