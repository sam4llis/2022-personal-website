import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0,
        }),
      ]),
      query(':enter', [
        animate('600ms ease',
          style({ opacity: 1})
        ),
      ])
    ]),
]);
