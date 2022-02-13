import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
} from '@angular/forms';
import { UserService } from '../modules/services/user.service';
  
  export class UsernameValidator {
    static createValidator(userService: UserService): AsyncValidatorFn {
      return async (control: AbstractControl): Promise<ValidationErrors | null> => 
        (await userService.checkIfUsernameExists(control.value)) ? { usernameAlreadyExists: true } : null
    }
  }