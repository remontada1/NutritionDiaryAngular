import { MealService } from './../shared/meal.service';
import { Component, OnInit } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})

export class MealComponent implements OnInit {

  private meals: Meal[];
  constructor(private mealService: MealService) { }

  ngOnInit() {
  }


  addMeal(meal): void {
    this.mealService.addMeal(meal)
      .subscribe(res => {
        this.meals.push(meal);
      }, (err) => {
        console.log(err);
      });
  }
}
