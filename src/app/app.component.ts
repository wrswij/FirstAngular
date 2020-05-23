import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
//    setInterval(() =>
//    this.isAngularCool = !this.isAngularCool,
//    2000)
  }

  isAngularCool =false;
  myFeelingAboutAngular = 'Great!';

  toggle(){
    this.isAngularCool=!this.isAngularCool;
  }

}
