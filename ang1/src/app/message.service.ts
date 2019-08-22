import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject = new Subject<any>();

  sendMsg(m:string){
    this.subject.next({text : m});
  }
  clearMsg() {
    this.subject.next();
}

getMsg(): Observable<any> {
    return this.subject.asObservable();
}


  constructor() { }
}
