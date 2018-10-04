import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Iprouduct } from '../body/java/java';
import { Observable } from 'rxjs/internal/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
    private url:any="http://localhost:8080/Products";
    constructor(private _http:HttpClient){}

    getProducts():Observable<Iprouduct[]>{
        return this._http.get<Iprouduct[]>(this.url);
    }

    addNewProduct(product:Iprouduct):Observable<Iprouduct>{
        return this._http.post<Iprouduct>(this.url,product)
    }
    
    updateNewProduct(product:Iprouduct):Observable<Iprouduct>{
        return this._http.put<Iprouduct>(this.url+"/"+product.id,product)
    }

    deleteNewProduct(id:string):Observable<Iprouduct>{
        return this._http.delete<Iprouduct>(this.url+"/"+id)
    }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }	
}