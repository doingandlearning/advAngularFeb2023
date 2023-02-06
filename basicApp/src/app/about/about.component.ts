import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() time: any = 'Watch here .... ';
  @Output() myEvent = new EventEmitter();
  username: string = '';

  handleClick() {
    this.myEvent.emit({ data: this.username });
  }

  random() {
    console.log(Math.random());
    return Math.random();
    16;
  }
}
