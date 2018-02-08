import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import {Task} from '../taskData'

@Injectable()
export class TaskdataService {
  public taskdata = [];

  private _taskUrl:string = "./assets/datas/taskdata.json";

  constructor(private http:HttpClient) { 
    this.getTaskData().subscribe(data => this.taskdata.push(data))
    console.log(this.taskdata)
  }

  getTaskData():Observable<Task[]> {
    return this.http.get<any>(this._taskUrl).map(res => res); 
  }

  sort() {  
    console.log(this.taskdata)
    this.taskdata
    .sort((a: Task, b: Task) => {
        return a.SCHEDULED_END_DATE.valueOf() - b.SCHEDULED_START_DATE.valueOf();
      })
      .sort((a: Task, b: Task) => {
        return (a.STATUS === b.STATUS ? 0 : (a.STATUS ? 1 : -1));
      });
  }

}
