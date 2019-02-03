import { Subject } from 'rxjs/subject';
import {takeUntil} from 'rxjs/operators';
import { UserService } from './user/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit, OnDestroy {
    private unsubscribe$ = new Subject();
    public isLoggedIn: boolean;


    constructor(private router: Router, private userService: UserService) {
        userService.isLoggedIn$
            .takeUntil(this.unsubscribe$)
            .subscribe((isLoggedIn) =>
                this.isLoggedIn = isLoggedIn
            );
    }

    ngOnInit() { }

    logOut(): void {
      this.userService.logout();
      this.router.navigate(['/signIn']);
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
