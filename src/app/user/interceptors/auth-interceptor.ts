

import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('Token')) {
      const req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`
        }
      });
      return next.handle(req);
    }

    return next.handle(request);


  }
}


