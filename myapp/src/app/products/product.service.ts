import {Injectable} from '@angular/core';
import { IProduct } from './product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable()

export class ProductService {
    private productUrl:string='../assets/productdetails.json';
   
    constructor(private http:HttpClient){

    }

    getProducts():Observable<IProduct[]>
    {
       
   return  this.http.get<IProduct[]>(this.productUrl);
    }

  

}

/* 

getproductdetails(id): Observable<IProduct[]>
{
    return this.http.get<IProduct[]>(`${this.productUrl}?productId=${id}`)

}
*/