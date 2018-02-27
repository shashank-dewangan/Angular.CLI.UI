import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>App Component</h1><app-home></app-home><app-cvr></app-cvr><app-arr></app-arr>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
