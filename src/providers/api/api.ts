import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CONFIG} from '../../config/config';


/*
  Generated class for the ProvidersApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  APIGet(table: string, input?: any): Observable<any>{
    let route: string = `${CONFIG.api_url}/${table}`;
    let option = null;
    return this.http.get(route, option);
  }

  APIPost(table: string, input?: any): Observable<any>{
    let route: string = `${CONFIG.api_url}/${table}`;
    let option = null;
    return this.http.post(route, input || null, option);
  }
}
