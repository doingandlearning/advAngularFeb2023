import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day3';
  starForm: FormGroup;

  constructor() {
    this.starForm = new FormGroup({
      stars: new FormControl(2),
    });
  }
}
