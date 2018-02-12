import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../taskData'
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
  
  // array of all items to be paged
  private allItems: any[];
  
      // pager object
      pager: any = {};
  
      // paged items
      pagedItems: any[];  

  constructor(private _taskDataService:TaskdataService, private http:HttpClient, private PagerserviceService: PagerserviceService) {}
  
  ngOnInit():void {
    
    this._taskDataService.getTaskData().subscribe(data => this.taskData.push(data))
    console.log(this.taskData);
    this.setPage(1);

  }


  //pagination
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.PagerserviceService.getPager(this.taskData.length, page);

    // get current page of items
    this.pagedItems = this.taskData.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
