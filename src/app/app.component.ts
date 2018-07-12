

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

 
    constructor(private router: Router) { }


    private isLogged = false;

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        if (localStorage.getItem('Token') != null) {
            this.isLogged = true;
        }
        return false;

    }

    logout() {
        localStorage.removeItem('Token');
        this.router.navigate(['/signIn']);
        this.isLogged = false;
    }
}
