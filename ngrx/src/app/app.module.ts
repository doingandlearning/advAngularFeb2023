import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import {
  cartReducer,
  metaReducerLocalStorage,
} from './cart-state-store/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { cartEntries: cartReducer },
      { metaReducers: [metaReducerLocalStorage] }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
