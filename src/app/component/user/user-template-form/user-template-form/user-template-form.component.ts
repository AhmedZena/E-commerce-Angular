import { Component } from '@angular/core';
import { UsersApiService } from '../../../../services/users-api.service';
import IUser from '../../../../Model/IUser';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-user-template-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './user-template-form.component.html',
  styleUrl: './user-template-form.component.scss',
})
export class UserTemplateFormComponent {
  constructor(
    private usersApiService: UsersApiService,
    private router: Router
  ) {}

  // user!: IUser;
  user: IUser = {
    role: 'user', // default role
  } as IUser; //
  // // Assuming user is an object with a role property
  // user: IUser = {
  //   name: 'Ahmed gamal zena',
  //   email: 'ahmedzena@gmail.com',
  //   password: '123456',
  //   role: 'user',
  //   phone: '01011752787',
  //   address: {
  //     street: '10th street',
  //     city: 'Cairo',
  //     zipcode: '12345',
  //   },
  //   website: 'ahmedzena.com',
  // };

  sendUser() {
    console.log(this.user);
    this.usersApiService.addNewUser(this.user).subscribe({
      // (data) => {
      // console.log(data);
      // this.router.navigate(['/products']);

      next: (data) => {
        console.log(data);
        // this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
