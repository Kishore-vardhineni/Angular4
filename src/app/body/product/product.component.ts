import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name:string="Product Page";
  productObj:object=[];
  confirmationString:string="New Product has been added";
  isAdded:boolean=false;
 
  constructor(private _http:Http) { }
 
  addNewProduct(product){
    debugger
    this.productObj={
      name:product.name,
      color:product.color
    }
    this._http.post("http://localhost:8080/Products",this.productObj)
    .subscribe((res:Response)=>{
       console.log(res);
       this.isAdded=true;
    })
  }
 
  ngOnInit() {
  }

}
