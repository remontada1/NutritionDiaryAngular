import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-mat-meal-datepicker',
  templateUrl: './mat-meal-datepicker.component.html',
  styleUrls: ['./mat-meal-datepicker.component.css']
})
export class MatMealDatepickerComponent implements OnInit {

  @Output()
  dateChange: EventEmitter<MatDatepickerInputEvent<any>>;

  constructor() { }

  ngOnInit() {
  }

  changeSelectedDate(date: any) {
    console.log('date was changed');
  }
}
