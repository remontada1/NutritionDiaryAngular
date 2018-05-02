import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FoodComponent } from './foods/food.component';
import { FoodInputFormComponent } from './food-input-form/food-input-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    FoodComponent,
    FoodInputFormComponent
  ],
  entryComponents: [

  ],
  imports: [NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule, JsonpModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [FoodComponent]
})
export class AppModule { }
