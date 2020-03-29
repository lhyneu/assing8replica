import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";

import { TodoService } from "../todo-app/todo.service";

import { Todo } from "../todo-app/todo";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  title: string = "";
  description: string = "";
  @Input() dueDate:Date = new Date();
  constructor(
    private location:Location,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  // go back use location
  goBack(): void {
    this.location.back();
  }
  
  // use todo service to post new todo item
  addTodo():void {
    // console.log(this.dueDate)
    this.todoService.postTodoItem(this.title, this.description, this.dueDate);
  }

}
