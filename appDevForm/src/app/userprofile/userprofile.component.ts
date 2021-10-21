import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  displayText = '';

  constructor() { }

  output ={
    email: " ",
    firstname: " ",
    lastname: " ",
    mobile: "",
    password: "",

  }

  val = {
    fname: "",
    lname: "",
    email: " ",
    password: "",
    mnumber: "",
  }


  ngOnInit(): void {}
  
  onSubmit(v: NgForm){
    console.log(v.value,v.valid)
    console.log(this.val);
  }

  onOutput(){
    this.output.firstname = this.val.fname
    this.output.lastname = this.val.lname
    this.output.email = this.val.email
    this.output.mobile = this.val.mnumber

    const salt = bcrypt.genSaltSync(10);
    this.val.password= bcrypt.hashSync(this.val.password, salt);
    this.output.password = this.val.password
  }

  onEmailChange(change: any){
    console.log(change.value);
  }

}
