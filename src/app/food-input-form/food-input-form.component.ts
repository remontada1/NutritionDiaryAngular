import { Component, OnInit } from '@angular/core';
import { Food } from '../foods/food';
import { NgForm } from '@angular/forms';
import { FoodService } from '../foods/food.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-food-input-form',
  templateUrl: './food-input-form.component.html',
  styleUrls: ['./food-input-form.component.css']
})
export class FoodInputFormComponent implements OnInit {
  constructor(private foodService: FoodService) {

  }

  ngOnInit() {
  }

}
