import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import IUser from '../../../Model/IUser';
import { UserAuthService } from '../../../services/user-auth.service';
import ValidationService from '../../../../util/ValidationService';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  constructor(
    private userAuthService: UserAuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: [
        '',
        [Validators.required, ValidationService.passwordValidator],
      ],
    });
  }

  onSubmit() {
    const user: IUser = {
      email: this.loginFormGroup.value.email,
      password: this.loginFormGroup.value.password,
      role: 'user',
    };
    this.userAuthService.login(user.email, user.password);
    this.router.navigate(['/home']);
  }
}
