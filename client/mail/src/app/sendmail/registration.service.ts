import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {QueryApi} from "../commonservice/request/QueryApi";
import { catchError } from 'rxjs/operators'
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private queryApi: QueryApi) { }

  PostEmail(params):Observable<any>{
    console.log("service",params)
    return this.queryApi.doPost('USER',params)
      .pipe(
        catchError(err => of([err]))
      );

  }
}
