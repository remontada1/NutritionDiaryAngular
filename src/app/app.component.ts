import { UserService } from './user/user.service';


import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from '../../node_modules/rxjs/Observable';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [UserService]
})
export class AppComponent {

    private isLoggedIn: boolean;


    constructor(private router: Router, private userService: UserService) {
        // this.isLoggedIn = userService.isLoggedIn();
        userService.isLoggedIn$.subscribe((isLoggedIn) =>
            this.isLoggedIn = isLoggedIn
        );
    }

}
