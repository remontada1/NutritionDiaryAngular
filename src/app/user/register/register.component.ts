import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(): void {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }


  register(): void {
    this.userService.register(this.registerForm.value).subscribe((data: any) => {
      console.log('user created successfully');
    },
      (error: HttpErrorResponse) => {
      console.log(error.error.modelState);
      }
    );
  }
}
