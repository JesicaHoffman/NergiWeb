import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   obs:any;

  constructor( private translate: TranslateService) {

  }

  ngOnInit() {
    const button = (document.querySelector('.button') as HTMLButtonElement);
    const nav = (document.querySelector('.desplegable') as HTMLElement);
    const select = (document.querySelector('.ul') as HTMLElement);

    button.addEventListener('click', ():void => {
      nav.classList.toggle('activo');
    });

    select.addEventListener('click', ():void => {
      nav.classList.remove('activo')
    });
}

changeLang(lang: string){
  this.translate.use(lang);
 }
}
