import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
  //providers: [DataAccessService]
})
export class TodoListComponent implements OnInit {

  todoItems: string[] = ['Saufen','Schlafen'];
  newItem: string = '';

  constructor(private dataAccess: DataAccessService) { }

  ngOnInit(): void {
  }

  addNewItem(itemtoInsert: string){
    this.todoItems.push(this.newItem);
  }

  removeItem(index: number){
    this.todoItems.splice(index, 1);
  }
}
