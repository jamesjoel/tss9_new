import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor() { }

  demo(a:number){
    console.log(a*a);
    return a*a;
  }
}
