import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm } from "@angular/forms";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {
  AbstractControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // form = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //   lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),

  // });

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {

  }



}
