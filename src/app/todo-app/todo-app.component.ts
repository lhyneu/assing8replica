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
  selectedTodo: Todo;
  getURL = 'http://127.0.0.1:3000/todos/'

  getTodos(): void {
    // this.httpClient.get(this.getURL).subscribe((response:any)=>{
    //   console.log(response);
    //   this.todos=response;
    // });
    this.todoService.getTodos().subscribe((response: any) => {
      console.log(response);
      this.todos = response;
    });
  }

  constructor(private todoService: TodoService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getTodos();
  }

  deleteTodo(todo: Todo): void {
    console.log(todo);
    this.todoService.delTodoItem(todo);
    setTimeout(function(){ console.log('wait 10ms')}, 10);
    console.log("delete complete");
    this.getTodos()
  }

  onToggle(todo: Todo) {
    todo.isComplete = !todo.isComplete;
    this.todoService.putTodoItem(todo);
    setTimeout(function(){ console.log('wait 0ms')}, 10);
    console.log("toggle complete");
    this.getTodos()
  }

}
