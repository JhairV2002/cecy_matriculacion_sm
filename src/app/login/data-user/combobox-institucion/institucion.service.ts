import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Institucion } from './institucion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };

  private url: string = 'http://localhost:8000/api/institucion';

  public findById(id: number): Observable<Institucion> {
    return this.http.get<Institucion>(`${this.url}/${id}`, this.httpOptions);
  }

  public findAll(): Observable<Institucion[]> {
    return this.http.get<Institucion[]>(`${this.url}/`, this.httpOptions);
  }
}
