import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import {Task} from '../taskData'

@Injectable()
export class TaskdataService {

  private _taskUrl:string = "./assets/datas/taskdata.json";

  constructor(private http:HttpClient) { }

  getTaskData():Observable<Task[]> {
    return this.http.get<Task[]>(this._taskUrl);
  }

}
