import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  title = 'Angular 2';

  constructor(private http: Http) {}

  get apiCall() {
    return this.http.get('http://localhost:3000/api/feature1')
    .map(res => res.json());
  }
}
