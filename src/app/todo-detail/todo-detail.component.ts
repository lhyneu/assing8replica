import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoService } from "../todo-app/todo.service";
import {Todo} from "../todo-app/todo"

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  todoItem: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  getTodoItem(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.todoService.getTodoItem(id).subscribe(todo => this.todoItem = todo)
  }

  ngOnInit(): void {
    this.getTodoItem();
  }

  goBack(): void {
    this.location.back();
  }

}
