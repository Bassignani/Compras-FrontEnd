import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(){} 

  url(){
    return 'http://127.0.0.1:8000/api/';
  }


}
