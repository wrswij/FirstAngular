import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { DataAccessService } from '../data-access.service';

interface IPerson {
  name: string;
}

interface ITodo {
  id: string;
  description: string;
  assignedTo: string;
  done?: boolean;
}

@Component({
  selector: 'app-todo-api',
  templateUrl: './todo-api.component.html',
  styleUrls: ['./todo-api.component.css'],
})
export class TodoApiComponent implements OnInit {
  people: IPerson[];
  todos: ITodo[];
  filtertTodos: ITodo[];
  filterPerson: string;
  error: any;

  cbundone: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private dataAccess: DataAccessService) {}

  ngOnInit(): void {}

  getPeople() {
    //this.http.get('http://localhost:8081/api/people');
    this.http.get<IPerson[]>(environment.baseApiUrl + '/api/people').subscribe(
      (data) => (this.people = data),
      (err) => (this.error = err)
    );
  }

  getTodo() {
    this.http.get<ITodo[]>(environment.baseApiUrl + '/api/todos').subscribe(
      (data) => {
        this.todos = data;
        if (this.filterPerson && this.filterPerson != 'None') {
          this.filtertTodos = this.todos.filter(
            (todo) => todo.assignedTo == this.filterPerson
          );
        }
        if (this.cbundone) {
          this.filtertTodos = this.filtertTodos.filter((todo) => !todo.done);
        }
        if (this.cbundone == false && this.filterPerson == 'None') {
          this.filtertTodos = this.todos;
        }
      },
      (err) => (this.error = err)
    );
  }
}
