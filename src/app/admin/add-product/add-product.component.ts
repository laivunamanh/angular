import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Iproductnew } from '../../component/interfaces/productsnew';
import { Router } from '@angular/router';
import { DanhmucService } from '../../danhmuc.service';
import { Imenu } from '../../component/interfaces/menu';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  constructor(private productService: ProductsService,
    private danhmucService: DanhmucService
  ) { }
  producform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    image: new FormControl(''),
    desc: new FormControl('', [Validators.required, Validators.minLength(6)]),
    category: new FormControl(''),
    price: new FormControl(1000)
  })
  menus:Imenu[]=[];
  products: Iproductnew[] = []
  ngOnInit() {
    this.loadProducts();
    this.loadMenus();
  }

  private loadProducts() {
    this.productService.Get_All_Product().subscribe(data => {
      this.products = data;
    });
  }
  private loadMenus() {
    this.danhmucService.Get_All_Menu().subscribe(data => {
      this.menus = data;
    });
  }
  router = new Router()
  onSubmit() {
    if (this.producform.valid) {
      console.log(this.producform.value);
      this.productService.AddProduct(this.producform.value as Iproductnew).subscribe(data => {
        // console.log(data);
        this.products.push(data);
        alert("Thêm Sản Phẩm thành công")
        this.router.navigate(['product'])
      })
    }
  }
}

