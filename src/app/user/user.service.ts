import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserComponent } from './user.component';

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
        const body = new URLSearchParams();
        body.set('username', userName);
        body.set('password', password);
        body.set('grant_type', 'password');




        const data = 'username=' + userName + '&password=' + password + '&grant_type=password';

        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        /*  let headers = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }; */
        return this.http.post(this.baseUrl + '/oauth/token', data, options);


    }
}


