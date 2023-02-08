import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataUser } from '../data-user/data-user';
import { Observable } from 'rxjs';
import { PersonCecy } from './person-cecy';

@Injectable({
  providedIn: 'root'
})
export class PersonCecyService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = 'http://localhost:8080/api/personCecy';

  public save(dataUser: PersonCecy): Observable<PersonCecy> {
    return this.http.post<PersonCecy>(`${this.url}/`, dataUser, this.httpOptions);
  }

  public findById(id: number): Observable<PersonCecy> {
    return this.http.get<PersonCecy>(`${this.url}/${id}`, this.httpOptions);
  }

  public findByCedula(cedula : String): Observable<PersonCecy>{
    return this.http.get<PersonCecy>(`${this.url}/cedula/${cedula}`, this.httpOptions)
  }

  public findAll(): Observable<PersonCecy[]> {
    return this.http.get<PersonCecy[]>(`${this.url}/`, this.httpOptions);
  }

  public update(id: number, PersonCecy: PersonCecy): Observable<PersonCecy> {
    return this.http.put<PersonCecy>(`${this.url}/${id}/`, PersonCecy);
  }
}
