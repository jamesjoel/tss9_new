import { Component, OnInit, Output } from '@angular/core';
import { MyProductService } from '../services/my-product.service';
import { product } from 'src/interface/product';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

   productStore:product[]=[];
   subscript:Subscription;
   loaded:boolean;
    editDataNew:product;
    
  constructor(private productList:MyProductService) { 
         this.subscript=this.productList.getChildToParent().subscribe(data =>{
                     this.productStore.push(data);
         })
  }

  ngOnInit() {
        this.productList.getproudctList().subscribe(data =>{
             this.productStore=data;
        })
  }

  deleteProductFormList(x){
         let index=this.productStore.indexOf(x);
         console.log(x);

         this.productList.deleteProduct(x._id).subscribe(data =>{
                   this.productStore.splice(index,1)
                    
         })
  }




  editProductFormList(x){
    
this.editDataNew ={
  _id : x._id,
  name: x.name,
  price:x.price,
  category:x.category
}

    this.loaded=true;

        
          // this.productList.editProduct(x).subscribe(data =>{
          //       console.log(data);
          // })
  }
  loadMyChildComponent(){
    this.loaded=true;
   }

  

}
