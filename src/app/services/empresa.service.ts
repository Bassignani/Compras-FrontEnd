import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url:string;

  constructor(
    public _http: HttpClient,
    public _glovalServices:  GlobalService,
  ) { 
    this.url = _glovalServices.url();
  }

  
}
