import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {


  user;
  token;
  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    // this.user = JSON.parse(localStorage.getItem('user'));
    // console.log(this.user);
    // this.token = this.user.token;
    // console.log('token id', this.token);
    // this.getUserRoles();
  }

  getUserRoles() {
    this.userService.getRoles(this.user, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)}).subscribe(res => {
      console.log(res);
    });
  }


}
