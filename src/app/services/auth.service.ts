import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { CreateUserData } from '../models/create-user-data.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | undefined | null;
  private authStatusListener = new Subject<boolean>();

  constructor(private router: Router, private http: HttpClient) {}

  setAuthData(user: any, token: string) {
    this.setUserInfo(user);
    this.setUserToken(token);
  }

  // Set the user info in the local storage so we can identify user based on user info.
  private setUserInfo(userInfo: any) {
    localStorage.setItem("user", JSON.stringify(userInfo));
  }
  private setUserToken(token: string) {
    localStorage.setItem("token", token);
  }

  // Get the user info from the local storage. It will help us in identifying the user.
  getUserInfo(): any {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  getUserToken(): string | null {
    return localStorage.getItem("token");
  }
  public getToken() {
    let t = localStorage.getItem('token');
    console.log('getToke() is: ', t);
    return t;
  }
  // Remove the user info data fro local storage when user logs out.
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}
