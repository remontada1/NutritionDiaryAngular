

import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }

        if (localStorage.getItem('Token') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('Token'))
            });
            return next.handle(clonedReq)
                .do(
                    succ => { },
                    err => {
                        if (err.status === 401) {
                            this.router.navigateByUrl('signIn');
                        }
                    }
                );
        }
        // tslint:disable-next-line:one-line
        else {
            this.router.navigateByUrl('/signIn');
        }
    }
}


