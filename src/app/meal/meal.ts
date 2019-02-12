import { Food } from './../foods/food';


export class MealVM {
  $id: number;
  mealVm: Meal[];
}
export class Meal {
  id: number;
  name: string;
  mealDate: Date;
  foods: Food[];
}
