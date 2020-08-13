import { Component, OnInit } from '@angular/core';
import {animate, transition, trigger, useAnimation} from "@angular/animations";
import {bounce, bounceOutUp, wobble} from "ng-animate";

@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visible = !visible">Toggle</button>
    <hr>
    <div class="rect"
    [@bounce]
     *ngIf="visible"
    ></div>
  `,
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(wobble)),
      transition('* => void', useAnimation(bounceOutUp, {
        params: {
          timing: 3,
          delay: 1
        }
      }))]),
  ],
})
export class AnimateComponent implements OnInit {
  visible = true;
  constructor() { }

  ngOnInit(): void {
  }

}


// ng g c animate --skipTests
// google ng animate
