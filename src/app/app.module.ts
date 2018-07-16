import { AuthInterceptor } from './user/interceptors/auth-interceptor';
import { AuthGuard } from './user/guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FoodComponent } from './foods/food.component';
import { FoodInputFormComponent } from './food-input-form/food-input-form.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './user/login/login.component';
import { MessageService } from './shared/message.service';
import { UserService } from './user/user.service';
import { AlertModule } from 'ngx-bootstrap';
import { RegisterComponent } from './user/register/register.component';







@NgModule({
  declarations: [
    AppComponent,
    FoodInputFormComponent,
    FoodComponent,
    LoginComponent,
    RegisterComponent
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
  providers: [MessageService, UserService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
