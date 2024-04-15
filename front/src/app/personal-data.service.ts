
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  private apiUrl = 'http://localhost:8000/api/personaldata/';

  constructor(private http: HttpClient) {}

  getPersonalData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
