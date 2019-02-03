import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Food } from '../foods/food';
import { of } from 'rxjs/observable/of';


import { MessageService } from './message.service';
import { Meal } from '../meal/meal';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

const baseUrl = 'http://localhost:36290/api/meal';

@Injectable()
export class MealService {

    constructor(private http: HttpClient, private messageService: MessageService) {

    }

    addMeal(meal: Meal): Observable<Meal> {
        return this.http.post<Meal>(baseUrl, meal, httpOptions)
            .pipe(
                tap(_ => this.log(`meal added`)),
                catchError(this.addMeal)
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
