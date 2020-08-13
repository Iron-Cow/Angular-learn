import { Component } from '@angular/core';
import {trigger, state, style, transition, animate, group, sequence, query, keyframes} from "@angular/animations";
import {boxAnimation} from "./app.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    boxAnimation // import from separate file
  ]
})
export class AppComponent {
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animationStarted($event: AnimationEvent) {
    console.log('animation started', $event);
  }
  animationDone($event: AnimationEvent) {
    console.log('animation done', $event);
  }
}


