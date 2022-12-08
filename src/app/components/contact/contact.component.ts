import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { async } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   form!: FormGroup | any;
   isloading:boolean = false;
   success:boolean = false;
  error: boolean = false;
  emailError: boolean = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
   }

  ngOnInit():void {
    this.form = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        mensaje: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefono: ['', Validators.required],
      }
    )
    console.log(this.form)
  }

   handlesubmit(event: any){
    if (this.form.valid == true){
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
    this.emailError = false;
    this.error = false;
  }).catch( i => {
    this.form.reset();
    this.isloading = false;
    this.success = true;
    this.emailError = false;
    this.error = false;
    setTimeout(()=>{
      this.success = false;
      }, 6000);
  });
}else{
  if(this.form.controls?.email?.status == "INVALID") {
    this.form.reset();
    this.emailError = true;
    this.error = false;
  }else{
  this.error = true;
  this.form.reset();
  this.emailError = false;
}
setTimeout(()=>{
this.emailError = false;
this.error = false;
}, 6000);
}

  }


}
