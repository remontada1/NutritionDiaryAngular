import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Food } from './food';
import { of } from 'rxjs/observable/of';

import { MessageService } from '../shared/message.service';


import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'No-Auth': 'True'
    })
};


@Injectable()
export class FoodService {

    private baseUrl = 'http://localhost:36290/api';

    constructor(private http: HttpClient, private messageService: MessageService) { }




    getFoods(): Observable<Food[]> {
        return this.http.get<Food[]>(this.baseUrl + '/foods', httpOptions)
            .pipe(
                tap(heroes => console.log('fetched heroes')),
                catchError(this.handleError('get heroes', []))
            );
    }

    addFood(food: Food): Observable<Food> {
        return this.http.post<Food>('http://localhost:36290/api/food/', food, httpOptions)
            .pipe(
                catchError(this.handleError('addError', food))
            );

    }

    deleteFood(food): Observable<Food> {
        const id = typeof food === 'number' ? food : food.foodId;
        const url = this.baseUrl + '/food/' + id;

        return this.http.delete<Food>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted hero id=${id}`)),
            catchError(this.deleteFood)
        );

    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            this.log(`${operation} failed: ${error.message}`);


            return of(result as T);
        };


    }
    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }

}
