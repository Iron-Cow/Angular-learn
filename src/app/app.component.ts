import { Component } from '@angular/core';
import {trigger, state, style, transition, animate, group, sequence} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('box', [
      state('start', style({
        background: 'blue',
        // borderRadius: '50%',
        // opacity: 1,
        transform: 'scale(1)'

      })),
      state('end', style({
        background: 'red',
        transform: 'scale(1.2)',
        borderRadius: '0',
        opacity: 1
      })),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%',
        opacity: 1
      })),
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('* <=> special', [
        style({background: 'green'}),
        animate('1s', style({
          background: 'pink'
        })),
        animate(750),
      ]),
      // void => *
      transition(':enter', [
        style({opacity: 0, transform: 'scale(1.2)'}),
        animate(750)
      ]),
      // * => void
      transition(':leave', [
        style({opacity: 1}),
        // sequence([ --- default
        group([
            animate(750, style({
              opacity: 0,
              transform: 'scale(1.2)'
            })),
            animate(750, style({
              color: "green",
              fontWeight: 'bold'
            }))
          ]
        ),
      ]),
    ])
  ]
})
export class AppComponent {
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }
}
