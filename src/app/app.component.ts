import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @Input()
  search = '';
  searchField = '';
  posts = [
    {title: "Beer", text: "The best Beer in the world"},
    {title: "Bread", text: "The best Bread in the world"},
    {title: 'JavaScript', text: 'The Best Language in the world'}
  ];

  addPost(): void{
    this.posts.unshift({
      title: "Angular8",
      text: 'Iurii Angular 8 course'
    });
  }
}
