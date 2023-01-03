import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscription } from './inscription';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = 'http://localhost:8080/api/inscription';

  public save(inscription: Inscription): Observable<Inscription> {
    return this.http.post<Inscription>(`${this.url}/save`, inscription, this.httpOptions);
  }

  public findByid(id: number): Observable<Inscription> {
    return this.http.get<Inscription>(`${this.url}/${id}`, this.httpOptions);
  }

  /**
   * findByName
   */
  public findByName(term: string): Observable<Inscription[]> {
    return this.http.get<Inscription[]>(
      `${this.url}/findByName/${term}`,
      this.httpOptions
    );
  }

  /**
   * findAll
   */
  public findAll(): Observable<Inscription[]> {
    return this.http.get<Inscription[]>(`${this.url}/findAll`, this.httpOptions);
  }
  /**
   * deleteByid
   */
  public deleteByid(id: number): Observable<Inscription> {
    return this.http.delete<Inscription>(
      `${this.url}/deleteById/${id}`,
      this.httpOptions
    );
  }
}
