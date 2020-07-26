import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;
  // static -> true, if call from ngOnInit

  title = '';
  text = '';

  constructor() { }

  ngOnInit (): void {
  }

  addPost(): void{
    if (this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      };

      this.onAdd.emit(post);

      console.log("Post Added", post);
      this.text = this.title = '';
    }
  }

  focusTitle(): void{
    // focus input field
    console.log(this.inputRef);
    this.inputRef.nativeElement.focus();
  }
}
