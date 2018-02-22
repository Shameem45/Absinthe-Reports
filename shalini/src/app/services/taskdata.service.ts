import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Task } from '../taskData'

@Injectable()
export class TaskdataService {

  private _taskUrl:string = "../assets/datas/taskdata.json";
  public taskData = [];

  constructor(private http:HttpClient) { }



  getTaskData():Observable<Task[]> {
    return this.http.get<Task[]>(this._taskUrl); 
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
