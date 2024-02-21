import { Injectable } from '@angular/core';
import IUser  from '../Model/IUser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  http = {};

  constructor(private httpclient: HttpClient) {
    this.http = {
      Headers: new Headers({ 'Content-Type': 'application/json' }),
    };
  }

  // post new user
  addNewUser(user: IUser): Observable<IUser> {
    return this.httpclient.post<IUser>(
      `${environment.baseUrl}users`, // url
      // user, // user is the body
      JSON.stringify(user), // user is the body
      this.http // this.http is optional it is used to set the header
    );
  }

  // get all users
  getAllUsers(): Observable<IUser[]> {
    return this.httpclient.get<IUser[]>(`${environment.baseUrl}users`);
  }

  // get user by id
  getUserById(id: number): Observable<IUser> {
    return this.httpclient.get<IUser>(`${environment.baseUrl}users/${id}`);
  }
}
