import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from 'src/app/component/products/products.component';
import { CartComponent } from 'src/app/component/cart/cart.component';
const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component: ProductsComponent},
  {path:'cart',component: CartComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent,CartComponent];