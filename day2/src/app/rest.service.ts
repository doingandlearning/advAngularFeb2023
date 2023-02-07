import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/todos'
    ) as Observable<Todo[]>;
  }

  // addTodo(task, user) {
  //   const token = this.tokenService.getToken()
  //   const newTodo = {
  //     userId: user,
  //     title: task,
  //     completed: false,
  //   };
  //   return this.http.post(
  //     'https://jsonplaceholder.typicode.com/todos',
  //     newTodo,
  //     {headers: {
  //       "Authentication": token
  //     }}
  //   );
  // }
}
