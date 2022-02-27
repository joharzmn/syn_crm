import { Injectable } from '@angular/core';
import { CreateUserData } from '../models/create-user-data.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import axios from 'axios';
import { LoginUserData } from '../models/login-user-data.model';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUri = environment.api_url;
  private token = '';
  private authStatusListener = new Subject<boolean>();
  private user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  };
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
    ) {}

  //new
  // public setUser(user: any) {
  //   this.user = user;
  // }
  // public getUser() {
  //   return this.user;
  // }

  public async authenticate(cUserData: LoginUserData) {
    let uri = this.baseUri + '/api/users/authenticate';
    try {
      const resp = await axios.post(uri, cUserData);
      return resp.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // public getToken() {
  //   let t = localStorage.getItem('token');
  //   console.log('getToke() is: ', t);
  //   return t;
  // }

  // public tokenExpired(token: any) {
  //   try {
  //     const expiry = JSON.parse(atob(token.split('.')[1])).exp;
  //     console.log('expiry is: ', expiry);
  //     return Math.floor(new Date().getTime() / 1000) >= expiry;
  //   } catch (err) {
  //     return true;
  //   }
  // }

  public async getUsers(){
    let uri = this.baseUri + '/api/users';
    return  this.http.get(uri);
  }

  public async createUser(cUserData: CreateUserData) {
    let uri = this.baseUri + '/api/users';
    return axios.post(uri, cUserData);
  }

  public async userExists(username: string) {
    let uri = this.baseUri + 'api/users/' + username;
    return axios.get(uri);
  }

  public async checkIfUsernameExists(username: string): Promise<boolean> {
    const uri = this.baseUri + '/api/users/' + username;

    try {
      const resp = await axios.get(uri);
      return resp.data.data.username ? true : false;
    } catch (error) {
      return false;
    }
  }

  public async resetPassword(username: string): Promise<any> {
    const uri = this.baseUri + '/api/mail/reset-password';

    try {
      const resp = await axios.post(uri, {
        email: username,
      });
      console.log('Reset password response:', resp);
      return resp.data;
    } catch (error) {
      console.error('Reset password error:', error);
      return {
        isError: true,
        msg: 'Error connecting to API',
      };
    }
  }

  public async updatePassword(password: string, token: string): Promise<any> {
    const uri = this.baseUri + '/api/mail/update-password';

    try {
      const resp = await axios.post(uri, {
        password,
        token,
      });
      console.log('Reset password response:', resp);
      return resp.data;
    } catch (error) {
      console.error('Reset password error:', error);
      return {
        isError: true,
        msg: 'Error connecting to API',
      };
    }
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/loggedout']);
  }
}
