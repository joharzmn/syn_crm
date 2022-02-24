import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from "../services/auth.service";
import axios from 'axios';

@Injectable()
export class AuthAxiosInterceptor {
  constructor(private authService: AuthService) {
    axios.interceptors.request.use(req => {
      console.log("Axios interceptor");

      const user = this.authService.getUserInfo();
      const token = user.token;

      req.headers = {
        'Authorisation': `Bearer ${token}`,
      }
      return req;

     }, err => Promise.reject(err))
  }

}
