import { Injectable } from '@angular/core';

import { Cookie } from 'ng2-cookies/ng2-cookies';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AppService {

  public url = 'https://chatapi.edwisor.com';

  constructor( public http:HttpClient ) {}

  public signUpFunction(data):any{
    const params = new HttpParams()
    .set('firstName',data.firstName)
    .set('lastName',data.lastName)
    .set('mobile',data.mobile)
    .set('email',data.email)
    .set('password',data.password)
    .set('apiKey',data.apiKey);

    return this.http.post(`${this.url}/api/v1/users/signup`,params);

  } // sign up function closed

  public signInFunction(data):any{
    const params = new HttpParams()
    .set('email',data.email)
    .set('password',data.password)

    return this.http.post(`${this.url}/api/v1/users/login`,params);

  } // sign in function closed

}









