import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Task, res } from '../taskData'

@Injectable()
export class TaskdataService {

  private _taskUrl:string = "./assets/datas/taskdata.json";

  public taskData = [];
  result = [];
  
  


  constructor(private http:HttpClient) { 
    this.getTaskData().subscribe(data => this.taskData.push(data))
    console.log(this.taskData);
    this.getData();
    console.log(this.result);
}

  getTaskData():Observable<Task[]> {
    return this.http.get<res[]>(this._taskUrl); 
  }

  getData()  {
    let result = this.result;
    this.getTaskData()
    .map(res => res)
    .subscribe(
            val => this.result = val,
            err => console.error(err),
            () =>  console.log(this.result[0].STATUS));  // this one echoes out what i want
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
