import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";

import { Todo } from "../todo-app/todo";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  title: string = "";
  description: string = "";
  constructor(
    private location:Location
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
