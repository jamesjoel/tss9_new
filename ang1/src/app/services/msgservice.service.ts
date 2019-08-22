import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MsgserviceService {

  sub = new Subject();

  getMsg() : Observable<any>{
    return this.sub.asObservable();
  }

  sendMsg(a : string){
    this.sub.next({text:a});
  }



  constructor() { }
}
