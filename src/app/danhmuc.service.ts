import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproductnew } from './component/interfaces/productsnew';
import { Imenu } from './component/interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class DanhmucService {

  constructor(private http:HttpClient) { }
  URL = 'http://localhost:3000/menu'
  Get_All_Menu = ():Observable<any> => {
    return this.http.get(this.URL)
  }
  AddMenu=(data:Imenu):Observable<any>=>{
    return this.http.post(this.URL,data)
  }
}
