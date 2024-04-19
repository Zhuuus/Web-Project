import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {PersonalData, Token} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      `${this.BASE_URL}/api/login/`,
      {username, password}
    )
  }

  getCategories(): Observable<PersonalData[]> {
    return this.http.get<PersonalData[]>(
      `${this.BASE_URL}/api/personaldataset/`
    )
  }

  createCategory(name: string): Observable<PersonalData> {
    return this.http.post<PersonalData>(
      `${this.BASE_URL}/api/personaldataset/`,
      {name}
    )
  }
}