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
import { AuthService } from '../../../services/auth.service';



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

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.form.reset();
    this.autoAuthUser();
  }


  get f(){
    return this.form.controls;
  }

  async submit(){
    this.isSubmit = true;
    console.log('this.isSubmit is: ', this.isSubmit);

    if (!this.form.invalid && this.isSubmit) {
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
          console.log(response);
          this.authService.setAuthData(response.user, response.token);
          this.router.navigate(['/dashboard']);
        }
      });
    }
    else {
      console.log('form is inValid')
      console.log(this.form.value);
    }

  }
  signUp(){
    this.isSubmit = false;
    console.log('this.isSubmit is: ', this.isSubmit);
    this.router.navigate(['/signup']);
    console.log('going to signup');
  }
  autoAuthUser() {
    const token = this.authService.getToken();
    if (!token) {
      return;
    }
    this.router.navigate(['/dashboard']);
  }
}
