import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from "../todo-app/todo";
import { TODOS } from "../fake-todos";
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public httpClient: HttpClient) { }

  getUrl: string = "http://127.0.0.1:3000/todos/";
  getTodos(): Observable<any> {
    // HTTP GET
    // UPDATE
    // return of(TODOS);
    return this.httpClient.get(this.getUrl);
  }

  getTodoItem(id: string): any {
    return this.httpClient.get(this.getUrl + id);
  }

  postTodoItem(title: string, description: string, dueDate: Date): void {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    var postURL = 'http://localhost:3000/todos';
    this.httpClient.post(postURL, {
      "isComplete": false,
      "title": title,
      "description": description,
      "dueDate": dueDate,
    }, httpOptions).subscribe((response) => {
      console.log(response);
      alert('Added Successfully!')
    })
  }

  putTodoItem(todoItem: Todo): void{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    var putURL = 'http://localhost:3000/todos/' + todoItem.id;
    console.log(todoItem.isComplete)
    this.httpClient.put(putURL, {
      "isComplete": todoItem.isComplete,
      "title": todoItem.title,
      "description": todoItem.description,
      "dueDate": todoItem.dueDate,
    }, httpOptions).subscribe((response) => {
      console.log(response);
      alert('update Successfully!')
    })
  }

  delTodoItem(todoItem: Todo): void{
    var delURL = 'http://localhost:3000/todos/' + todoItem.id;
    this.httpClient.delete(delURL).subscribe((response) => {
      console.log(response);
      alert('delete Successfully!')
    })
  }

}
