import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   obs:any;

  constructor( private translate: TranslateService) { }

  ngOnInit() {

}

changeLang(lang: string){
  this.translate.use(lang);
 }
}
