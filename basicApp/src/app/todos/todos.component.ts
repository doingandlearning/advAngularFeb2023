import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],

  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  todos: Todo[] = [
    { id: 1, description: 'Eat lunch', completed: false },
    { id: 2, description: 'Go fro a walk', completed: false },
    { id: 3, description: 'Have a nap', completed: false },
  ];

  changeArray(): void {
    // this.todos[0].description = 'New description'; // Don't change the data directly!
    this.todos = [...this.todos];
    setTimeout(() => {
      this.todos[0] = { ...this.todos[0], description: 'Updated description' };
    }, 100);
  }
}
