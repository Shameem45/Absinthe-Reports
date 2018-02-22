import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {

  transform(value: any, input: string): any {    
    input=input.toLocaleLowerCase();
    if (input) {
        //input = input.toLowerCase();
        return value.filter(function (el: any) {
           //console.log(el);
           if(el.team.toLowerCase().indexOf(input) > -1){
                //console.log(el.team.toLowerCase().indexOf(input) > -1);
                return (el.team.toLowerCase().indexOf(input) > -1);
           }
        })
    }
    //console.log(value);
    return value;
  }

}
