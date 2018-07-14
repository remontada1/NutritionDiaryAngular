
import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';

import { Observable, Subject } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { EventEmitter } from '@angular/core';

@Injectable()
export class UserService {

    private isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    private baseUrl = 'http://localhost:36290';
    constructor(private http: HttpClient) {

    }


    login(userName, password) {
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set('username', userName);
        urlSearchParams.set('password', password);
        urlSearchParams.set('grant_type', 'password');
        const body = urlSearchParams.toString();

        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };

        this.isLoginSubject.next(true);

        return this.http.post(this.baseUrl + '/oauth/token', body, options);
    }

    logout(): void {
        localStorage.removeItem('Token');
        this.isLoginSubject.next(false);
    }

    isLoggedIn(): Observable<boolean> {
        return this.isLoginSubject.asObservable();
    }

    private hasToken(): boolean {
        return !!localStorage.getItem('Token');
    }
}


