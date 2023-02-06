import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basicApp';
  imgName = 'https://http.cat/418';
  name: string = '';

  sayHello(name: string) {
    return `Hello ${name}!`;
  }

  handleMyEvent(event: Event) {
    console.log(event);
  }
}
