import { Component, OnInit } from '@angular/core';
import { TodoService } from "./todo.service"

import { Todo } from './todo';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  todos:Todo[];
  selectedTodo:Todo;

  getTodos(): void{
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  deleteTodo(): void {
    console.log("delete clicked");
  }

}
