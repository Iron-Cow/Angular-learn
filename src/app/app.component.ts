import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number1 = 42;
  arr = [1, 3, 5];
  obj = {
    a: 1,
    b: {c: 2}
  };
}
