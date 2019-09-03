import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dewaliBonus'
})
export class DewaliBonusPipe implements PipeTransform {

  transform(a:number) {
              if(a<=500){
                      return  a+130;
              } 
              else{
                      return a+500;
              }
  }

}
