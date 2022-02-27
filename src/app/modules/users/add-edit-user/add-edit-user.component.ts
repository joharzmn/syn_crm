import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl} from '@angular/forms';
import { UsernameValidator } from '../../../validators/user-name.validator';
import { UserService } from 'src/app/services/user.service';

export interface UsersData {
  name: string;
  id: number;
}


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent {

  action:string;
  local_data:any;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email],[UsernameValidator.createValidator(this.userService)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    status: new FormControl('', [Validators.required, Validators.minLength(8)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),

  });
  constructor(private userService: UserService,
    public dialogRef: MatDialogRef<AddEditUserComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    // console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
    console.log('local data is: ', this.local_data);
    // this.form.controls['email'].value = this.local_data.email;;
   this.form.get('email')?.setValue(this.local_data.username);
   this.form.get('firstName')?.setValue(this.local_data.firstName);
   this.form.get('lastName')?.setValue(this.local_data.lastName);
   this.form.get('phone')?.setValue(this.local_data.phone);
   this.form.get('status')?.setValue(this.local_data.status);
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
  get f(){
    return this.form.controls;
  }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  async submit() {}
}
