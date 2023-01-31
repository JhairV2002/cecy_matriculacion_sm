import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataUser } from './data-user';

@Injectable({
  providedIn: 'root',
})
export class DataUserService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = 'http://localhost:8000/api/persona';

  public save(dataUser: DataUser): Observable<DataUser> {
    return this.http.post<DataUser>(`${this.url}/`, dataUser, this.httpOptions);
  }
}
