import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ProductListComponent } from './product-list/product-list.component'
import { TodoListComponent } from './todo-list/todo-list.component'
import { GiftListComponent } from './gift-list/gift-list.component'
import { ConfigConsumerComponent } from './config-consumer/config-consumer.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services-and-di', component: ProductListComponent },
  { path: 'injector-hierarchy', component: TodoListComponent },
  { path: 'injection-into-services', component: GiftListComponent },
  { path: 'provider-techniques', component: ConfigConsumerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
