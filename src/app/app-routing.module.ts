import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoDetailComponent } from "./todo-detail/todo-detail.component"

const routes: Routes = [
  { path: 'todos', component: TodoAppComponent },
  { path: 'detail', component: TodoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }