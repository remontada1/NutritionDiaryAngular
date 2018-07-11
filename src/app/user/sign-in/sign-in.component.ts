import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { catchError,  tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  private isLoginError = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(username, password) {
    this.userService.login(username, password).subscribe((data: any) => {
      localStorage.setItem('token', data.access_token);
      this.router.navigate(['foods']);
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.isLoginError = true;
    });
  }

}
