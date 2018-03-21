import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './food.component';
import { FoodInputFormComponent } from './food-input-form/food-input-form.component';




@NgModule({
  declarations: [
    AppComponent,
    FoodInputFormComponent
  ],
  entryComponents: [

  ],
  imports: [NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule, JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
