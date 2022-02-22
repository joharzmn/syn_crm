import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs'
import { Router} from '@angular/router';

import { CreateUserData } from '../models/create-user-data.model'
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private token: string | undefined | null;
  private authStatusListener = new Subject<boolean>();

  constructor(private router: Router, private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  public setToken(_token:string){
    this.token = _token;
    this.saveToLocal(this.token);
  }

  private saveToLocal(token:string){
    localStorage.setItem('token', token);

   }

  getIsAuth() {
    return this.isAuthenticated;
  }

  setIsAuth(val: boolean) {
    this.isAuthenticated = val;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  public setAuthStatusListenerNextValue(val:boolean){
    this.authStatusListener.next(val);
  }

  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
  }
}
