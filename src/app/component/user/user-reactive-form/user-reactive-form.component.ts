import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IRole } from '../../../Model/IRole';
import { UsersApiService } from '../../../services/users-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.scss',
})
export class UserReactiveFormComponent {
  formGroup: FormGroup;
  roles: IRole[];
  constructor(private usersApiService: UsersApiService) {
    this.roles = [
      { value: 'user', name: 'User' },
      { value: 'admin', name: 'admin' },
    ];
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9._]{2,}@[A-Za-z0-9]+.[A-Za-z]{2,}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('(010|011|012|015)[0-9]{8}$'),
      ]),
      role: new FormControl(this.roles[0], [Validators.required]),
      address: new FormControl(''),
    });
    console.log(this.roles[1].value);
  }

  get userName() {
    return this.formGroup.get('name');
  }
  get userEmail() {
    return this.formGroup.get('email');
  }
  get userPhone() {
    return this.formGroup.get('phone');
  }
  get userPassword() {
    return this.formGroup.get('password');
  }
  get userRole() {
    return this.formGroup.get('role');
  }
  get userAddress() {
    return this.formGroup.get('address');
  }

  sendUser() {
    console.log('hi');
    //       this.usersApiService.addNewUser(this.formGroup).subscribe({
    //  next: (data) => {
    //       console.log(data);
    //       // this.router.navigate(['/products']);
    //     },
    // }
  }
}
