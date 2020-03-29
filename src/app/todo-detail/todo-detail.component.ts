import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoService } from "../todo-app/todo.service";
import { Todo } from "../todo-app/todo"

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  @Input() todoItem: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  getTodoItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.todoService.getTodoItem(id).subscribe((response: any) => {
      console.log(response);
      this.todoItem = response;
    });
  }

  ngOnInit(): void {
    this.getTodoItem();
  }

  goBack(): void {
    console.log(typeof(this.todoItem.dueDate))
    this.location.back();
  }

}
