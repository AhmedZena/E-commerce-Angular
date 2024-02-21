import { FormControl } from '@angular/forms';

export default class ValidationService {
  static passwordValidator(
    control: FormControl
  ): { [s: string]: boolean } | null {
    const pattern = new RegExp(
      '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$'
    );
    return pattern.test(control.value) ? null : { invalidPassword: true };
  }
  static phoneValidator(control: FormControl): { [s: string]: boolean } | null {
    const pattern = new RegExp('(010|011|012|015)[0-9]{8}$');
    return pattern.test(control.value) ? null : { invalidPhone: true };
  }

  static emailValidator(control: FormControl): { [s: string]: boolean } | null {
    const pattern = new RegExp('^[A-Za-z0-9._]{2,}@[A-Za-z0-9]+.[A-Za-z]{2,}$');
    return pattern.test(control.value) ? null : { invalidEmail: true };
  }
}
