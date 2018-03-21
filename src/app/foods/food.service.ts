import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Food } from './food';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';



const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable()
export class FoodService {



    private baseUrl = 'http://localhost:36290/api/foods';

    constructor(private http: HttpClient) { }


    getFoods(): Observable<Food[]> {
        return this.http.get<Food[]>(this.baseUrl);
    }

    addFood(food: Food) {
        return this.http.post('http://localhost:36290/api/food', food, httpOptions);
    }

}
