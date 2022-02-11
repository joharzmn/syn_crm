import { Injectable } from '@angular/core';
import { CreateUserData } from "../models/create-user-data.model";
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUri = environment.api_url;
  constructor(private http: HttpClient) { }

  public createUser(cUserData: CreateUserData){
    const uri = this.baseUri + '/api/users';
    return this.http.post<any>(uri, cUserData);
  }
}
