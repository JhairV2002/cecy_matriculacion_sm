import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiCatalogue } from './api-catalogue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCatalogueService {
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };

  private url: string = 'http://localhost:8000/api/catalogo';

  public findById(id: number): Observable<ApiCatalogue> {
    return this.http.get<ApiCatalogue>(`${this.url}/${id}`, this.httpOptions);
  }

  public findAll(): Observable<ApiCatalogue[]> {
    return this.http.get<ApiCatalogue[]>(`${this.url}/`, this.httpOptions);
  }
}
