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

  // subscrive get response from todo service and set to bind variable to display
  getTodos() {
    this.todoService.getTodos().subscribe((response: any) => {
      console.log(response);
      this.todos = response;
    });
    console.log('GET new data')
  }

  // inject todoservice
  constructor(private todoService: TodoService) { }

  // init items while init
  ngOnInit(): void {
    this.getTodos();
  }

  // delete function to delete selected item
  // wait 100ms to refresh
  deleteTodo(todo: Todo): void {
    console.log(todo);
    this.todoService.delTodoItem(todo);
    setTimeout(() => {
      this.getTodos()
    }, 100);
    console.log("delete complete");
  }

  // toggle checkbox to change the complete status
  // wait 0ms to refresh
  onToggle(todo: Todo) {
    todo.isComplete = !todo.isComplete;
    this.todoService.putTodoItem(todo);
    setTimeout(() => {
      this.getTodos()
    }, 0);
    console.log("toggle complete");
  }

}
