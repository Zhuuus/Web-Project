import { Injectable } from '@angular/core';
import { UserRegister } from './models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  createUser(user: UserRegister): Observable<UserRegister> {
    return this.http.post<UserRegister>(`${this.apiUrl}api/companies/`, user);
  }
}
