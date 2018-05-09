import { Component, OnInit } from '@angular/core';
import { Food } from '../foods/food';
import { NgForm } from '@angular/forms';
import { FoodService } from '../foods/food.service';
import { Observable } from 'rxjs/Observable';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';



@Component({
  selector: 'app-food-input-form',
  templateUrl: './food-input-form.component.html',
  styleUrls: ['./food-input-form.component.css'],
  providers: [FoodService]
})
export class FoodInputFormComponent implements OnInit {
  food = {};

  constructor(private foodService: FoodService) {

  }

  ngOnInit() {
  }

  createFood(food) {
    this.foodService.addFood(food)
      .subscribe(res => {
        console.log('Food added');
      }, (err) => { console.log(err); });
    console.log('food created');
  }

}
