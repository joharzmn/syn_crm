import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.form.reset();
  }

  get f(){
    return this.form.controls;
  }

  async submit() {

    if(!this.form.invalid){
      const email = this.form.controls['email'].value;

      await this.userService.resetPassword(email).then((response)=>{
        console.log("RESPONSE:", response);
        // let status = response.status;
      });
    }
    else {
      console.log('form is inValid')
      console.log(this.form.value);
    }

  }

}
