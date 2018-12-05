import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heroku-example';

  constructor() {
    fetch('/api/hello')
      .then(res => res.text())
      .then(text => {
        this.title = text;
      });
  }
}
