import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {signUp} from "./models";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8000/'

  constructor(private http: HttpClient) { }

  logIn(user: signUp): Observable<signUp> {
    return this.http.post<signUp>(`${this.apiUrl}api/companies/`, user);
  }
}
