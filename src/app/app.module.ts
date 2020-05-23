import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TurmrechnenComponent } from './turmrechnen/turmrechnen.component';
import { TodoApiComponent } from './todo-api/todo-api.component';
import { AccountingModule } from './accounting/accounting.module';
import { CarModelListComponent, CarModelListViewComponent, CarModelListFilterComponent } from './car-model-list/car-model-list.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TurmrechnenComponent,
    TodoApiComponent,
    CarModelListComponent,
    CarModelListViewComponent,
    CarModelListFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
