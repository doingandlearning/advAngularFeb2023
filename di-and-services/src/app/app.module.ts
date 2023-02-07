import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItemVersion2Component } from './todo-item-version2/todo-item-version2.component';
import { GiftItemComponent } from './gift-item/gift-item.component';
import { GiftListComponent } from './gift-list/gift-list.component';
import { ConfigConsumerComponent } from './config-consumer/config-consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductItemComponent,
    ProductListComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoItemVersion2Component,
    GiftItemComponent,
    GiftListComponent,
    ConfigConsumerComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [
    { provide: 'IS_DEV_ENV', useValue: false },
    { provide: 'IS_QA_ENV', useValue: true },
    { provide: 'IS_USING_DEMO_DB', useValue: false },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
