import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/productservice';
import { Iprouduct } from '../java/java';
import { ProductComponent } from 'src/app/body/product/product.component';
import { error } from '@angular/compiler/src/util';
import { Http, Response, Headers} from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { HeaderComponent } from 'src/app/header/header.component';


@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css'], 
  providers:[ ProductService ]
})
export class JavaComponent implements OnInit {
  name:string="Java Page";
  dataSaved:boolean= false;
  products:Iprouduct[];
  productObj:object=[];
  confirmationString:string="New Product has been added";
  isAdded:boolean=false;
  errorMessage: any;
  id:number;
  private headers=new Headers({'content-type':'application/json'});



  constructor(private _productservice:ProductService, private http:Http) { }
 
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
      return this._productservice.getProducts()
      .subscribe((data)=>this.products=data,
      error=>this.errorMessage = <any>error);
  }
  addNewProduct(product){
      this._productservice.addNewProduct(product+this.productObj)
      .subscribe((product)=>{
        console.log(product);
        this.isAdded=true;
        this.getProducts();
      },
      error => this.errorMessage = <any>error);
   }

   updateNewProduct(product){
      this.productObj={
          name:product.name,
          color:product.color
      }
      this._productservice.updateNewProduct(product) 
   }

   deleteProduct=function(id){
     debugger
       if(confirm("Are you sure?")){
           const url='${"http://localhost:8080/Products"}/${id}';
           return this.http.delete(url, {headers:this.headers}).toPromise()
           .then(()=>{
             this.getProducts();
           })
       }
   }
}
