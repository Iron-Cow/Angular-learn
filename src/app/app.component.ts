import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle: any = false;
  arr = [1, 1, 2, 3, 5, 8];

  // @ts-ignore
  objects = [
    {title: 'Post1', author: "Iurii", comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'}
      ]},
     {title: 'Post2', author: "Petia", comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'}
      ]}
  ];
}
