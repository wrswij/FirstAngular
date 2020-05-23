import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TurmrechnenComponent } from './turmrechnen/turmrechnen.component';
import { TodoApiComponent } from './todo-api/todo-api.component';
import { CarModelListComponent } from './car-model-list/car-model-list.component';


const routes: Routes = [
  { path: 'todo-list',component: TodoListComponent},
  { path: 'turmrechnen',component: TurmrechnenComponent},
  { path: 'todoapi',component: TodoApiComponent},
  { path: 'car-model-list',component: CarModelListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
