import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './/app.component';

import { FoodComponent } from './foods/food.component';
import { FoodInputFormComponent } from './food-input-form/food-input-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignInComponent } from './user/sign-in/sign-in.component';
import {MessageService} from './shared/message.service';
import { UserService} from './user/user.service';
import { AlertModule } from 'ngx-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    FoodInputFormComponent,
    FoodComponent,
    SignInComponent
  ],
  entryComponents: [

  ],
  imports: [NgbModule.forRoot(),
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule, ReactiveFormsModule, JsonpModule, AppRoutingModule
  ],
  providers: [MessageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
