import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { WebSocketChatComponent } from './web-socket-chat/web-socket-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TodoListsComponent,
    WebSocketChatComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
