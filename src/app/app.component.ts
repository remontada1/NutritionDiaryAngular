import { UserService } from './user/user.service';


import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {

    private isLogged = false;
    private signButtonText: string;

    constructor(private router: Router, private userService: UserService) { }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        // if (localStorage.getItem('Token') != null) {
        //     this.isLogged = true;
        // }
        // return false;
        this.userService.getButtonText.subscribe(text => this.signButtonText = text);

    }

}
