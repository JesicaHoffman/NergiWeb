import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slideInAnimation } from './animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class AppComponent implements OnInit {
  title = 'NergiWeb';
  langs: string[] = [];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.addLangs(['en', 'es']);
    this.langs = translate.getLangs();
  }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onActivate() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    ///this.onActivate();
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
