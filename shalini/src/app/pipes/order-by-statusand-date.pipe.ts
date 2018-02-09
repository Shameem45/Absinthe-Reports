import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../taskData'
import { TaskdataService } from '../services/taskdata.service';

@Pipe({
  name: 'orderByStatusandDate',
  //pure: false
})
export class OrderByStatusandDatePipe implements PipeTransform {

  constructor(private taskdataService:TaskdataService) {}

    transform(taskData: Task[]): Task[] {  
      this.taskdataService.sort();
      return this.taskdataService.taskData[0];
      
    }
}
