import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   form!: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
   }

  ngOnInit():void {
    this.form = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        mensaje: ['', Validators.required],
        email: ['', Validators.required],
        telefono: ['', Validators.required],
      }
    )
  }

   handlesubmit(event: any){
    event.preventDefault();
    fetch('https://formspree.io/f/mlevpbdr',{
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(this.form.value).toString(),
  }
  ).then(e => {
    alert("Mensaje enviado con exito");
    this.form.reset();
  }).catch( i => {
    alert("Mensaje enviado con exito");
    this.form.reset();
  });


  }


}
