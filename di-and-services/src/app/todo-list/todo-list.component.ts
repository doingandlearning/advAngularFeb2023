import { Component } from '@angular/core';
import { TodoService } from '../todo.service'
import { LoggerService } from '../logger.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService, LoggerService]
})
export class TodoListComponent {

  todos: Array<string>; 

  constructor(todoService: TodoService, loggerService: LoggerService) { 
      this.todos = todoService.getTodos();
      loggerService.log(`Created TodoListComponent, ${this.todos.length} items`)
    }
}
