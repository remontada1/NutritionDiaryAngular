import { catchError } from "rxjs/operators";

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpUserEvent,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          this.router.navigate(['/signIn']);
        }
      }
    );
  }
}
