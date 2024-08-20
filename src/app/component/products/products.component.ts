import { Component } from '@angular/core';
import { Iproduct } from '../interfaces/products';
import axios from 'axios';
import { Iproductnew } from '../interfaces/productsnew';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:Iproductnew[]=[]
  constructor(private productService:ProductsService ){}
  async ngOnInit() {
this.productService.Get_All_Product().subscribe(data => {
  this.products =data;
})
}
}
