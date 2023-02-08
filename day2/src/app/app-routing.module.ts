import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { WebSocketChatComponent } from './web-socket-chat/web-socket-chat.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'rest',
    component: TodoListsComponent,
  },
  {
    path: 'websocket',
    component: WebSocketChatComponent,
  },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'reactive-form', component: ReactiveFormsModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
