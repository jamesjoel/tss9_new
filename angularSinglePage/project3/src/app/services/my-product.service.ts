import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from 'src/interface/product';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyProductService {
  private prod = new Subject<any>();
  constructor(private http:HttpClient) { }

   getproudctList(){
             return this.http.get<product[]>("http://localhost:3000/product")
   }

   addProductList(obj){
           return this.http.post<product[]>("http://localhost:3000/product",obj)
   }
   deleteProduct(id:string){
    return this.http.delete(`http://localhost:3000/product?id=${id}`);
  }
  editProduct(id:string){
    return this.http.delete(`http://localhost:3000/product?id=${id}`);
  }
   childToParent(a:any){
    this.prod.next(a);
    console.log(a);
   }
   getChildToParent():Observable<any>{
    return this.prod.asObservable();
}



}
