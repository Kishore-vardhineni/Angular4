import { Injectable } from '@angular/core';
// import { Http,Response,} from '@angular/http';
// import { Observable } from 'rxjs';
// import  'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import { Iangular } from '../body/web/web';

import { HttpClient} from '@angular/common/http';
import { Iangular } from '../body/web/web';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class WebService {
   private url:any='http://jsonplaceholder.typicode.com/posts';
   // private url1:string="assets/data/product.json";
    //   constructor(private _http:Http){}
   constructor(private _http:HttpClient){}

//   webDetails():Observable<Iangular[]>{
//     return this._http.get(this.url)
//     .map((response:Response)=><Iangular[]>response.json())
//     .do(data=>console.log(JSON.stringify(data)))
//     .catch(this.handleError);
//   }
//   private handleError(error:Response){
//      console.log(error);
//      return Observable.throw(error.json().error()); 
//   }

//  webDetail():Observable<Iangular[]>{
//      return this._http.get<Iangular[]>(this.url)
//  }
  getWebDetail(){
    return this._http.get(this.url) 
  }
  addWebDetail(angular:Iangular):Observable<Iangular>{
      return this._http.post<Iangular>(this.url,angular);
  }
  updateWebDetail(angular:Iangular):Observable<Iangular>{
      return this._http.put<Iangular>(this.url+"/"+angular.id,angular);
  }
}