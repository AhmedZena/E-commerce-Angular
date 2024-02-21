import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IRole } from '../../../Model/IRole';
import { UsersApiService } from '../../../services/users-api.service';
import { CommonModule } from '@angular/common';

// navigation
import { Router } from '@angular/router';

// validation
import ValidationService from '../../../../util/ValidationService';

@Component({
  selector: 'app-user-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.scss',
})
export class UserReactiveFormComponent implements OnInit {
  regFormGroup!: FormGroup;
  roles: IRole[] = [
    { value: 'user', name: 'User' },
    { value: 'admin', name: 'admin' },
  ];

  // address: FormArray = this.formBuilder.array([this.newAddress()]);

  constructor(
    private usersApiService: UsersApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('hi');
    this.regFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: [
        '',
        [Validators.required, ValidationService.passwordValidator],
      ],
      // phone: ['', [Validators.required, ValidationService.phoneValidator]],
      phone: this.formBuilder.array([]),

      role: [this.roles[0].value, [Validators.required]],
      // role: ['user', [Validators.required]],
      addresses: this.formBuilder.array([]),
    });
    this.addAddress();
    this.addPhone();
  }

  get userName() {
    return this.regFormGroup.get('name');
  }
  get userEmail() {
    return this.regFormGroup.get('email');
  }
  get userPhone() {
    return this.regFormGroup.get('phone') as FormArray;
  }
  get userPassword() {
    return this.regFormGroup.get('password');
  }
  get userRole() {
    return this.regFormGroup.get('role');
  }
  get userAddresses() {
    return this.regFormGroup.get('addresses') as FormArray;
  }

  newAddress(): FormGroup {
    return this.formBuilder.group({
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
    });
  }

  addAddress() {
    this.userAddresses.push(this.newAddress());
  }

  removeAddress(index: number) {
    this.userAddresses.removeAt(index);
  }

  newPhone(): FormGroup {
    return this.formBuilder.group({
      code: ['', [Validators.required]],
      number: ['', [Validators.required]],
    });
  }

  addPhone() {
    this.userPhone.push(this.newPhone());
  }

  removePhone(index: number) {
    this.userPhone.removeAt(index);
  }

  sendUser() {
    console.log('hi');
    if (this.regFormGroup.valid) {
      this.usersApiService
        .addNewUser(this.regFormGroup.value)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/home']);
        });
    }
  }
}
