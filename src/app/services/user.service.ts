import { Injectable } from '@angular/core';
import { CreateUserData } from "../models/create-user-data.model";
import { environment } from '../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import axios from 'axios';
import { LoginUserData } from '../models/login-user-data.model';

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

  public async authenticate(cUserData: LoginUserData) {
    let uri = this.baseUri + '/api/users/authenticate';
    try {
      const resp = await axios.post(uri, cUserData);
      return resp.data;
    }
    catch (error) {
      console.error(error);
      return null;
    }
  }

  public async userExists(username: string){
    let uri = this.baseUri + "api/users/"+username;
    return axios.get(uri);
  }

  public async checkIfUsernameExists(username: string): Promise<boolean> {
    const uri = this.baseUri + '/api/users/' + username;

    try {
      const resp = await axios.get(uri);
      return resp.data.data.username ? true : false
    } catch (error) {
      return false;
    }
  }

  public async resetPassword(username: string): Promise<any> {
    const uri = this.baseUri + '/api/mail/reset-password';

    try {
      const resp = await axios.post(uri, {
        email: username
      });
      console.log("Reset password response:", resp);
      return resp.data;
    } catch (error) {
      console.error("Reset password error:", error);
      return {
        isError: true,
        msg: "Error connecting to API"
      }
    }
  }

  public async updatePassword(password: string, token: string): Promise<any> {
    const uri = this.baseUri + '/api/mail/update-password';

    try {
      const resp = await axios.post(uri, {
        password,
        token
      });
      console.log("Reset password response:", resp);
      return resp.data;
    } catch (error) {
      console.error("Reset password error:", error);
      return {
        isError: true,
        msg: "Error connecting to API"
      }
    }
  }
  // public async userExists(username: string){
  //   let uri = this.baseUri + "api/users/"+username;
  //   let response = await axios.get(uri);

  //   if(response.status==200){
  //     return true;
  //   }
  //   return false;
  // }
}
