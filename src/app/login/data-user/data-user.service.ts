import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataUser } from './data-user';
import { PersonCecy } from '../restart/person-cecy';

@Injectable({
  providedIn: 'root',
})
export class DataUserService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = 'http://localhost:8000/api/persona';
  private urlCecy: string = 'http://localhost:8082/api/personCecy';

  public save(dataUser: PersonCecy): Observable<PersonCecy> {
    return this.http.post<PersonCecy>(`${this.urlCecy}/`, dataUser, this.httpOptions);
  }

  public findById(id: number): Observable<DataUser> {
    return this.http.get<DataUser>(`${this.url}/${id}`, this.httpOptions);
  }

  public findAll(): Observable<DataUser[]> {
    return this.http.get<DataUser[]>(`${this.url}/`, this.httpOptions);
  }

  public findByCedula(cedula: String): Observable<DataUser[]> {
    return this.http.get<DataUser[]>(`${this.url}?cedula=${cedula}`, this.httpOptions);
  }

}
