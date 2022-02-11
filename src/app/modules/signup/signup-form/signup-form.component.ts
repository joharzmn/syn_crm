import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm } from "@angular/forms";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {
  AbstractControl,
} from '@angular/forms';

import { UserService } from 'src/app/services/user.service';

// import { AuthService } from 'src/app/services/auth.service';
// import { CreateUserData} from './../../../models/create-user-data.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),

  });

  constructor(private formBuilder: FormBuilder, private router: Router, userServic: UserService) {}

  ngOnInit(): void {
    this.form.reset();
  }


  get f(){
    return this.form.controls;
  }

  submit() {

    if(!this.form.invalid){
      console.log('form is valid');
      // let cUserData = {} as CreateUserData;

      // cUserData.firstName = this.form.controls['firstName'].value;
      // cUserData.lastName = this.form.controls['lastName'].value;
      // cUserData.userName = this.form.controls['email'].value;
      // cUserData.password = this.form.controls['password'].value;

      let cVal = {
        firstName: this.form.controls['firstName'].value,
        lastName: this.form.controls['lastName'].value,
        userName: this.form.controls['email'].value,
        password: this.form.controls['password'].value
      }

      console.log(this.form.value);

      // this.userService.createUser(cVal);
    }
    else{
      console.log('form is inValid')
      console.log(this.form.value);
    }
    // console.log(this.form.value);
    // this.router.navigate(['signup/signupconfirm']);
  }

}