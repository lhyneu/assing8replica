import { Component, OnInit } from '@angular/core';
import { TodoService } from "./todo.service"
import { HttpClient } from '@angular/common/http';

import { Todo } from './todo';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  todos: Todo[];
  selectedTodo:Todo;
  getURL = 'http://127.0.0.1:3000/todos/'

  getTodos(): void{
    this.httpClient.get(this.getURL).subscribe((response:any)=>{
      console.log(response);
      this.todos=response;   //输入result报错时，指定一下response的类型
    });
  }

  constructor(private todoService: TodoService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getTodos();
  }

  deleteTodo(todo: Todo): void {
    console.log(todo);
    console.log("delete clicked");
  }

  onToggle(todo: Todo): void {
    console.log(todo);
    todo.isComplete = !todo.isComplete;
    console.log("toggle complete");
  }

}
