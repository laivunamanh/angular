import { Component, inject } from '@angular/core';
import { Iproduct } from '../interfaces/products';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  product: Iproduct = {} as Iproduct
  route = inject(ActivatedRoute)
  async ngOnInit() {
    const proId = this.route.snapshot.params['id'];
    const { data } = await axios.get(`https://dummyjson.com/product/${proId}`);
    this.product = data;
  }
}
