import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardName'
})
export class CardName implements PipeTransform {

  transform(items: any[], args:String): any {
     return items.filter(item => item.name.toLowerCase().indexOf(args.toLowerCase()) > -1);
  }

}
