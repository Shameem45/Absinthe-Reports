import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../taskData'
import { TaskdataService } from '../services/taskdata.service';

@Pipe({
  name: 'orderByStatusandDate'
})
export class OrderByStatusandDatePipe implements PipeTransform {

  constructor(private taskdataService:TaskdataService) {
      console.log(this.taskdataService.taskdata)
  }
  transform(array: any, args: any): Array<string> {
   // return array.filter(function (el: any) {
    array.sort((a: Task, b: Task) => {
	    if ( a[args] < b[args] ){
	    	return -1;
	    }else if( a[args] > b[args] ){
	        return 1;
	    }else{
	    	return 0;	
	    }
    });
    return array;
  
  }
}
  /*
  transform(value: any, input: string) {
    return (function (el: any) {
      this.el.taskdata
        .sort((a: Task, b:Task) => {
          return a.ACTUAL_END_TIME.valueOf() - b.ACTUAL_START_TIME.valueOf();
        })
        .sort((a: Task, b: Task) => {
          return (a.STATUS === b.STATUS ? 0 : (a.STATUS ? 1: -1));
        }); 
  });
}



  transform(taskdata: Task[]): Task[] {
    this.taskdataService.sort();
    return this.taskdataService.taskdata;

*/
