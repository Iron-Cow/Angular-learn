import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  e: number = Math.E;
  str = 'hello world';
  date: Date = new Date();

  fl = 0.42;
  obj: any = {
    a: 1,
    b: {
      c: 4,
      d: 'A'
    }
  };
}
