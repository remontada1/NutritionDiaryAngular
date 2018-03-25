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
    food = {};
    private baseUrl = 'http://localhost:36290/api/food';

    constructor(private http: HttpClient) { }


    getFoods(): Observable<Food[]> {
        return this.http.get<Food[]>('http://localhost:36290/api/foods');
    }

    public addFood(food) {
        this.http.post('http://localhost:36290/api/food/', food, httpOptions)
            .subscribe(res => {
                console.log('Food added');
            }, (err) => { console.log(err); });
    }
}
