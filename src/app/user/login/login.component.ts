import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private isLoginError = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  login(username, password) {
    this.userService.login(username, password).subscribe((data: any) => {
      localStorage.setItem('Token', data.access_token);
      this.userService.setSubjectValue(true);
      this.router.navigate(['foods']);
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.isLoginError = true;
    });
  }

}
