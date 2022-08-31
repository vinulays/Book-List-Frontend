import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<Object> {
    return this.http.post('http://localhost:8000/login', user);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post('http://localhost:8000/login/create', user);
  }
}
