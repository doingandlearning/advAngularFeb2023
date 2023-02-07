import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  getTodos(): Array<string> {
    var todos: Array<string> = [
        "Do tax return",
        "Tidy up garden",
        "Renew Swansea City season ticket",
        "Set up Zoom meetings for church"
    ];
    return todos;
}}
