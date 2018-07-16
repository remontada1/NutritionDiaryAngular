
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

    private isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    private baseUrl = 'http://localhost:36290';
    public isLoggedIn$ = this.isLoginSubject.asObservable();

    constructor(private http: HttpClient) { }

    login(userName, password) {
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set('username', userName);
        urlSearchParams.set('password', password);
        urlSearchParams.set('grant_type', 'password');
        const body = urlSearchParams.toString();

        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };

        return this.http.post(this.baseUrl + '/oauth/token', body, options);
    }

    logout(): void {
        localStorage.removeItem('Token');
        this.isLoginSubject.next(false);
    }

    setSubjectValue(value): void {
        this.isLoginSubject.next(value);
    }

    private hasToken(): boolean {
        return !!localStorage.getItem('Token');
    }
}


