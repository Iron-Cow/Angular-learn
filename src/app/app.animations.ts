import {animate, group, keyframes, query, state, style, transition, trigger} from "@angular/animations";

export const boxAnimation =     trigger('box', [
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
  transition('special <=> *', [
    group([
      query('h4', animate(1500, style({
        fontSize: '0.5rem',
        color: 'purple'
      }))),
      style({background: 'green'}),
      animate('1s', style({
        background: 'pink'
      })),
      animate(750),
    ])
  ]),
  // void => *
  transition(':enter', [
    // style({opacity: 0, transform: 'scale(1.2)'}),
    // animate(750)
    animate('4s', keyframes([ // offset - if custom time
      style({background: 'red', offset: 0}),
      style({background: 'black', offset: 0.2}),
      style({background: 'green', offset: 0.3}),
      style({background: 'orange', offset: 1}),
    ]))
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

