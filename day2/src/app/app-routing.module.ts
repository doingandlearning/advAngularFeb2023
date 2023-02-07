import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'rest',
    component: TodoListsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
