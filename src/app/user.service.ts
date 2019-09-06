import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs';

import { map } from 'rxjs/operators';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000';
  constructor(private http: Http) { }

  logoutUser() {
    return this.http.get(this.url + '/api/logout').pipe(map(res => res.json()));
  }
}
