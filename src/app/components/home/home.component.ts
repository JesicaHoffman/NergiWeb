import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('enterState', [
      state('*' , style({
       transform: 'translateX(-100%)',
       opacity:0
      })),
      transition(':enter', [
        animate(3000, style({
        transform: 'translateX(0)',
        opacity:1
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
