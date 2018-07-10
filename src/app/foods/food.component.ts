import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodService } from './food.service';
import { Router } from '@angular/router';

import { Food } from './food';





@Component({
  selector: 'app-root',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodService]
})


export class FoodComponent implements OnInit {
  title = 'app';
  private foods: Food[];


  constructor(private http: HttpClient,
    private foodService: FoodService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() {
    this.getAllFoods();
  }

  getAllFoods(): void {
    this.foodService.getFoods().subscribe(foods => {
      this.foods = foods;
    });
  }

  createFood(food) {
    this.foodService.addFood(food)
      .subscribe(res => {
        this.foods.push(res);
        console.log('success');
      }, (err) => { console.log(err); });
  }

  delete(food): void {
    this.foods = this.foods.filter(f => f !== food);
    this.foodService.deleteFood(food).subscribe(
      res => {
        this.getAllFoods();
      }, (err) => { console.log('food has not been deleted'); });
  }

  addFoodRedirect = function () {
    this.router.navigate(['/input-form']);
  };

}

