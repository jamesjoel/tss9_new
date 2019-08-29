import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

interface product {
  _id?: string;
  name: string;
  price: number;
  type: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  allProduct:product=[];
  newProduct:product={
    name : "",
    price : null,
    type : ""
  };

  constructor(private productServ:ProductService) { }

  ngOnInit() {
    this.productServ.getProduct().subscribe(data=>{
      this.allProduct=data;
      console.log(this.allProduct);
    })
  }
  save(){
    this.productServ.addProduct(this.newProduct).subscribe(data=>{
      console.log(data);
      this.allProduct.push(data);
    });
  }

}
