import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'NergiWeb';
  langs: string[] = [];

  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');
    translate.use('en');
    translate.addLangs(['en', 'es']);
    this.langs = translate.getLangs();
  }



  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
