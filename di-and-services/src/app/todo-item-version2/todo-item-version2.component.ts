import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service'

@Component({
  selector: 'app-todo-item-version2',
  templateUrl: './todo-item-version2.component.html',
  styleUrls: ['./todo-item-version2.component.css']
  // Note that we don't provide our own LoggerService now. So we'll "get" one from provided by a parent component/module.
})
export class TodoItemVersion2Component implements OnInit {

  constructor(private loggerService: LoggerService) {}

  @Input() 
  description!: string;

  ngOnInit() {
    this.loggerService.log(`Created TodoItemVersion2Component, ${this.description}`)
  }
}
