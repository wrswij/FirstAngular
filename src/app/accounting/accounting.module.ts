import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';



@NgModule({
  declarations: [AccountListComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AccountListComponent
  ]
})
export class AccountingModule { }
