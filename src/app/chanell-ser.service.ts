import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Channel_CRUD} from "./hadzen_models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChanellSerService {

  baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getChanells(): Observable<Channel_CRUD[]> {
    console.log(this.http.get<Channel_CRUD[]>(`${this.baseUrl}/api/vacancies/`));
    return this.http.get<Channel_CRUD[]>(`${this.baseUrl}/api/vacancies/`);
  }
}
