import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  @Input()
  description!: string;

  ngOnInit() {
    this.loggerService.log(`Created TodoItemComponent, ${this.description}`);
  }
}
