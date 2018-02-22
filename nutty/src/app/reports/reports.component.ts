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
  public productivityData = []; 
  public taskDatacount:number;
  res:any;
  task: Task[];
  newlength:number;
  sortedData:string;
  public copytaskData = [];
  selectTeam:string = "";
  individualTeamProductivitySec=false;

  convIdAsec=false;
  dateAsec=false;
  funcAsec=false;
  pubAsec=false;

  sortConv:Task[];
  copiedSortConv:Task[] = [];
  private _taskUrl:string = "./assets/datas/taskdata.json";
  private _attendanceUrl:string = "./assets/datas/attendanceData.json";
  private _productivity:string = "./assets/datas/productivity.json";
  

  constructor(private _taskDataService:TaskdataService,private http:HttpClient) {
    
  }

  ngOnInit():void {    

    this.http.get<any>(this._taskUrl).subscribe(data => 
      this.taskData.push(data.data)      
    );
    this.http.get<any>(this._productivity).subscribe(data => 
      this.productivityData.push(data.data)      
    );
 
    this.copytaskData = this.taskData; 
  }
  
  teamChange(selected){
    //console.log(selected.team);
    this.selectTeam = selected.team;
  }

  sortingType(sort:string){
    switch(sort){
      case "convId":
        if(!this.convIdAsec){
          this.taskData[0]=this.copytaskData[0].sort(this.sortByConvIdAsec);
          this.convIdAsec=true;
        }
        else{
          this.taskData[0]=this.copytaskData[0].sort(this.sortByConvIdDesc);
          this.convIdAsec=false;
        }
      break;
      case "Date":
        if(!this.dateAsec){
          this.taskData[0]=this.copytaskData[0].sort(this.sortByDateAsec);
          this.dateAsec=true;
        }
        else{
          this.taskData[0]=this.copytaskData[0].sort(this.sortByDateDesc);
          this.dateAsec=false;
        }
      break;
      case "func":
        if(!this.dateAsec){
        this.taskData[0]=this.copytaskData[0].sort(this.sortByDateAsec);
          this.dateAsec=true;
        }
        else{
          this.taskData[0]=this.copytaskData[0].sort(this.sortByDateDesc);
          this.dateAsec=false;
        }
      break;
      case "pub":
        if(!this.pubAsec){
          this.taskData[0]=this.copytaskData[0].sort(this.sortByPubAsec);
          this.pubAsec = true;
        }
        else{
          this.taskData[0]=this.copytaskData[0].sort(this.sortByPubDesc);
          this.pubAsec = false;
        }
      break;
    }
  }
  
  sortByConvIdAsec(c1:Task,c2:Task){
    if(c1.converge_id > c2.converge_id) return 1; 
      else if(c1.converge_id === c2.converge_id)return 0;
        else return-1;
  }
  sortByConvIdDesc(c1:Task,c2:Task){
    if(c1.converge_id < c2.converge_id) return 1
      else if(c1.converge_id === c2.converge_id) return 0
        else return-1;
  }

  sortByPubAsec(c1:Task,c2:Task){
    if(c1.publisher > c2.publisher) return 1
      else if(c1.publisher === c2.publisher) return 0
        else return-1;
  }
  sortByPubDesc(c1:Task,c2:Task){
    if(c1.publisher < c2.publisher) return 1
      else if(c1.publisher === c2.publisher) return 0
        else return-1;
  }

  sortByDateAsec(c1:Task,c2:Task){
    let date1 = new Date(c1.scheduled_end_date);
    let date2 = new Date(c2.scheduled_end_date);

    if (date1 > date2) {return 1;
    } else if (date1 < date2) {return -1;
    } else {return 0; }
  }
  sortByDateDesc(c1:Task,c2:Task){
    let date1 = new Date(c1.scheduled_end_date);
    let date2 = new Date(c2.scheduled_end_date);

    if (date1 < date2) {return 1;
    } else if (date1 > date2) {return -1;
    } else {return 0; }
  }

  sortByFuncAsec(c1:Task,c2:Task){
    return c1.total_no_of_functionalities-c2.total_no_of_functionalities;
  }
  sortByFuncDesc(c1:Task,c2:Task){
    return c2.total_no_of_functionalities-c1.total_no_of_functionalities;
  }

  //private data: Array<any> = this.taskData;
}
