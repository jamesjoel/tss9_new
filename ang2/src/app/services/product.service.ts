import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface product{
  _id ?: string;
  name : string;
  price : number;
  type : string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }


  getProduct(id:string=""){
    if(id){
      return this.http.get<product[]>(`http://localhost:3000/api/product?id=${id}`);

    }
    else{
      return this.http.get<product[]>("http://localhost:3000/api/product");

    }
  }
  addProduct(obj:product) {
    
      return this.http.post<product>("http://localhost:3000/api/product", obj);

    
  }
  editProduct(id:string, obj: product) {

    return this.http.put<product>(`http://localhost:3000/api/product?id=${id}`, obj);


  }
  deleteProduct(id: string) {

    return this.http.delete(`http://localhost:3000/api/product?id=${id}`);


  }
}
