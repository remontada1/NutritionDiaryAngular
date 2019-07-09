import { FilterDate } from './filter-date';

import { FoodService } from './../shared/food.service';
import { MealService } from './../shared/meal.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Meal, MealVM } from './meal';
import { MatDatepickerInputEvent } from '@angular/material';
import { moment } from 'ngx-bootstrap/chronos/test/chain';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers: [MealService]
})




export class MealComponent implements OnInit {

  public filterDateDto: FilterDate;
  public meals: MealVM;
  constructor(private mealService: MealService) { }

  ngOnInit() {
    // this.getMealWithFoodsOnSpecificDate();
  }

  getMealWithFoodsOnSpecificDate($event) {

  }
  receiveMessage($event): void {
    const momentDate = new Date($event);
    const formattedDate = moment(momentDate).format("MM/DD/YYYY");

    this.filterDateDto = {
      filterDate: formattedDate
    };

    this.mealService.getMealWithFoodsOnSpecificDate(this.filterDateDto).subscribe(meal => {
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
