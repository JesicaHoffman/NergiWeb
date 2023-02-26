import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
   hide: boolean = false;

  constructor() { }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
});

const button = (document.querySelector('.companies-min') as HTMLButtonElement);
const info = (document.querySelector('.companies') as HTMLElement);
const buttonCompanies = (document.querySelector('.button-companies') as HTMLButtonElement);

const button1 = (document.querySelector('.companies-min1') as HTMLButtonElement);
const info1 = (document.querySelector('.companies1') as HTMLElement);
const buttonCompanies1 = (document.querySelector('.button-companies1') as HTMLButtonElement);

const button2 = (document.querySelector('.companies-min2') as HTMLButtonElement);
const info2 = (document.querySelector('.companies2') as HTMLElement);
const buttonCompanies2 = (document.querySelector('.button-companies2') as HTMLButtonElement);

info.classList.remove('inactivo');
  info.classList.toggle('activo');
  button.classList.toggle('inactivo');

button.addEventListener('click', ():void => {
  info.classList.remove('inactivo');
  info.classList.toggle('activo');
  button.classList.toggle('inactivo');

  button1.classList.remove('inactivo');
  button1.classList.toggle('activo');
  info1.classList.remove('activo');

  button2.classList.remove('inactivo');
  button2.classList.toggle('activo');
  info2.classList.remove('activo');
});

buttonCompanies.addEventListener('click', ():void => {
  button.classList.remove('inactivo');
  button.classList.toggle('activo');
  info.classList.remove('activo');

});



button1.addEventListener('click', ():void => {
  info1.classList.remove('inactivo');
  info1.classList.toggle('activo');
  button1.classList.toggle('inactivo');

  button2.classList.remove('inactivo');
  button2.classList.toggle('activo');
  info2.classList.remove('activo');

  button.classList.remove('inactivo');
  button.classList.toggle('activo');
  info.classList.remove('activo');

});

buttonCompanies1.addEventListener('click', ():void => {
  button1.classList.remove('inactivo');
  button1.classList.toggle('activo');
  info1.classList.remove('activo');

});



button2.addEventListener('click', ():void => {
  info2.classList.remove('inactivo');
  info2.classList.toggle('activo');
  button2.classList.toggle('inactivo');

  button.classList.remove('inactivo');
  button.classList.toggle('activo');
  info.classList.remove('activo');

  button1.classList.remove('inactivo');
  button1.classList.toggle('activo');
  info1.classList.remove('activo');

});

buttonCompanies2.addEventListener('click', ():void => {
  button2.classList.remove('inactivo');
  button2.classList.toggle('activo');
  info2.classList.remove('activo');

});

}

}
