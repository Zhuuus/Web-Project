
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalData } from './models';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  private apiUrl = 'http://localhost:8000/api/personaldataset/';

  constructor(private http: HttpClient) {}

  getPersonalDataset(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  // getPersonalData(id: number): Observable<PersonalData> {
  //   return this.http.get<PersonalData>(`${this.apiUrl}/api/personaldataset/${id}/`);
  // }

  // createPerData(perData: PersonalData): Observable<PersonalData> {
  //   return this.http.post<PersonalData>(`${this.apiUrl}/api/companies/`, perData);
  // }

  // updatePersonalData(id: number, perData: PersonalData): Observable<PersonalData> {
  //   return this.http.put<PersonalData>(`${this.apiUrl}/api/companies/${id}/`, perData)
  // }
}
