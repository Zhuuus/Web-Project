import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  // signUp(user: string, password: string): Observable<signUp> {
  //   return this.http.post<signUp>(`${this.apiUrl}/api/signup/`, {user, password});
  // }
  signUp(first_name: string, last_name: string, email: string, phone_number: string, date_of_birth: Data, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/signup/`, { first_name, last_name, email, phone_number, date_of_birth, password });
  }
}
