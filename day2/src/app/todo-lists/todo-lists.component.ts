import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RestService, Todo } from '../rest.service';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListsComponent {
  public todos: Todo[] = [];
  constructor(private todoService: RestService) {}

  ngOnInit() {
    console.log(this.todos);
    this.todoService.getTodos().subscribe({
      next: (response) => {
        this.todos = [];
        this.todos = [...response];
        // multiple statements
        console.log(this.todos);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
