import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './foods/food.component';
import { FoodInputFormComponent } from './food-input-form/food-input-form.component';



const routes: Routes = [
  { path: 'foods', component: AppComponent },
  { path: 'input-form', component: FoodInputFormComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
  RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
