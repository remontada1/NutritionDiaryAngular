import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-mat-meal-datepicker',
  templateUrl: './mat-meal-datepicker.component.html',
  styleUrls: ['./mat-meal-datepicker.component.css']
})
export class MatMealDatepickerComponent implements OnInit {

  @Output()
  sendDate: EventEmitter<MatDatepickerInputEvent<any>> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeSelectedDate($event) {
    this.sendDate.emit($event.value);
  }
}
