import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm } from "@angular/forms";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {
  AbstractControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginUserData } from 'src/app/models/login-user-data.model';
import { UserService } from 'src/app/services/user.service';



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

  isSubmit: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.form.reset();
  }


  get f(){
    return this.form.controls;
  }

  async submit(){
    this.isSubmit = true;

    if (!this.form.invalid) {
      let cUserData = {} as LoginUserData;
      cUserData.userName = this.f['email'].value;
      cUserData.password = this.f['password'].value;

      let authenticate = await this.userService.authenticate(cUserData).then((response)=>{
        if (response.isError) {
          if (response.msg === 'userNameNotFound') {
            this.f['email'].setErrors({
              notFound: true
            });
          }
          else if (response.msg === 'passwordDoesNotMatch') {
            this.f['password'].setErrors({
              wrong: true
            });
          }
        }
        else {
          this.router.navigate(['/']);
        }
      });
    }
    else {
      console.log('form is inValid')
      console.log(this.form.value);
    }
  }
  signUp(){
    this.router.navigate(['/signup/signupform']);
  }

}
