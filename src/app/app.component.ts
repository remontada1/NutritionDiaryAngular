import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodService } from './foods/food.service';

import { Food } from './foods/food';




@Component({
  selector: 'app-root',
  templateUrl: './foods/food.component.html',
  styleUrls: ['./foods/food.component.css'],
  providers: [FoodService]
})


export class AppComponent implements OnInit {
  title = 'app';
  private foods: Food[];

  constructor(private http: HttpClient,
    private foodService: FoodService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getAllFoods();
  }
  getAllFoods(): void {
    this.foodService.getFoods().subscribe(foods => {
      this.foods = foods;
    });
  }

}

