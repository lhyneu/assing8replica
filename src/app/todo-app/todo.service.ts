import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Todo} from "../todo-app/todo";
import {TODOS} from "../fake-todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(TODOS);
  }

  getTodoItem(id: string): Observable<Todo> {
    return of(TODOS.find(todo => todo.id == id));
  }

}
