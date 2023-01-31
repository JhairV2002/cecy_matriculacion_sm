import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = 'http://localhost:8000/api/persona';

  public save(request: Request): Observable<Request> {
    return this.http.post<Request>(`${this.url}/`, request, this.httpOptions);
  }

  public findByid(id: number): Observable<Request> {
    return this.http.get<Request>(`${this.url}/${id}`, this.httpOptions);
  }

  /**
   * findByName
   */
  public findByName(term: string): Observable<Request[]> {
    return this.http.get<Request[]>(
      `${this.url}/findByName/${term}`,
      this.httpOptions
    );
  }

  /**
   * findAll
   */
  public findAll(): Observable<Request[]> {
    return this.http.get<Request[]>(`${this.url}/`, this.httpOptions);
  }
  /**
   * deleteByid
   */
  public deleteByid(id: number): Observable<Request> {
    return this.http.delete<Request>(
      `${this.url}/deleteById/${id}`,
      this.httpOptions
    );
  }
}
