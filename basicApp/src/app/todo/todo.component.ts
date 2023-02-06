import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input() todoDetails!: Todo;

  checkRender(): boolean {
    console.log('rendered');
    return true;
  }
}
