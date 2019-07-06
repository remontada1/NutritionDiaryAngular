import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMealDatepickerComponent } from './mat-meal-datepicker.component';

describe('MatMealDatepickerComponent', () => {
  let component: MatMealDatepickerComponent;
  let fixture: ComponentFixture<MatMealDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMealDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMealDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
