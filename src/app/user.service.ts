import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs';

import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000';
 
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: Http) { }


  loginUser(data) {
    return this.http.post(this.url + '/api/login', data).pipe(map(res => res.json()));
  }

  logoutUser() {
    return this.http.get(this.url + '/api/logout').pipe(map(res => res.json()));
  }

  getRoles(data, header) {
    return this.http.post(this.url + '/api/getRoles', data ).pipe(map(res => res.json()));
  }

}
