import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  user: BehaviorSubject<boolean>;

  constructor() {
    this.user = new BehaviorSubject<boolean>(this.isUserLoggedIn);
  }

  // login
  login(email: string, password: string) {
    let userToken = 'this is userToken';
    localStorage.setItem('userToken', userToken);
    this.user.next(true);
  }

  logout() {
    localStorage.removeItem('userToken');
    this.user.next(false);
  }

  // is user logged in
  get isUserLoggedIn() {
    return localStorage.getItem('userToken') ? true : false;
  }
}
