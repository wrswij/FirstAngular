import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css'],
})
export class CarModelListComponent implements OnInit, AfterViewInit {
  makes: Observable<string[]>;
  filterChanged$ = new Subject<string>();

  //  @ViewChild('refreshBtn') refreshButton: ElementRef;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    /*  this.makes = this.filterForm.controls.makeFilter.valueChanges.pipe(
      startWith(''),
      debounceTime(250),
      switchMap((f: string) =>
        this.httpClient.get<string[]>(
          `https://vehicle-data.azurewebsites.net/api/makes?make=${f}`
        )
      )
    );
    */
    this.makes = this.filterChanged$.pipe(
      startWith(''),
      debounceTime(250),
      switchMap((f: string) =>
        this.httpClient.get<string[]>(
          `https://vehicle-data.azurewebsites.net/api/makes?make=${f}`
        )
      )
    );
  }

  ngAfterViewInit() {
    /*    this.makes = fromEvent(this.refreshButton.nativeElement, 'click').pipe(
      debounceTime(250),
      switchMap(() =>
        this.httpClient
          .get<string[]>('https://vehicle-data.azurewebsites.net/api/makes')
          .pipe(
            map((n) =>
              n.filter(
                (make) => !this.filter || make.indexOf(this.filter) !== -1
              )
            )
          )
      )

    );*/
  }

  myHandlerMethod(f: string) {
    this.filterChanged$.next(f);
  }

  myHandlerMethod2(){
    console.log('Field 2');
  }
}

@Component({
  selector: 'app-car-model-list-view',
  template: `
    <ul *ngIf="makes">
      <li *ngFor="let make of makes | async">{{ make }}</li>
    </ul>
  `,
})
export class CarModelListViewComponent {
  @Input() makes: Observable<string[]>;
}

@Component({
  selector: 'app-car-model-list-filter',
  template: `
    <form [formGroup]="filterForm">
      <input type="text" name="makeFilter" formControlName="makeFilter" />
    </form>
  `,
})
export class CarModelListFilterComponent {
  filterForm = new FormGroup({
    makeFilter: new FormControl(),
  });

  @Output() filterChanged = new EventEmitter<string>();

  ngOnInit(): void {
    this.filterForm.controls.makeFilter.valueChanges.subscribe((f) =>
      this.filterChanged.emit(f)
    );
  }
}
