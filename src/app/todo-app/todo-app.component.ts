import { Component, OnInit } from '@angular/core';

import { TODOS } from '../fake-todos';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  todos = TODOS

  constructor() { }

  ngOnInit(): void {
  }

}
