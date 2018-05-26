import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.model';
import { catchError,  tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  OnSubmit(username, password) {
    this.userService.login(username, password).subscribe((data: any) => {
      localStorage.setItem('token', data.access_token);
      this.router.navigate(['foods']);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

}
