import { Injectable } from '@angular/core';
import { signUp } from './models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  signUp(user: string, password: string): Observable<signUp> {
    return this.http.post<signUp>(`${this.apiUrl}/api/signup/`, {user, password});
  }
}
