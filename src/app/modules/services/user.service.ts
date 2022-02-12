import { Injectable } from '@angular/core';
import { CreateUserData } from "../../models/create-user-data.model";
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUri = environment.api_url;
  constructor(private http: HttpClient) { }

  // public async createUser(cUserData: CreateUserData){
  //   let uri = this.baseUri + '/api/users';
  //   // uri="http://localhost:5000/api/users/jt4 9256@gmail.com";
  //   console.log('calling uri: ', uri);
  //   console.log('with cUserData: ', cUserData);
  //   return await this.http.post<any>(uri, cUserData);
  // }

  public async createUser(cUserData: CreateUserData){
    let uri = this.baseUri + '/api/users';
    return axios.post(uri, cUserData);
    
  }
}
