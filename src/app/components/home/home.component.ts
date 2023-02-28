import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('enterState', [
      state(
        'void',
        style({
          transform: 'translateX(-5%)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          1000,
          style({
            transform: 'translateX(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
