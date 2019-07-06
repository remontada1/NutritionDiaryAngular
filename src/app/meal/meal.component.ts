import { FoodService } from './../shared/food.service';
import { MealService } from './../shared/meal.service';
import { Component, OnInit } from '@angular/core';
import { Meal, MealVM } from './meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers: [MealService]
})

export class MealComponent implements OnInit {

  private dateForGet = {
    Date: '08/13/2018'
  };

  public meals: MealVM;
  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.getMealWithFoodsOnSpecificDate();
  }

  getMealWithFoodsOnSpecificDate() {
      this.mealService.getMealWithFoodsOnSpecificDate(this.dateForGet).subscribe(meal => {
        this.meals = meal;
      });
  }

  // addMeal(meal: Meal): void {
  //   this.mealService.addMeal(meal)
  //     .subscribe(res => {
  //       this.meals.push(meal);
  //     }, (err) => {
  //       console.log(err);
  //     });
  // }
}
