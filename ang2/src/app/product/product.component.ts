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

  allProduct:product[]=[];
  askDeleteObj:product={
    name: "",
    price: null,
    type: ""
  };

  newProduct:product={
    name : "",
    price : null,
    type : ""
  };

  constructor(private productServ:ProductService) { }

  ngOnInit() {
    this.productServ.getProduct().subscribe(data=>{
      console.log("--------",data);
      // this.allProduct.push(data);
      this.allProduct=data;
      
    });
  }
  save(){
    if(this.newProduct._id!=""){
      this.productServ.editProduct(this.newProduct._id, this.newProduct).subscribe(data=>{
        console.log("-----",data);
        for(var i=0; i<this.allProduct.length; i++)
        {
          if(this.allProduct[i]._id==this.newProduct._id)
          {
            this.allProduct[i]=this.newProduct;
          }
        }
      });
    }
    else{

      this.productServ.addProduct(this.newProduct).subscribe(data=>{
        console.log(data);
        this.allProduct.push(this.newProduct);
        this.newProduct={
          name : "",
          price : null,
          type : ""
        };
      });
    }
  }
  askAdd(){
    this.newProduct = {
      _id : "",
      name: "",
      price: null,
      type: ""
    };
  }

  askDelete(obj:product){
    this.askDeleteObj=obj;
  }
  delete(){
    this.productServ.deleteProduct(this.askDeleteObj._id).subscribe(data=>{
      console.log(data);
      var id = this.allProduct.indexOf(this.askDeleteObj);
      this.allProduct.splice(id, 1);
    });
  }
  askEdit(obj:product){
    // this.newProduct=obj;
    this.newProduct=Object.assign({}, obj);
  }

}
