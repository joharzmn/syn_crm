import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm } from "@angular/forms";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {
  AbstractControl,
} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form.reset();
  }


  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }
  signUp(){
    this.router.navigate(['/signup/signupform']);
  }

}
