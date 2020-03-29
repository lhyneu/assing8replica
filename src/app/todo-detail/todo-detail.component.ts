import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import { TodoService } from "../todo-app/todo.service";
import { Todo } from "../todo-app/todo"
import { element } from 'protractor';

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
    private router: Router
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

  // add update button to send put request
  update(): void {
    if(this.todoItem.title == "" || this.todoItem.description == "" || typeof(this.todoItem.dueDate)!=typeof(new Date())){
      alert("please input valid data")
    }else{
      this.todoService.putTodoItem(this.todoItem);
    }
  }

  // use router to navigate to main page
  goBack(): void {
    this.router.navigate(['/todos']);
  }

}
