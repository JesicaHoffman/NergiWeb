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
   isloading:boolean = false;
   success:boolean = false;
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
    console.log(this.form)
  }

   handlesubmit(event: any){
    this.isloading = true;
    event.preventDefault();
    fetch('https://formspree.io/f/mlevpbdr',{
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(this.form.value).toString(),
  }
  ).then(e => {
    this.form.reset();
    this.isloading = false;
    this.success = true;
  }).catch( i => {
    this.form.reset();
    this.isloading = false;
    this.success = true;
  });


  }


}
