import { Injectable } from '@angular/core';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  public user!: User;
  public identity: any;
  public token: any;

  constructor() { }


  setToken(access_token: any){
    localStorage.setItem("token", JSON.stringify(access_token));
  }

  getToken(){
    let token = localStorage.getItem('token');
    if (token != undefined) {
        this.token = JSON.parse(token);
    } else {
        this.token = null;
    }
    return this.token;
  }


  setIdentity(user: User){
    localStorage.setItem("user",JSON.stringify(user));
  }


  getIdentity(){
    let identity = (localStorage.getItem('identity'));  
    if (identity && identity != undefined) {
        this.identity = JSON.parse(identity); 
    } else {
        this.identity = null;
    }
    return this.identity
  }


}
