import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  form = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    cPassword: new FormControl('', [Validators.required]),
  });

  token: string | null = null;
  apiResponse: any = null;
  
  constructor(private userService: UserService, private routeURL: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form.reset();

    this.routeURL.params.subscribe(params => {
      console.log("UDPATE PASSWORD:", params['token']);
      this.token = params['token'] || null;
    });
  }

  get f(){
    return this.form.controls;
  }

  async submit() {

    console.log(this.f);

    if(!this.form.invalid) {
      const password = this.f['password'].value;
      const cPassword = this.f['cPassword'].value;

      if (password !== cPassword) return;
      if (!this.token) return;

      await this.userService.updatePassword(password, this.token).then((response)=>{
        console.log("RESPONSE:", response);
        this.apiResponse = response;

        if (!this.apiResponse['isError']) {
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        }
      });
    }
    else {
      console.log('form is inValid')
      console.log(this.form.value);
    }

  }

}
