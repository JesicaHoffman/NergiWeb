import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
