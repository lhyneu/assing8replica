import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoDetailComponent } from "./todo-detail/todo-detail.component"
import { TodoAddComponent } from "./todo-add/todo-add.component";

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodoAppComponent },
  { path: 'detail/:id', component: TodoDetailComponent},
  { path: 'add', component: TodoAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }