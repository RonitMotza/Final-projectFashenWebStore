import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class PipePipe implements PipeTransform {

  transform(nameItem: any, term: any): any {
    //check if search term ia undefined
    if(term === undefined) return nameItem;
      
   // return updated nameItem array
   return nameItem.filter(function(itemN){
     return itemN.ItemName.toLowerCase().includes(term.toLowerCase());
   })


  }

}
