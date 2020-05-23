import { Component} from '@angular/core';

interface INumbers {
  value1: number;
  operator: string;
  value2: number;
  result: number;
}

@Component({
  selector: 'app-turmrechnen',
  templateUrl: './turmrechnen.component.html',
  styleUrls: ['./turmrechnen.component.css']
})
export class TurmrechnenComponent {

  title = 'turmrechnen';

  SV = 1;
  Height = 0;
  NumberList: INumbers[] = [];

  calculate() {
    //this.NumberList.push({value1: 1,operator: '+',value2: 1,result: 2});
    if (this.Height >= 2) {
      this.NumberList = [];
      let x = this.SV;

      for (let i = 2; i <= this.Height; i++) {
        this.NumberList.push({
          value1: x,
          operator: '*',
          value2: i,
          result: x * i,
        });
        x = x * i;
      }

      for (let i = 2; i <= this.Height; i++) {
        this.NumberList.push({
          value1: x,
          operator: '/',
          value2: i,
          result: x / i,
        });
        x = x / i;
      }
    }
  }
}

