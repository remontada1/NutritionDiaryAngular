import { RegisterComponent } from './user/register/register.component';
import { Login } from './user/models/login.model';
import { AuthGuard } from './user/guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './foods/food.component';
import { FoodInputFormComponent } from './food-input-form/food-input-form.component';
import { LoginComponent } from './user/login/login.component';




const routes: Routes = [
  { path: 'foods', component: FoodComponent },
  { path: 'input-form', component: FoodInputFormComponent, canActivate: [AuthGuard] },
  { path: 'signIn', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
