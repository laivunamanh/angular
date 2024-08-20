import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddMenuComponent } from './admin/add-menu/add-menu.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"product",component:ProductlistComponent},
  {path:"pro/:id",component:ProductDetailComponent},
  {path:"cart",component:CartComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"addmenu",component:AddMenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
