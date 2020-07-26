import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Angular component', text: 'Still learning component...', id: 1},
    {title: 'Next blok', text: 'This text about directives... 11235813', id: 1}
  ];

  updatePosts(post: Post): void{
    this.posts.unshift(post);
    console.log("Post", post);
  }
}
