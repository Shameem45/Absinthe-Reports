import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  // Teamwise Search Filter
  transform(items: any, searchConverge: any,searchStatus: any, searchTeam: any ){
    if (items && items.length){
        return items.filter(item =>{
            if (searchConverge && item.CONVERGE_ID.toLowerCase().indexOf(searchConverge.toLowerCase()) === -1){
                return false;
            }
            if (searchStatus && item.STATUS.toLowerCase().indexOf(searchStatus.toLowerCase()) === -1){
                return false;
            }
            if (searchTeam && item.TEAM.toLowerCase().indexOf(searchTeam.toLowerCase()) === -1){
                return false;
            }
            return true;
       })
    }
    else{
        return items;
    }
}

}


