import { Component } from '@angular/core';
import { Iproduct } from '../interfaces/products';
import axios from 'axios';
import { ProductsService } from '../../products.service';
import { Iproductnew } from '../interfaces/productsnew';
import { Imenu } from '../interfaces/menu';
import { DanhmucService } from '../../danhmuc.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
//   products:Iproduct[]=[]
//   async ngOnInit() {
//     const {data} = await axios.get('https://dummyjson.com/product?skip=0&limit=21');
//     this.products = data.products;
// }

menus:Imenu[]=[]
constructor(private danhmucService: DanhmucService){}
async ngOnInit() {
  this.danhmucService.Get_All_Menu().subscribe(data => {
    this.menus =data;
  })
}
}
