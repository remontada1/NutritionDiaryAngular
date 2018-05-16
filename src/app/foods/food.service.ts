import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Food } from './food';
import { of } from 'rxjs/observable/of';


import { ErrorObservable } from 'rxjs/observable/ErrorObservable';



const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable()
export class FoodService {

    private baseUrl = 'http://localhost:36290/api/food';

    constructor(private http: HttpClient) { }


    getFoods(): Observable<Food[]> {
        return this.http.get<Food[]>('http://localhost:36290/api/foods');
    }

    addFood(food) {
        return this.http.post('http://localhost:36290/api/food/', food, httpOptions);

    }

    deleteFood(food): Observable<Food> {
        const id = typeof food === 'number' ? food : food.foodId;
        const url = this.baseUrl + '/' + id;

        return this.http.delete<Food>(url, httpOptions).pipe(
            tap(_ => console.log(`deleted hero id=${id}`)),
            catchError(this.deleteFood)
        );

    }

}
