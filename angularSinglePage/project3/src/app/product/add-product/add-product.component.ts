import { Component, OnInit, Input } from '@angular/core';
import { MyProductService } from 'src/app/services/my-product.service';
import { product } from 'src/interface/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Input() editData: product;
    addPorductList:product;
    saveproduct:product={
              _id: "",
             name:"",
             price:null,
             category:""
   }


  constructor(private storeProduct:MyProductService) { 
 
   }

  ngOnInit() {
    alert("product--------------");
      if(this.editData._id){
      this.saveproduct = this.editData;
    }

    console.log(this.editData)
  }

  save(){
        this.storeProduct.addProductList(this.saveproduct).subscribe(data=>{
               console.log(this.saveproduct)
        this.storeProduct.childToParent(this.saveproduct);
        this.saveproduct={
          name:"",
          price:null,
          category:""
        }
        })
  }

     

}
