import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, input: string): any {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
           //console.log(el);
           if(el.converge_id.toLowerCase().indexOf(input) > -1){
                return (el.converge_id.toLowerCase().indexOf(input) > -1);
           }
           else if(el.publisher.toLowerCase().indexOf(input) > -1){
                return (el.publisher.toLowerCase().indexOf(input) > -1);
           }
            
        })
    }
    return value;
  }

}
