import { Component } from '@angular/core';
import { RestService, Todo } from '../rest.service';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css'],
})
export class TodoListsComponent {
  public todos: Todo[] = [];
  constructor(private todoService: RestService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe({
      next: (response) => {
        this.todos = response;
        // multiple statements
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
