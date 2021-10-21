import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobprofile',
  templateUrl: './jobprofile.component.html',
  styleUrls: ['./jobprofile.component.css']
})
export class JobprofileComponent implements OnInit {

  output ={email: "",
    firstname: "",
    lastname: "",
    company: "",
    salary: "",
  }

  form= this.fb.group({
    fname:[
      '',
      {
      validators: [Validators.required],
      },
    ],
    lname:[
      '',
      {
      validators: [Validators.required],
      },
    ],
    email:[
      '',
      {
      validators: [Validators.required, Validators.email],
      },
    ],
    company:[
      '',
      {
      validators: [Validators.required],
      },
    ],
    currency:[
      '',
      {
        validators: [Validators.required],
      },
    ]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get fname(){
    return this.form.controls['fname'];
  }

  get lname(){
    return this.form.controls['lname'];
  }

  get email(){
    return this.form.controls['email'];
  }

  get company(){
    return this.form.controls['company'];
  }

  get currency(){
    return this.form.controls['currency'];
  }


  get valid(){
    return this.form.controls;
  }

  onOutput(){
    this.output ={
      email: this.email.value,
      firstname: this.fname.value,
      lastname: this.lname.value,
      company: this.company.value,
      salary: this.currency.value,
  
    }
  }

}
