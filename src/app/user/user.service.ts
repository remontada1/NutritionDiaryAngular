import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class UserService {

    private baseUrl = 'http://localhost:36290';
    constructor(private http: HttpClient) {

    }

    login(userName, password) {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.set('username', userName);
        urlSearchParams.set('password', password);
        urlSearchParams.set('grant_type', 'password');
        let body = urlSearchParams.toString();

        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        return this.http.post(this.baseUrl + '/oauth/token', body, options);
    }
}


