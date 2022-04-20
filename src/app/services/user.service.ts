import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { GlobalService } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string;

  constructor(
    public _http: HttpClient,
    public _glovalServices:  GlobalService,
  ) { 
    this.url = _glovalServices.url();
  }


  register(user: User): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type' , 'application/json');                                
    return this._http.post(this.url+'register', user, { headers: headers });  
  }


  login(user: User): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type' , 'application/json');                                
    return this._http.post(this.url+'login', user, { headers: headers });
  }  

}
