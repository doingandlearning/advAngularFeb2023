import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomPipe } from './custom.pipe';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, NotFoundComponent, CustomPipe, TodoComponent, TodosComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
