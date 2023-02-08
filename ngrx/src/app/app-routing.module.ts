import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TestGuard } from './test.guard';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent, canActivate: [TestGuard] },
  { path: '**', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
