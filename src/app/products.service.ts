import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproductnew } from './component/interfaces/productsnew';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  API_URL ='http://localhost:3000/products'
  Get_All_Product = ():Observable<any> => {
    return this.http.get(this.API_URL)
  }
  AddProduct=(data:Iproductnew):Observable<any>=>{
    return this.http.post(this.API_URL,data)
  }
}
