import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor() {
    this.countProducts$ = new Observable();
    this.totalPrice$ = new Observable();
  }
}
