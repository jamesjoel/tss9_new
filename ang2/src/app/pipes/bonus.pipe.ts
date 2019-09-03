import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

  transform(a:number, b:number, c:string):number{
    if(b<=25){
      return a*10/100;
    }
    else{
      return a * 20 / 100;
    }
  }

}
